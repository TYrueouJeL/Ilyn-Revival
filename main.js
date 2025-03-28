const { Client, IntentsBitField, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const loadCommands = require('./loaders/loadCommands');
const loadEvents = require('./loaders/loadEvents'); 
const setupDatabase = require('./events/database/setup');
const insertData = require('./events/database/insertData');
require('dotenv').config();

client.commands = new Collection();

(async () => {
    await loadCommands(client);
    await loadEvents(client);

    //Ne fonctionne pas pour l'instant
    // await setupDatabase();
    // await insertData();

    client.login(process.env.TOKEN);
})();