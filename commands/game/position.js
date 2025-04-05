const Adventurer = require("../../models/Adventurer");
const Personage = require("../../models/Personage");
const Place = require("../../models/Place");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'position',
    description: 'Affiche la position actuelle du joueur',

    async run(client, message) {
        const discordId = message.author.id;

        try {
        const adventurer = await Adventurer.findOne({
            where: { IdDiscord: discordId },
            include: [
                {
                    model: Place,
                    attributes: ['Name', 'Description', 'Location'],
                }
            ]
        });

        if (!adventurer) {
            return message.channel.send('Vous n\'avez pas d\'aventurier. Veuillez en créer un avec la commande `!start`.');
        }

        const { Place: { Name, Description, Location } } = adventurer;

        const positionEmbed = new EmbedBuilder()
            .setColor('White')
            .setTitle(`Position actuelle de ${message.author.username}`)
            .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
            .setDescription(`Vous êtes actuellement à **${Name}**.`)
            .addFields(
                { name: 'Description', value: Description, inline: false },
                { name: 'Localisation', value: Location, inline: false }
            )
            .setTimestamp()
            .setFooter({ text: 'Aventurier', iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [positionEmbed] });
    } catch (error) {
        console.error('Erreur lors de la récupération de la position de l\'aventurier :', error);
        message.channel.send('Une erreur est survenue lors de la récupération de votre position.');
    }
    }
}