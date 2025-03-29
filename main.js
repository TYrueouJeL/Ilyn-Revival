const { Client, IntentsBitField, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const loadCommands = require('./loaders/loadCommands');
const loadEvents = require('./loaders/loadEvents'); 
require('dotenv').config();

client.commands = new Collection();

(async () => {
    await loadCommands(client);
    await loadEvents(client);

    client.login(process.env.TOKEN);
})();