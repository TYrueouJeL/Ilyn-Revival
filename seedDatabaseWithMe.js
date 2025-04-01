const sequelize = require('./events/database/sequelizeConnection');
const Class = require('./models/Class');
const City = require('./models/City');
const Region = require('./models/Region');
const Place = require('./models/Place');
const Item = require('./models/Item');
const Level = require('./models/Level');
const Type = require('./models/Type');
const TradeableItem = require('./models/TradeableItem');
const Personage = require('./models/Personage');
const Combat = require('./models/Combat');
const CombatTeam = require('./models/CombatTeam');
const CombatParticipant = require('./models/CombatParticipant');
const Companion = require('./models/Companion');
const EquipmentSlot = require('./models/EquipmentSlot');
const EquipedItem = require('./models/EquipedItem');
const Adventurer = require('./models/Adventurer');
const Ability = require('./models/Ability');
const Enemy = require('./models/Enemy');
const Building = require('./models/Building');
const Inventory = require('./models/Inventory');
const BuildingPlace = require('./models/BuildingPlace');
const AdventurerCompanion = require('./models/AdventurerCompanion');
const CombatTurn = require('./models/CombatTurn');
const CombatAction = require('./models/CombatAction');

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Synchroniser et réinitialiser la base de données

    // Insérer les données de fixtures
    const classes = await Class.bulkCreate([
      { IdClass: 1, Name: 'Guerrier', Description: 'Classe de combat rapproché', HealthPointsRatio: 1.5, AttackRatio: 1.2, DefenseRatio: 1.0 },
      { IdClass: 2, Name: 'Mage', Description: 'Classe de magie', HealthPointsRatio: 1.0, AttackRatio: 1.5, DefenseRatio: 0.8 },
      { IdClass: 3, Name: 'Archer', Description: 'Classe de combat à distance', HealthPointsRatio: 1.2, AttackRatio: 1.3, DefenseRatio: 1.1 },
      { IdClass: 4, Name: 'Voleur', Description: 'Classe furtive', HealthPointsRatio: 1.1, AttackRatio: 1.4, DefenseRatio: 0.9 },
      { IdClass: 5, Name: 'Prêtre', Description: 'Classe de soutien', HealthPointsRatio: 1.3, AttackRatio: 1.0, DefenseRatio: 1.2 },
      { IdClass: 6, Name: 'Paladin', Description: 'Classe de défense', HealthPointsRatio: 1.4, AttackRatio: 1.1, DefenseRatio: 1.3 },
      { IdClass: 7, Name: 'Barde', Description: 'Classe de soutien magique', HealthPointsRatio: 1.0, AttackRatio: 1.2, DefenseRatio: 1.1 },
      { IdClass: 8, Name: 'Druide', Description: 'Classe de nature', HealthPointsRatio: 1.2, AttackRatio: 1.1, DefenseRatio: 1.2 },
      { IdClass: 9, Name: 'Moine', Description: 'Classe de combat à mains nues', HealthPointsRatio: 1.3, AttackRatio: 1.3, DefenseRatio: 1.0 },
      { IdClass: 10, Name: 'Nécromancien', Description: 'Classe de magie noire', HealthPointsRatio: 1.0, AttackRatio: 1.6, DefenseRatio: 0.7 }
    ]);

    const cities = await City.bulkCreate([
      { IdCity: 1, Name: 'Ville 1', Description: 'Capitale du royaume', RequiredLevel: 1 },
      { IdCity: 2, Name: 'Ville 2', Description: 'Ville portuaire', RequiredLevel: 2 },
      { IdCity: 3, Name: 'Ville 3', Description: 'Ville montagnarde', RequiredLevel: 3 },
      { IdCity: 4, Name: 'Ville 4', Description: 'Ville désertique', RequiredLevel: 4 },
      { IdCity: 5, Name: 'Ville 5', Description: 'Ville forestière', RequiredLevel: 5 },
      { IdCity: 6, Name: 'Ville 6', Description: 'Ville souterraine', RequiredLevel: 6 },
      { IdCity: 7, Name: 'Ville 7', Description: 'Ville côtière', RequiredLevel: 7 },
      { IdCity: 8, Name: 'Ville 8', Description: 'Ville marchande', RequiredLevel: 8 },
      { IdCity: 9, Name: 'Ville 9', Description: 'Ville fortifiée', RequiredLevel: 9 },
      { IdCity: 10, Name: 'Ville 10', Description: 'Ville agricole', RequiredLevel: 10 }
    ]);

    const regions = await Region.bulkCreate([
      { IdRegion: 1, Name: 'Région 1', Description: 'Plaines verdoyantes', RequiredLevel: 1 },
      { IdRegion: 2, Name: 'Région 2', Description: 'Montagnes enneigées', RequiredLevel: 2 },
      { IdRegion: 3, Name: 'Région 3', Description: 'Déserts arides', RequiredLevel: 3 },
      { IdRegion: 4, Name: 'Région 4', Description: 'Forêts denses', RequiredLevel: 4 },
      { IdRegion: 5, Name: 'Région 5', Description: 'Marécages sombres', RequiredLevel: 5 },
      { IdRegion: 6, Name: 'Région 6', Description: 'Côtes rocheuses', RequiredLevel: 6 },
      { IdRegion: 7, Name: 'Région 7', Description: 'Îles tropicales', RequiredLevel: 7 },
      { IdRegion: 8, Name: 'Région 8', Description: 'Toundra glacée', RequiredLevel: 8 },
      { IdRegion: 9, Name: 'Région 9', Description: 'Vallées fertiles', RequiredLevel: 9 },
      { IdRegion: 10, Name: 'Région 10', Description: 'Collines vallonnées', RequiredLevel: 10 }
    ]);

    const places = await Place.bulkCreate([
      { IdPlace: 1, Name: 'Place 1', Description: 'Centre de la ville', Location: 1.000, IdRegion: 1, IdCity: 1 },
      { IdPlace: 2, Name: 'Place 2', Description: 'Port principal', Location: 2.000, IdRegion: 2, IdCity: 2 },
      { IdPlace: 3, Name: 'Place 3', Description: 'Sommet de la montagne', Location: 3.000, IdRegion: 3, IdCity: 3 },
      { IdPlace: 4, Name: 'Place 4', Description: 'Oasis', Location: 4.000, IdRegion: 4, IdCity: 4 },
      { IdPlace: 5, Name: 'Place 5', Description: 'Clairière', Location: 5.000, IdRegion: 5, IdCity: 5 },
      { IdPlace: 6, Name: 'Place 6', Description: 'Caverne', Location: 6.000, IdRegion: 6, IdCity: 6 },
      { IdPlace: 7, Name: 'Place 7', Description: 'Plage', Location: 7.000, IdRegion: 7, IdCity: 7 },
      { IdPlace: 8, Name: 'Place 8', Description: 'Marché', Location: 8.000, IdRegion: 8, IdCity: 8 },
      { IdPlace: 9, Name: 'Place 9', Description: 'Fort', Location: 9.000, IdRegion: 9, IdCity: 9 },
      { IdPlace: 10, Name: 'Place 10', Description: 'Ferme', Location: 10.000, IdRegion: 10, IdCity: 10 }
    ]);

    const items = await Item.bulkCreate([
      { IdItem: 1, Name: 'Épée', Description: 'Épée en fer', BuyPrice: 100, SellPrice: 50, Damage: 10, Regen: 0, Shield: 0, Rarity: 'Commun', RequiredLevel: 1, SlotType: 'Main' },
      { IdItem: 2, Name: 'Bouclier', Description: 'Bouclier en bois', BuyPrice: 80, SellPrice: 40, Damage: 0, Regen: 0, Shield: 5, Rarity: 'Commun', RequiredLevel: 1, SlotType: 'Main' },
      { IdItem: 3, Name: 'Arc', Description: 'Arc en bois', BuyPrice: 120, SellPrice: 60, Damage: 8, Regen: 0, Shield: 0, Rarity: 'Commun', RequiredLevel: 1, SlotType: 'Main' },
      { IdItem: 4, Name: 'Potion', Description: 'Potion de vie', BuyPrice: 50, SellPrice: 25, Damage: 0, Regen: 10, Shield: 0, Rarity: 'Commun', RequiredLevel: 1, SlotType: 'Consommable' },
      { IdItem: 5, Name: 'Bâton', Description: 'Bâton magique', BuyPrice: 150, SellPrice: 75, Damage: 12, Regen: 0, Shield: 0, Rarity: 'Rare', RequiredLevel: 2, SlotType: 'Main' },
      { IdItem: 6, Name: 'Armure', Description: 'Armure en cuir', BuyPrice: 200, SellPrice: 100, Damage: 0, Regen: 0, Shield: 10, Rarity: 'Rare', RequiredLevel: 2, SlotType: 'Corps' },
      { IdItem: 7, Name: 'Dague', Description: 'Dague empoisonnée', BuyPrice: 180, SellPrice: 90, Damage: 15, Regen: 0, Shield: 0, Rarity: 'Épique', RequiredLevel: 3, SlotType: 'Main' },
      { IdItem: 8, Name: 'Anneau', Description: 'Anneau de protection', BuyPrice: 250, SellPrice: 125, Damage: 0, Regen: 0, Shield: 15, Rarity: 'Épique', RequiredLevel: 3, SlotType: 'Accessoire' },
      { IdItem: 9, Name: 'Casque', Description: 'Casque en acier', BuyPrice: 300, SellPrice: 150, Damage: 0, Regen: 0, Shield: 20, Rarity: 'Légendaire', RequiredLevel: 4, SlotType: 'Tête' },
      { IdItem: 10, Name: 'Amulette', Description: 'Amulette de régénération', BuyPrice: 350, SellPrice: 175, Damage: 0, Regen: 20, Shield: 0, Rarity: 'Légendaire', RequiredLevel: 4, SlotType: 'Accessoire' }
    ]);

    const levels = await Level.bulkCreate([
      { IdLevel: 1, Level: 1, ExperienceRequired: 100, HealthPointsBonus: 10, AttackBonus: 5, DefenseBonus: 3, Type: 'Débutant' },
      { IdLevel: 2, Level: 2, ExperienceRequired: 200, HealthPointsBonus: 20, AttackBonus: 10, DefenseBonus: 6, Type: 'Intermédiaire' },
      { IdLevel: 3, Level: 3, ExperienceRequired: 400, HealthPointsBonus: 30, AttackBonus: 15, DefenseBonus: 9, Type: 'Avancé' },
      { IdLevel: 4, Level: 4, ExperienceRequired: 800, HealthPointsBonus: 40, AttackBonus: 20, DefenseBonus: 12, Type: 'Expert' },
      { IdLevel: 5, Level: 5, ExperienceRequired: 1600, HealthPointsBonus: 50, AttackBonus: 25, DefenseBonus: 15, Type: 'Maître' },
      { IdLevel: 6, Level: 6, ExperienceRequired: 3200, HealthPointsBonus: 60, AttackBonus: 30, DefenseBonus: 18, Type: 'Légende' },
      { IdLevel: 7, Level: 7, ExperienceRequired: 6400, HealthPointsBonus: 70, AttackBonus: 35, DefenseBonus: 21, Type: 'Héros' },
      { IdLevel: 8, Level: 8, ExperienceRequired: 12800, HealthPointsBonus: 80, AttackBonus: 40, DefenseBonus: 24, Type: 'Demi-dieu' },
      { IdLevel: 9, Level: 9, ExperienceRequired: 25600, HealthPointsBonus: 90, AttackBonus: 45, DefenseBonus: 27, Type: 'Dieu' },
      { IdLevel: 10, Level: 10, ExperienceRequired: 51200, HealthPointsBonus: 100, AttackBonus: 50, DefenseBonus: 30, Type: 'Immortel' }
    ]);

    const types = await Type.bulkCreate([
      { IdType: 1, Type: 'Arme' },
      { IdType: 2, Type: 'Armure' },
      { IdType: 3, Type: 'Consommable' },
      { IdType: 4, Type: 'Accessoire' },
      { IdType: 5, Type: 'Bâtiment' },
      { IdType: 6, Type: 'Quête' },
      { IdType: 7, Type: 'Monture' },
      { IdType: 8, Type: 'Familier' },
      { IdType: 9, Type: 'Ressource' },
      { IdType: 10, Type: 'Magie' }
    ]);

    const tradeableItems = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        tradeableItems.push({ IdTradeableItem: (i - 1) * 10 + j, IdType: i, IdItem: j });
      }
    }
    await TradeableItem.bulkCreate(tradeableItems);

    const personages = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        personages.push({
          IdPersonage: (i - 1) * 10 + j,
          Name: `Personnage ${(i - 1) * 10 + j}`,
          MaxHealthPoints: 100 + (i * 10),
          HealthPoints: 100 + (i * 10),
          Attack: 20 + (i * 2),
          Defense: 10 + (i * 2),
          IdLevel: j,
          IdClass: i
        });
      }
    }
    await Personage.bulkCreate(personages);

    const combats = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        combats.push({
          IdCombat: (i - 1) * 10 + j,
          StartTime: new Date(`2023-01-${String(i).padStart(2, '0')} ${String(j).padStart(2, '0')}:00:00`),
          EndTime: new Date(`2023-01-${String(i).padStart(2, '0')} ${String(j).padStart(2, '0')}:30:00`),
          Status: 'Terminé',
          IdPlace: i
        });
      }
    }
    await Combat.bulkCreate(combats);

    const combatTeams = [];
    for (let i = 1; i <= 100; i++) {
      combatTeams.push({ IdCombatTeam: i, Type: `Équipe ${i}`, IdCombat: i });
    }
    await CombatTeam.bulkCreate(combatTeams);

    const combatParticipants = [];
    for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <= 10; j++) {
        combatParticipants.push({ IdCombatParticipant: (i - 1) * 10 + j, IdPersonage: j, IdCombatTeam: i });
      }
    }
    await CombatParticipant.bulkCreate(combatParticipants);

    const companions = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        companions.push({ IdCompanion: (i - 1) * 10 + j, Experience: 100 * j, IdPersonage: (i - 1) * 10 + j });
      }
    }
    await Companion.bulkCreate(companions);

    const equipmentSlots = [];
    for (let i = 1; i <= 10; i++) {
      equipmentSlots.push({ IdEquipmentSlot: i, Name: `Slot ${i}` });
    }
    await EquipmentSlot.bulkCreate(equipmentSlots);

    const equipedItems = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        equipedItems.push({ IdEquipedItem: (i - 1) * 10 + j, IdItem: j, IdEquipmentSlot: i, IdPersonage: i });
      }
    }
    await EquipedItem.bulkCreate(equipedItems);

    const combatTurns = [];
    for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <= 10; j++) {
        combatTurns.push({ IdCombatTurn: (i - 1) * 10 + j, TurnNumber: j, IdCombat: i });
      }
    }
    await CombatTurn.bulkCreate(combatTurns);

    const combatActions = [];
    for (let i = 1; i <= 1000; i++) {
      combatActions.push({
        IdCombatAction: i,
        Damage: 10 * (i % 10),
        Regen: 5 * (i % 5),
        Shield: 2 * (i % 2),
        IdSourceCombatParticipant: i,
        IdTargetCombatParticipant: i % 100 || 100,
        IdCombatTurn: Math.ceil(i / 10)
      });
    }
    await CombatAction.bulkCreate(combatActions);

    const adventurers = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        adventurers.push({
          IdAdventurer: (i - 1) * 10 + j,
          IdDiscord: j === 5 && i === 4 ? '540924250312409091' : `Discord${(i - 1) * 10 + j}`,
          Gold: 100 * j,
          Experience: 50 * j,
          IdPlace: i,
          IdPersonage: (i - 1) * 10 + j
        });
      }
    }
    await Adventurer.bulkCreate(adventurers);

    const abilities = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        abilities.push({
          IdAbility: (i - 1) * 10 + j,
          Name: `Ability ${(i - 1) * 10 + j}`,
          Description: `Description ${(i - 1) * 10 + j}`,
          Damage: 10 * j,
          Regen: 5 * j,
          Shield: 2 * j,
          Experience: 50 * j,
          LevelRequired: j,
          IdLevel: j,
          IdClass: i
        });
      }
    }
    await Ability.bulkCreate(abilities);

    const enemies = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        enemies.push({
          IdEnemy: (i - 1) * 10 + j,
          ExperienceValue: 50 * j,
          GoldValue: 20 * j,
          IdPersonage: (i - 1) * 10 + j
        });
      }
    }
    await Enemy.bulkCreate(enemies);

    const buildings = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        buildings.push({ IdBuilding: (i - 1) * 10 + j, Name: `Building ${(i - 1) * 10 + j}`, Description: `Description ${(i - 1) * 10 + j}`, IdType: i });
      }
    }
    await Building.bulkCreate(buildings);

    const inventories = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        inventories.push({ IdInventory: (i - 1) * 10 + j, Quantity: j, IdAdventurer: (i - 1) * 10 + j, IdItem: j });
      }
    }
    await Inventory.bulkCreate(inventories);

    const buildingPlaces = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        buildingPlaces.push({ IdPlace: i, IdBuilding: (i - 1) * 10 + j });
      }
    }
    await BuildingPlace.bulkCreate(buildingPlaces);

    const adventurerCompanions = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        adventurerCompanions.push({ IdAdventurer: (i - 1) * 10 + j, IdCompanion: (i - 1) * 10 + j });
      }
    }
    await AdventurerCompanion.bulkCreate(adventurerCompanions);

    console.log('Fixtures insérées avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des fixtures:', error);
  } finally {
    sequelize.close();
  }
}

seedDatabase();
