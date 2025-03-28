module.exports = {
    name: "userInfo",
    description: "Get the user informations",

    async run(client, message) {
        const date = message.guild.joinedAt

        const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);

        message.reply(`
Bonjour **${message.author.displayName}** !
Nous sommes sur le serveur **${message.guild.name}**
Tu est sur ce serveur depuis le \`${formattedDate}\`
            `)
    }
}