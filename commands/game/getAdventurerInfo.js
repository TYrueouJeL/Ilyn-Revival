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
    personage.Name AS Name,
    class.Name AS ClassName,
    level.Level AS AdventurerLevel,
    adventurer.Experience AS Experience,
    level.ExperienceRequired AS ExperienceRequired,
    personage.HealthPoints AS HealthPoints,
    personage.MaxHealthPoints AS MaxHealthPoints,
    personage.Attack AS Attack,
    personage.Defense AS Defense,
    adventurer.Gold AS Gold
FROM adventurer
JOIN personage ON adventurer.IdPersonage = personage.IdPersonage
JOIN class ON personage.IdClass = class.IdClass
JOIN level ON personage.IdLevel = level.IdLevel
WHERE adventurer.IdDiscord = ?
            `;

            connection.query(query, [discordId], (error, result) => {
                if (error) {
                    console.error('Erreur lors de la récupération des informations de l\'aventurier:', error);
                    return message.channel.send('Une erreur est survenue lors de la récupération des informations de l\'aventurier.');
                }

                const adventurerInfo = result[0];
                message.reply(`
Voici vos informations d'aventurier :
${adventurerInfo.Name} (${adventurerInfo.ClassName})
Niveau : ${adventurerInfo.AdventurerLevel}
Points d'expérience : ${adventurerInfo.Experience} / ${adventurerInfo.ExperienceRequired}
Points de vie : ${adventurerInfo.HealthPoints} / ${adventurerInfo.MaxHealthPoints}
Dégâts : ${adventurerInfo.Attack}
Défense : ${adventurerInfo.Defense}
Gold : ${adventurerInfo.Gold}
                `);
            });
        })
    }
};