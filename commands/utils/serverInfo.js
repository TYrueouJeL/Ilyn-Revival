module.exports = {
    name: "serverInfo",
    description: "Get the server informations",

    async run(client, message) {
        const date = message.guild.createdAt

        const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);

        let roles = [];
        roles = message.guild.roles;
        
        let replyMessage = `
Nous sommes sur le serveur **${message.guild.name}** !
Il y a **${message.guild.roles.cache.size}** rôles sur le serveur.
Nombre de membres : **${message.guild.memberCount}**
Nombre de salons : **${message.guild.channels.cache.size}**
Créé le : **${formattedDate}**
Les rôles du serveur sont :
        `;
        
        roles.cache.forEach(role => {
            replyMessage += (`- ${role.name}\n`);
        });
        
        message.reply(replyMessage);
    }
}