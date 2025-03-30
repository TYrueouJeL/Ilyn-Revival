const connection = require('../../events/database/connection');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'profil',
    description: 'Afficher les informations de l\'aventurier',

    async run(client, message) {
        const discordId = message.author.id;

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

                const adventurerEmbed = new EmbedBuilder()
                    .setColor('Blue')
                    .setTitle(`${adventurerInfo.Name}`)
                    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setDescription(`Voici vos informations d'aventurier :`)
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        { name: 'Classe', value: adventurerInfo.ClassName, inline: true },
                        { name: 'Points de vie', value: `${adventurerInfo.HealthPoints} / ${adventurerInfo.MaxHealthPoints} ❤️`, inline: true },
                        { name: 'Dégâts', value: `${adventurerInfo.Attack} ⚔️`, inline: true },
                        { name: 'Défense', value: `${adventurerInfo.Defense} 🛡️`, inline: true },
                        { name: 'Gold', value: `${adventurerInfo.Gold} 💰`, inline: true },
                        { name: 'Niveau', value: `${adventurerInfo.AdventurerLevel} ⬆️`, inline: true },
                        { name: 'Points d\'expérience', value: `${adventurerInfo.Experience} / ${adventurerInfo.ExperienceRequired} ⭐`, inline: true },
                        { name: 'Prochain niveau', value: `${adventurerInfo.ExperienceRequired - adventurerInfo.Experience} points d\'expérience restants ⭐`, inline: true },
                    )
                
                message.channel.send({ embeds: [adventurerEmbed] });
            });
        })
    }
};