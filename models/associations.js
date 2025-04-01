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
const CombatAction = require('./CombatAction');
const CombatTurn = require('./CombatTurn');

// Associations

// Class associations
Class.hasMany(Personage, { foreignKey: 'IdClass' });
Class.hasMany(Ability, { foreignKey: 'IdClass' });

// City associations
City.hasMany(Place, { foreignKey: 'IdCity' });

// Region associations
Region.hasMany(Place, { foreignKey: 'IdRegion' });

// Place associations
Place.belongsTo(City, { foreignKey: 'IdCity' });
Place.belongsTo(Region, { foreignKey: 'IdRegion' });
Place.hasMany(Combat, { foreignKey: 'IdPlace' });
Place.belongsToMany(Building, { through: BuildingPlace, foreignKey: 'IdPlace' });

// Item associations
Item.hasMany(TradeableItem, { foreignKey: 'IdItem' });
Item.hasMany(EquipedItem, { foreignKey: 'IdItem' });
Item.hasMany(Inventory, { foreignKey: 'IdItem' });

// Level associations
Level.hasMany(Personage, { foreignKey: 'IdLevel' });
Level.hasMany(Ability, { foreignKey: 'IdLevel' });

// Type associations
Type.hasMany(TradeableItem, { foreignKey: 'IdType' });
Type.hasMany(Building, { foreignKey: 'IdType' });

// Personage associations
Personage.belongsTo(Class, { foreignKey: 'IdClass' });
Personage.belongsTo(Level, { foreignKey: 'IdLevel' });
Personage.hasMany(CombatParticipant, { foreignKey: 'IdPersonage' });
Personage.hasOne(Companion, { foreignKey: 'IdPersonage' });
Personage.hasOne(Enemy, { foreignKey: 'IdPersonage' });
Personage.hasOne(Adventurer, { foreignKey: 'IdPersonage' });

// Combat associations
Combat.belongsTo(Place, { foreignKey: 'IdPlace' });
Combat.hasMany(CombatTeam, { foreignKey: 'IdCombat' });
Combat.hasMany(CombatTurn, { foreignKey: 'IdCombat' });

// CombatTeam associations
CombatTeam.belongsTo(Combat, { foreignKey: 'IdCombat' });
CombatTeam.hasMany(CombatParticipant, { foreignKey: 'IdCombatTeam' });

// CombatParticipant associations
CombatParticipant.belongsTo(Personage, { foreignKey: 'IdPersonage' });
CombatParticipant.belongsTo(CombatTeam, { foreignKey: 'IdCombatTeam' });
CombatParticipant.hasMany(CombatAction, { foreignKey: 'IdCombatParticipant' });
CombatParticipant.hasMany(CombatAction, { foreignKey: 'IdCombatParticipant_1' });

// Companion associations
Companion.belongsTo(Personage, { foreignKey: 'IdPersonage' });
Companion.belongsToMany(Adventurer, { through: AdventurerCompanion, foreignKey: 'IdCompanion' });

// EquipmentSlot associations
EquipmentSlot.hasMany(EquipedItem, { foreignKey: 'IdEquipmentSlot' });

// EquipedItem associations
EquipedItem.belongsTo(Item, { foreignKey: 'IdItem' });
EquipedItem.belongsTo(EquipmentSlot, { foreignKey: 'IdEquipmentSlot' });
EquipedItem.belongsTo(Personage, { foreignKey: 'IdPersonage' });

// Adventurer associations
Adventurer.belongsTo(Personage, { foreignKey: 'IdPersonage' });
Adventurer.hasOne(Inventory, { foreignKey: 'IdAdventurer' });
Adventurer.belongsToMany(Companion, { through: AdventurerCompanion, foreignKey: 'IdAdventurer' });

// Ability associations
Ability.belongsTo(Level, { foreignKey: 'IdLevel' });
Ability.belongsTo(Class, { foreignKey: 'IdClass' });

// Enemy associations
Enemy.belongsTo(Personage, { foreignKey: 'IdPersonage' });

// Building associations
Building.belongsTo(Type, { foreignKey: 'IdType' });
Building.belongsToMany(Place, { through: BuildingPlace, foreignKey: 'IdBuilding' });

// Inventory associations
Inventory.belongsTo(Adventurer, { foreignKey: 'IdAdventurer' });
Inventory.belongsTo(Item, { foreignKey: 'IdItem' });

// BuildingPlace associations
BuildingPlace.belongsTo(Place, { foreignKey: 'IdPlace' });
BuildingPlace.belongsTo(Building, { foreignKey: 'IdBuilding' });

// AdventurerCompanion associations
AdventurerCompanion.belongsTo(Adventurer, { foreignKey: 'IdAdventurer' });
AdventurerCompanion.belongsTo(Companion, { foreignKey: 'IdCompanion' });

// CombatTurn associations
CombatTurn.belongsTo(Combat, { foreignKey: 'IdCombat' });
CombatTurn.hasMany(CombatAction, { foreignKey: 'IdCombatTurn' });

// CombatAction associations
CombatAction.belongsTo(CombatParticipant, { foreignKey: 'IdCombatParticipant' });
CombatAction.belongsTo(CombatParticipant, { foreignKey: 'IdCombatParticipant_1' });
CombatAction.belongsTo(CombatTurn, { foreignKey: 'IdCombatTurn' });

console.log('Associations entre les modèles établies avec succès.');