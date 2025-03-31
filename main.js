const { Client, IntentsBitField, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const loadCommands = require('./loaders/loadCommands');
const loadEvents = require('./loaders/loadEvents'); 

const sequelize = require('./events/database/sequelizeConnection');

const Ability = require('./models/Ability');
const Adventurer = require('./models/Adventurer');
const AdventurerCompanion = require('./models/AdventurerCompanion');
const Building = require('./models/Building');
const BuildingPlace = require('./models/BuildingPlace');
const City = require('./models/City');
const Class = require('./models/Class');
const Combat = require('./models/Combat');
const CombatParticipant = require('./models/CombatParticipant');
const CombatTeam = require('./models/CombatTeam');
const Companion = require('./models/Companion');
const Enemy = require('./models/Enemy');
const EquipedItem = require('./models/EquipedItem');
const EquipmentSlot = require('./models/EquipmentSlot');
const Inventory = require('./models/Inventory');
const Item = require('./models/Item');
const Level = require('./models/Level');
const Personage = require('./models/Personage');
const Place = require('./models/Place');
const Region = require('./models/Region');
const TradeableItem = require('./models/TradeableItem');
const Type = require('./models/Type');

require('dotenv').config();

client.commands = new Collection();

require('./models/associations');

(async () => {
    await loadCommands(client);
    await loadEvents(client);

    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    client.login(process.env.TOKEN);
})();