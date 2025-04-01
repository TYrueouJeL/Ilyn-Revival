const { BelongsTo } = require('sequelize');
const Ability = require('./Ability');
const Adventurer = require('./Adventurer');
const AdventurerCompanion = require('./AdventurerCompanion');
const Building = require('./Building');
const BuildingPlace = require('./BuildingPlace');
const City = require('./City');
const Class = require('./Class');
const Combat = require('./Combat');
const CombatParticipant = require('./CombatParticipant');
const CombatTeam = require('./CombatTeam');
const Companion = require('./Companion');
const Enemy = require('./Enemy');
const EquipedItem = require('./EquipedItem');
const EquipmentSlot = require('./EquipmentSlot');
const Inventory = require('./Inventory');
const Item = require('./Item');
const Level = require('./Level');
const Personage = require('./Personage');
const Place = require('./Place');
const Region = require('./Region');
const TradeableItem = require('./TradeableItem');
const Type = require('./Type');

Ability.belongsTo(Class, { foreignKey: 'IdClass', targetKey: 'IdClass' });
Ability.belongsTo(Level, { foreignKey: 'IdLevel', targetKey: 'IdLevel' });

Adventurer.belongsTo(Personage, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Adventurer.belongsTo(Place, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });
Adventurer.hasOne(Inventory, { foreignKey: 'IdAdventurer', targetKey: 'IdAdventurer' });
Adventurer.hasMany(AdventurerCompanion, { foreignKey: 'IdAdventurer', targetKey: 'IdAdventurer' });

AdventurerCompanion.belongsTo(Adventurer, { foreignKey: 'IdAdventurer', targetKey: 'IdAdventurer' });
AdventurerCompanion.belongsTo(Companion, { foreignKey: 'IdCompanion', targetKey: 'IdCompanion' });

Building.belongsTo(Type, { foreignKey: 'IdType', targetKey: 'IdType' });
Building.hasMany(BuildingPlace, { foreignKey: 'IdBuilding', targetKey: 'IdBuilding' });

BuildingPlace.belongsTo(Building, { foreignKey: 'IdBuilding', targetKey: 'IdBuilding' });
BuildingPlace.belongsTo(Place, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });

City.hasMany(Place, { foreignKey: 'IdCity', targetKey: 'IdCity' });
City.belongsTo(Region, { foreignKey: 'IdRegion', targetKey: 'IdRegion' });

Class.hasMany(Ability, { foreignKey: 'IdClass', targetKey: 'IdClass' });
Class.hasMany(Personage, { foreignKey: 'IdClass', targetKey: 'IdClass' });

Combat.hasMany(CombatTeam, { foreignKey: 'IdCombat', targetKey: 'IdCombat' });
Combat.belongsTo(Place, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });

CombatParticipant.belongsTo(Personage, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
CombatParticipant.belongsTo(CombatTeam, { foreignKey: 'IdCombatTeam', targetKey: 'IdCombatTeam' });

CombatTeam.belongsTo(Combat, { foreignKey: 'IdCombat', targetKey: 'IdCombat' });
CombatTeam.hasMany(CombatParticipant, { foreignKey: 'IdCombatTeam', targetKey: 'IdCombatTeam' });

Companion.belongsTo(Personage, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Companion.hasMany(AdventurerCompanion, { foreignKey: 'IdCompanion', targetKey: 'IdCompanion' });

Enemy.belongsTo(Personage, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });

EquipedItem.belongsTo(Personage, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
EquipedItem.belongsTo(EquipmentSlot, { foreignKey: 'IdEquipmentSlot', targetKey: 'IdEquipmentSlot' });
EquipedItem.belongsTo(Item, { foreignKey: 'IdItem', targetKey: 'IdItem' });

EquipmentSlot.hasOne(EquipedItem, { foreignKey: 'IdEquipmentSlot', targetKey: 'IdEquipmentSlot' });

Inventory.belongsTo(Adventurer, { foreignKey: 'IdAdventurer', targetKey: 'IdAdventurer' });
Inventory.belongsTo(Item, { foreignKey: 'IdItem', targetKey: 'IdItem' });

Item.hasMany(Inventory, { foreignKey: 'IdItem', targetKey: 'IdItem' });
Item.hasMany(TradeableItem, { foreignKey: 'IdItem', targetKey: 'IdItem' });
Item.hasMany(EquipedItem, { foreignKey: 'IdItem', targetKey: 'IdItem' });

Level.hasMany(Ability, { foreignKey: 'IdLevel', targetKey: 'IdLevel' });
Level.hasMany(Personage, { foreignKey: 'IdLevel', targetKey: 'IdLevel' });

Personage.hasMany(Enemy, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Personage.hasMany(CombatParticipant, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Personage.hasMany(Companion, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Personage.hasMany(Adventurer, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Personage.hasMany(EquipedItem, { foreignKey: 'IdPersonage', targetKey: 'IdPersonage' });
Personage.belongsTo(Level, { foreignKey: 'IdLevel', targetKey: 'IdLevel' });
Personage.belongsTo(Class, { foreignKey: 'IdClass', targetKey: 'IdClass' });

Place.hasMany(Combat, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });
Place.hasMany(Adventurer, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });
Place.hasMany(BuildingPlace, { foreignKey: 'IdPlace', targetKey: 'IdPlace' });
Place.belongsTo(City, { foreignKey: 'IdCity', targetKey: 'IdCity' });   
Place.belongsTo(Region, { foreignKey: 'IdRegion', targetKey: 'IdRegion' });

Region.hasMany(Place, { foreignKey: 'IdRegion', targetKey: 'IdRegion' });

TradeableItem.belongsTo(Item, { foreignKey: 'IdItem', targetKey: 'IdItem' });
TradeableItem.belongsTo(Type, { foreignKey: 'IdType', targetKey: 'IdType' });

Type.hasMany(TradeableItem, { foreignKey: 'IdType', targetKey: 'IdType' });
Type.hasMany(Building, { foreignKey: 'IdType', targetKey: 'IdType' });

console.log('Associations entre les modèles établies avec succès.');