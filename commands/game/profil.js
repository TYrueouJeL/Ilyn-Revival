const { EmbedBuilder } = require('discord.js');
const sequelize = require('../../events/database/sequelizeConnection');
const Adventurer = require('../../models/Adventurer');
const Personage = require('../../models/Personage');
const Class = require('../../models/Class');
const Level = require('../../models/Level');

module.exports = {
    name: 'profil',
    description: 'Afficher les informations de l\'aventurier',

    async run(client, message) {
        const discordId = message.author.id;

        try {
            // Vérifier si l'aventurier existe
            const adventurer = await Adventurer.findOne({
                where: { IdDiscord: discordId },
                include: [
                    {
                        model: Personage,
                        include: [
                            { model: Class, attributes: ['Name'] },
                            { model: Level, attributes: ['Level', 'ExperienceRequired'] }
                        ],
                        attributes: ['Name', 'HealthPoints', 'MaxHealthPoints', 'Attack', 'Defense']
                    }
                ],
                attributes: ['Experience', 'Gold']
            });

            if (!adventurer) {
                return message.channel.send('Vous n\'avez pas d\'aventurier. Veuillez en créer un avec la commande `!start`.');
            }

            // Extraire les données nécessaires
            const {
                Personage: { Name, Class: { Name: ClassName }, Level: { Level: AdventurerLevel, ExperienceRequired }, HealthPoints, MaxHealthPoints, Attack, Defense },
                Experience,
                Gold
            } = adventurer;

            // Créer un embed avec les informations
            const adventurerEmbed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle(`${Name}`)
                .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                .setDescription(`Voici vos informations d'aventurier :`)
                .setThumbnail(message.author.displayAvatarURL())
                .addFields(
                    { name: 'Classe', value: ClassName, inline: true },
                    { name: 'Points de vie', value: `${HealthPoints} / ${MaxHealthPoints} ❤️`, inline: true },
                    { name: 'Dégâts', value: `${Attack} ⚔️`, inline: true },
                    { name: 'Défense', value: `${Defense} 🛡️`, inline: true },
                    { name: 'Gold', value: `${Gold} 💰`, inline: true },
                    { name: 'Niveau', value: `${AdventurerLevel} ⬆️`, inline: true },
                    { name: 'Points d\'expérience', value: `${Experience} / ${ExperienceRequired} ⭐`, inline: true },
                    { name: 'Prochain niveau', value: `${ExperienceRequired - Experience} points d\'expérience restants ⭐`, inline: true },
                );

            message.channel.send({ embeds: [adventurerEmbed] });
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de l\'aventurier:', error);
            message.channel.send('Une erreur est survenue lors de la récupération des informations de l\'aventurier.');
        }
    }
};
