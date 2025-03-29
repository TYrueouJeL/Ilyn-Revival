const connection = require('../../events/database/connection');

module.exports = {
    name: 'myAbilities',
    description: 'Get the adventurer abilities',

    async run(client, message) {
        discordId = message.author.id;

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
                    Ability.Name AS AbilityName,
                    Ability.Description AS AbilityDescription,
                    AdventurerAbility.Level AS AbilityLevel
                FROM AdventurerAbility
                JOIN Ability ON AdventurerAbility.IdAbility = Ability.IdAbility
                JOIN Adventurer ON AdventurerAbility.IdAdventurer = Adventurer.IdAdventurer
                WHERE Adventurer.IdDiscord = ?
            `;

            connection.query(query, [discordId, (error, result) => {
                if (error) {
                    console.error('Erreur lors de la récupération des informations des capacités de l\'aventurier:', error);
                    return message.channel.send('Une erreur est survenue lors de la récupération des informations des capacités de l\'aventurier.');
                }

                if (result.length === 0) {
                    return message.channel.send('Vous n\'avez pas encore de capacités.');
                }

                let abilitiesMessage = 'Voici vos capacités :\n';
                result.forEach(ability => {
                    abilitiesMessage += `Nom : ${ability.AbilityName}\nDescription : ${ability.AbilityDescription}\nNiveau : ${ability.AbilityLevel}\n\n`;
                });
                message.reply(abilitiesMessage);
            }])
        })
    }
}