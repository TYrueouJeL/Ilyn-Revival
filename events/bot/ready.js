const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    run(client) {
        client.user.setActivity("Un gameplay soporifique !", {type: ActivityType.Custom});

        console.log(`${client.user.username} is online`);
    }
}