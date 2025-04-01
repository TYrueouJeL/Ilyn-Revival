const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
const Adventurer = require('../../models/Adventurer');
const Class = require('../../models/Class');
const Personage = require('../../models/Personage');
const Level = require('../../models/Level');
const Place = require('../../models/Place');

module.exports = {
    name: 'start',
    description: 'Commence une nouvelle partie',

    async run(client, message) {
        try {
            const discordId = message.author.id;
            const discordUsername = message.author.username;

            const personage = await Personage.findOne({
                include: [
                    {
                        model: Adventurer,
                        where: { IdDiscord: discordId },
                    },
                ],
            })

            if (personage) {
                return message.reply('Vous avez déjà un aventurier !');
            }

            const classResult = await Class.findAll();

            if (!classResult || classResult.length === 0) {
                return message.reply('Aucune classe disponible.');
            }

            const options = classResult.map((classItem) => {
                return new StringSelectMenuOptionBuilder()
                    .setLabel(classItem.Name)
                    .setValue(classItem.IdClass.toString());
            });

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('classSelect')
                        .setPlaceholder('Sélectionnez une classe')
                        .addOptions(options)
                );

            const filter = (interaction) => {
                return interaction.user.id === discordId;
            }

            const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

            collector.on('collect', async (interaction) => {
                if (interaction.customId === 'classSelect') {
                    const selectedClassId = interaction.values[0];

                    const level = await Level.findOne({
                        where: { Level: 1 },
                    });

                    const place = await Place.findOne({
                        where: { Location: 1.000 },
                    });

                    const newPersonage = await Personage.create({
                        Name: discordUsername,
                        MaxHealthPoints: 100,
                        HealthPoints: 100,
                        Attack: 10,
                        Defense: 5,
                        IdClass: selectedClassId,
                        IdLevel: level.IdLevel,
                    });
                    
                    await Adventurer.create({
                        IdDiscord: discordId,
                        Gold: 0,
                        Experience: 0,
                        IdPersonage: newPersonage.IdPersonage,
                        IdPlace: place.IdPlace,
                    });

                    await interaction.reply(`Votre aventurier ${discordUsername} a été créé avec succès !`);
                }
            });

            message.channel.send({
                content: 'Sélectionnez une classe pour votre aventurier :',
                components: [row],
            });

            collector.on('end', (collected) => {
                if (collected.size === 0) {
                    message.reply('Aucune classe sélectionnée. Veuillez réessayer.');
                }
            });
        } catch (error) {
            console.error('Erreur lors de la commande start:', error);
            message.reply('Une erreur est survenue lors du démarrage de la partie.');
        }
    },
};