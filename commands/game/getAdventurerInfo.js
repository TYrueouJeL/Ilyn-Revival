const connection = require('../../events/database/connection');

module.exports = {
    name: 'getAdventurerInfo',
    description: 'Get the adventurer info',

    async run(client, message) {
        const discordId = message.author.id;

        //vérification si l'utilisateur a un aventurier
        const verificationQuery = `
            SELECT
                Adventurer.IdDiscord
            FROM Adventurer
            WHERE Adventurer.IdDiscord = ?
        `

        connection.query(verificationQuery, [discordId], (error, result) => {
            if (error) {
                console.error('Erreur lors de la vérification de l\'aventurier:', error);
                return message.channel.send('Une erreur est survenue lors de la vérification de l\'aventurier.');
            }

            if (result.length === 0) {
                return message.channel.send('Vous n\'avez pas d\'aventurier. Veuillez en créer un avec la commande `!startAdventure`.');
            }
            
            const query = `
            SELECT
                    Adventurer.*,
                    Level.Level AS AdventurerLevel,
                    Level.ExperienceRequired AS ExperienceRequired,
                    Class.Name AS ClassName
                    FROM Adventurer
                JOIN DiscordUser ON Adventurer.IdDiscord = DiscordUser.IdDiscord
                JOIN AdventurerLevel ON Adventurer.IdAdventurer = AdventurerLevel.IdAdventurer
                JOIN Level ON AdventurerLevel.IdLevel = Level.IdLevel
                JOIN AdventurerClass ON Adventurer.IdAdventurer = AdventurerClass.IdAdventurer
                JOIN Class ON AdventurerClass.IdClass = Class.IdClass
                WHERE DiscordUser.IdDiscord = ?
            `;

            connection.query(query, [discordId], (error, result) => {
                if (error) {
                    console.error('Erreur lors de la récupération des informations de l\'aventurier:', error);
                    return message.channel.send('Une erreur est survenue lors de la récupération des informations de l\'aventurier.');
                }

                const adventurerInfo = result[0];
                message.reply(`
Informations de l'aventurier :
Nom : ${adventurerInfo.Name}
Niveau : ${adventurerInfo.AdventurerLevel}
Classe : ${adventurerInfo.ClassName}
Points d'expérience : ${adventurerInfo.Experience} / ${adventurerInfo.ExperienceRequired}
Points de vie : ${adventurerInfo.HealthPoints} / ${adventurerInfo.MaxHealthPoints}
                `);
            });
        })
    }
};