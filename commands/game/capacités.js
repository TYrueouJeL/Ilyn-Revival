const connection = require('../../events/database/connection');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'capacités',
    description: 'Affiche les capacités de l\'aventurier',

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
                    Ability.Name AS AbilityName,
                    Ability.Description AS AbilityDescription,
                    Level.Level AS AbilityLevel,
                    Ability.Damage AS AbilityDamage,
                    Ability.Regen AS AbilityRegen,
                    Ability.Shield AS AbilityShield,
                FROM Adventurer
                JOIN Personage ON Adventurer.IdPersonage = Personage.IdPersonage
                JOIN Class ON Personage.IdClass = Class.IdClass
                JOIN Ability ON Class.IdClass = Ability.IdClass
                JOIN Level ON Ability.IdLevel = Level.IdLevel
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

                const adventurerEmbed = new EmbedBuilder()
                    .setColor('Blue')
                    .setTitle('Vos capacités')
                    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setDescription(`Voici vos capacités :`)
                    .setThumbnail(message.author.displayAvatarURL())
                    .setTimestamp();

                result.forEach(ability => {
                    adventurerEmbed.addFields({
                        name: ability.AbilityName,
                        value: `
Description : ${ability.AbilityDescription}
Niveau : ${ability.AbilityLevel}
Dégâts : ${ability.AbilityDamage}
Régénération : ${ability.AbilityRegen}
Bouclier : ${ability.AbilityShield}
`,
                        inline: false
                    });
                })

                message.channel.send({ embeds: [adventurerEmbed] });
            }])
        })
    }
}