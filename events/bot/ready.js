const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    run(client) {
        client.user.setActivity("En cours de dev", {type: ActivityType.Custom});

        console.log(`${client.user.username} is online`);
    }
}