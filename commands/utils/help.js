const { readdirSync } = require('fs');

module.exports = {
    name: 'help',
    description: 'List all commands',

    async run(client, message) {
        let count = 0;
        const dirsCommands = readdirSync('./commands/');
        let tab = [];

        for (const dirs of dirsCommands) {
            const filesDirs = readdirSync(`./commands/${dirs}/`).filter(file => file.endsWith('.js'))

            for (const files of filesDirs) {
                filesLength = files.length -3;
                tab.push(files.substring(0, filesLength));
                count++;
            };
        };

        let messageContent = `Voici les ${count} commandes : `;

        tab.forEach ((item) => {
            messageContent += `\n- ${item}`
        })

        message.reply(messageContent)
    }
}