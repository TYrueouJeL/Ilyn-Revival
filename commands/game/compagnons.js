const { EmbedBuilder } = require('discord.js');
const Adventurer = require('../../models/Adventurer');
const Companion = require('../../models/Companion');
const Personage = require('../../models/Personage');
const Class = require('../../models/Class');
const Level = require('../../models/Level');
const AdventurerCompanion = require('../../models/AdventurerCompanion');

module.exports = {
    name: 'compagnons',
    description: 'Affiche les compagnons de l\'aventurier',

    async run(client, message) {
        const discordId = message.author.id;

        try {
            const adventurer = await Adventurer.findOne({
                where: { IdDiscord: discordId }, // Filtre pour récupérer l'aventurier de l'utilisateur actuel
                include: [
                    {
                        model: Companion, // Inclure les compagnons associés à l'aventurier
                        through: AdventurerCompanion, // Utilisation de la table de liaison
                        as: 'Companions', // Alias défini dans les associations
                        attributes: ['Experience'], // Récupérer uniquement l'expérience des compagnons
                        include: [
                            {
                                model: Personage, // Inclure les personnages associés aux compagnons
                                as: 'Personage', // Alias défini dans les associations
                                attributes: ['Name'], // Récupérer le nom du personnage
                                include: [
                                    {
                                        model: Class, // Inclure la classe du personnage
                                        as: 'Class', // Alias défini dans les associations
                                        attributes: ['Name'] // Récupérer le nom de la classe
                                    },
                                    {
                                        model: Level, // Inclure le niveau du personnage
                                        as: 'Level', // Alias défini dans les associations
                                        attributes: ['Level', 'ExperienceRequired'] // Récupérer le niveau et l'expérience requise
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        model: Personage, // Inclure le personnage de l'aventurier
                        as: 'Personage', // Alias défini dans les associations
                        attributes: ['Name'] // Récupérer le nom du personnage
                    }
                ]
            });

            if (adventurer && adventurer.Companions) {
                const companions = adventurer.Companions;

                const companionsEmbed = new EmbedBuilder()
                    .setColor('Green')
                    .setTitle(`${adventurer.Personage.Name}`)
                    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setDescription('Voici vos compagnons :')
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        companions.map(companion => ({
                            name: companion.Personage.Name,
                            value: `
Niveau : ${companion.Personage.Level.Level}
Classe : ${companion.Personage.Class.Name}
Expérience : ${companion.Experience} / ${companion.Personage.Level.ExperienceRequired} ⭐
                            `
                        }))
                    )
                    .setTimestamp();

                await message.channel.send({ embeds: [companionsEmbed] });
            } else {
                if (!adventurer) {
                    return message.reply('Vous n\'avez pas encore d\'aventurier.');
                } else {
                    return message.reply('Vous n\'avez pas encore de compagnons.');
                }
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'aventurier :', error);
            return message.reply('Une erreur est survenue lors de la récupération de vos compagnons.');
        }
    }
}