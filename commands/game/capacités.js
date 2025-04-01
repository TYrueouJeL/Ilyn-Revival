const { EmbedBuilder } = require('discord.js');
const Adventurer = require('../../models/Adventurer');
const Personage = require('../../models/Personage');
const Class = require('../../models/Class');
const Ability = require('../../models/Ability');
const Level = require('../../models/Level');
const { Sequelize } = require('../../events/database/sequelizeConnection');

module.exports = {
    name: 'capacités',
    description: 'Affiche les capacités de l\'aventurier',

    async run(client, message) {
        const discordId = message.author.id;

        try {
            const adventurer = await Adventurer.findOne({
                where: { IdDiscord: discordId },
                include: [
                    {
                        model: Personage,
                        include: [
                            {
                                model: Class,
                                include: [
                                    {
                                        model: Ability,
                                        include: [
                                            {
                                                model: Level,
                                                attributes: ['Level', 'ExperienceRequired']
                                            }
                                        ],
                                        attributes: ['Name', 'Description', 'Damage', 'Regen', 'Shield', 'Experience', 'LevelRequired']
                                    }
                                ]
                            }
                        ],
                        attributes: ['Name', 'IdLevel'],
                    }
                ]
            });

            if (adventurer && adventurer.Personage && adventurer.Personage.Class) {
                const personageLevel = adventurer.Personage.IdLevel;
                const abilities = adventurer.Personage.Class.Abilities || [];

                const filteredAbilities = abilities.filter(ability => ability.Level.Level <= personageLevel);

                const abilitiesEmbed = new EmbedBuilder()
                    .setColor('Gold')
                    .setTitle(`${adventurer.Personage.Name}`)
                    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setDescription('Voici vos capacités :')
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        filteredAbilities.map(ability => ({
                            name: ability.Name,
                            value: `
Description: ${ability.Description}
Expérience: ${ability.Experience} / ${ability.Level.ExperienceRequired} ⭐
Dégâts: ${ability.Damage} ⚔️
Régénération: ${ability.Regen} 💚
Bouclier: ${ability.Shield} 🛡️
`,
                            inline: false
                        }))
                    );

                message.channel.send({ embeds: [abilitiesEmbed] });
            } else {
                message.channel.send('Vous n\'avez pas encore de capacités.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des capacités de l\'aventurier:', error);
            message.channel.send('Une erreur est survenue lors de la récupération des capacités de l\'aventurier.');
        }
    }
}