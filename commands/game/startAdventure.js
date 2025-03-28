const connection = require('../../events/database/connection');
const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    name: 'startAdventure',
    description: 'Start the adventure',

    async run(client, message) {
        const discordId = message.author.id;
        const discordUsername = message.author.username;

        const userCheckQuery = `SELECT * FROM DiscordUser WHERE IdDiscord = ?`;
        connection.query(userCheckQuery, [discordId], (userCheckError, userCheckResult) => {
            if (userCheckError) {
                console.error('Erreur lors de la vérification de l\'utilisateur Discord:', userCheckError);
                return message.channel.send('Une erreur est survenue lors de la vérification de l\'utilisateur Discord.');
            }

            if (userCheckResult.length === 0) {
                const insertQuery = `INSERT INTO DiscordUser (IdDiscord, DiscordUsername) VALUES (?, ?)`;
                connection.query(insertQuery, [discordId, discordUsername], (insertUserError) => {
                    if (insertUserError) {
                        console.error('Erreur lors de l\'insertion de l\'utilisateur Discord:', insertUserError);
                        return message.channel.send('Une erreur est survenue lors de l\'insertion de l\'utilisateur Discord.');
                    }

                    createAdventurer();
                });
            }
        });

        function createAdventurer() {
            const query = `
                SELECT
                    Adventurer.IdDiscord
                FROM Adventurer
                WHERE Adventurer.IdDiscord = ?
            `;

            connection.query(query, [discordId], (error, result) => {
                if (error) {
                    console.error('Erreur lors de la vérification de l\'aventurier:', error);
                    return message.channel.send('Une erreur est survenue lors de la vérification de l\'aventurier.');
                }

                if (result.length > 0) {
                    return message.channel.send('Vous avez déjà un aventurier !');
                }

                const classQuery = `SELECT IdClass, Name FROM Class`;
                connection.query(classQuery, (classError, classResult) => {
                    if (classError) {
                        console.error('Erreur lors de la récupération des classes:', classError);
                        return message.channel.send('Une erreur est survenue lors de la récupération des classes.');
                    }

                    const row = new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId('classSelect')
                                .setPlaceholder('Sélectionnez une classe')
                                .addOptions(
                                    classResult.map(cls =>
                                        new StringSelectMenuOptionBuilder({
                                            label: cls.Name,
                                            value: cls.IdClass.toString(),
                                        })
                                    ),
                                ),
                        );

                    message.channel.send({
                        content: 'Sélectionnez une classe pour votre aventurier :',
                        components: [row],
                    });

                    const filter = i => i.customId === 'classSelect' && i.user.id === discordId;
                    const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

                    collector.on('collect', async interaction => {
                        const selectedClassId = interaction.values[0];

                        const selectedClassQuery = `SELECT * FROM Class WHERE IdClass = ?`;
                        connection.query(selectedClassQuery, [selectedClassId], (selectError, selectResult) => {
                            if (selectError || selectResult.length === 0) {
                                console.error('Erreur lors de la récupération de la classe sélectionnée:', selectError);
                                return interaction.reply('Une erreur est survenue lors de la récupération de la classe sélectionnée.');
                            }

                            const selectedClass = selectResult[0];
                            const adventurerData = [
                                message.author.username,    //Name
                                0,                          //Gold
                                0,                          //Experience
                                selectedClass.HealthPoints, //MaxHealthPoints
                                selectedClass.HealthPoints, //HealthPoints
                                selectedClass.Attack,       //Attack
                                selectedClass.Defense,      //Defense
                                1,                          //IdPlace
                                selectedClass.IdClass,      //IdClass
                                discordId,                 //IdDiscord
                            ];

                            const insertQuery = `
                                INSERT INTO Adventurer (Name, Gold, Experience, MaxHealthPoints, HealthPoints, Attack, Defense, IdPlace, IdClass, IdDiscord)
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                            `;

                            connection.query(insertQuery, adventurerData, (insertError) => {
                                if (insertError) {
                                    console.error('Erreur lors de l\'insertion de l\'aventurier:', insertError);
                                    return interaction.reply('Une erreur est survenue lors de l\'insertion de l\'aventurier.');
                                }

                                interaction.reply(`Votre aventurier de classe ${selectedClass.Name} a été créé !`);
                            });
                        });
                    });

                    collector.on('end', collected => {
                        if (collected.size === 0) {
                            message.channel.send('Vous n\'avez pas choisi de classe. La création de l\'aventurier a été annulée.');
                        }
                    });
                });
            });
        }
    }
};