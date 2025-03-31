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

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Synchroniser et réinitialiser la base de données

    // Insérer les données de fixtures
    await Class.bulkCreate([
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

    await City.bulkCreate([
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

    await Region.bulkCreate([
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

    await Place.bulkCreate([
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

    await Item.bulkCreate([
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

    await Level.bulkCreate([
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

    await Type.bulkCreate([
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

    await TradeableItem.bulkCreate([
      { IdTradeableItem: 1, IdType: 1, IdItem: 1 },
      { IdTradeableItem: 2, IdType: 2, IdItem: 2 },
      { IdTradeableItem: 3, IdType: 1, IdItem: 3 },
      { IdTradeableItem: 4, IdType: 3, IdItem: 4 },
      { IdTradeableItem: 5, IdType: 1, IdItem: 5 },
      { IdTradeableItem: 6, IdType: 2, IdItem: 6 },
      { IdTradeableItem: 7, IdType: 1, IdItem: 7 },
      { IdTradeableItem: 8, IdType: 4, IdItem: 8 },
      { IdTradeableItem: 9, IdType: 2, IdItem: 9 },
      { IdTradeableItem: 10, IdType: 4, IdItem: 10 }
    ]);

    await Personage.bulkCreate([
      { IdPersonage: 1, Name: 'Aventurier 1', MaxHealthPoints: 100, HealthPoints: 100, Attack: 20, Defense: 10, IdLevel: 1, IdClass: 1 },
      { IdPersonage: 2, Name: 'Aventurier 2', MaxHealthPoints: 110, HealthPoints: 110, Attack: 22, Defense: 12, IdLevel: 1, IdClass: 2 },
      { IdPersonage: 3, Name: 'Aventurier 3', MaxHealthPoints: 120, HealthPoints: 120, Attack: 24, Defense: 14, IdLevel: 1, IdClass: 3 },
      { IdPersonage: 4, Name: 'Aventurier 4', MaxHealthPoints: 130, HealthPoints: 130, Attack: 26, Defense: 16, IdLevel: 2, IdClass: 1 },
      { IdPersonage: 5, Name: 'Aventurier 5', MaxHealthPoints: 140, HealthPoints: 140, Attack: 28, Defense: 18, IdLevel: 2, IdClass: 2 },
      { IdPersonage: 6, Name: 'Aventurier 6', MaxHealthPoints: 150, HealthPoints: 150, Attack: 30, Defense: 20, IdLevel: 2, IdClass: 3 },
      { IdPersonage: 7, Name: 'Aventurier 7', MaxHealthPoints: 160, HealthPoints: 160, Attack: 32, Defense: 22, IdLevel: 3, IdClass: 1 },
      { IdPersonage: 8, Name: 'Aventurier 8', MaxHealthPoints: 170, HealthPoints: 170, Attack: 34, Defense: 24, IdLevel: 3, IdClass: 2 },
      { IdPersonage: 9, Name: 'Aventurier 9', MaxHealthPoints: 180, HealthPoints: 180, Attack: 36, Defense: 26, IdLevel: 3, IdClass: 3 },
      { IdPersonage: 10, Name: 'Aventurier 10', MaxHealthPoints: 190, HealthPoints: 190, Attack: 38, Defense: 28, IdLevel: 1, IdClass: 1 },
      { IdPersonage: 11, Name: 'Ennemi 1', MaxHealthPoints: 200, HealthPoints: 200, Attack: 40, Defense: 30, IdLevel: 1, IdClass: 1 },
      { IdPersonage: 12, Name: 'Ennemi 2', MaxHealthPoints: 210, HealthPoints: 210, Attack: 42, Defense: 32, IdLevel: 1, IdClass: 2 },
      { IdPersonage: 13, Name: 'Ennemi 3', MaxHealthPoints: 220, HealthPoints: 220, Attack: 44, Defense: 34, IdLevel: 1, IdClass: 3 },
      { IdPersonage: 14, Name: 'Ennemi 4', MaxHealthPoints: 230, HealthPoints: 230, Attack: 46, Defense: 36, IdLevel: 2, IdClass: 1 },
      { IdPersonage: 15, Name: 'Ennemi 5', MaxHealthPoints: 240, HealthPoints: 240, Attack: 48, Defense: 38, IdLevel: 2, IdClass: 2 },
      { IdPersonage: 16, Name: 'Ennemi 6', MaxHealthPoints: 250, HealthPoints: 250, Attack: 50, Defense: 40, IdLevel: 2, IdClass: 3 },
      { IdPersonage: 17, Name: 'Ennemi 7', MaxHealthPoints: 260, HealthPoints: 260, Attack: 52, Defense: 42, IdLevel: 3, IdClass: 1 },
      { IdPersonage: 18, Name: 'Ennemi 8', MaxHealthPoints: 270, HealthPoints: 270, Attack: 54, Defense: 44, IdLevel: 3, IdClass: 2 },
      { IdPersonage: 19, Name: 'Ennemi 9', MaxHealthPoints: 280, HealthPoints: 280, Attack: 56, Defense: 46, IdLevel: 3, IdClass: 3 },
      { IdPersonage: 20, Name: 'Ennemi 10', MaxHealthPoints: 290, HealthPoints: 290, Attack: 58, Defense: 48, IdLevel: 3, IdClass: 1 },
      { IdPersonage: 21, Name: 'Compagnon 1', MaxHealthPoints: 300, HealthPoints: 300, Attack: 60, Defense: 50, IdLevel: 1, IdClass: 1 },
      { IdPersonage: 22, Name: 'Compagnon 2', MaxHealthPoints: 310, HealthPoints: 310, Attack: 62, Defense: 52, IdLevel: 1, IdClass: 2 },
      { IdPersonage: 23, Name: 'Compagnon 3', MaxHealthPoints: 320, HealthPoints: 320, Attack: 64, Defense: 54, IdLevel: 1, IdClass: 3 },
      { IdPersonage: 24, Name: 'Compagnon 4', MaxHealthPoints: 330, HealthPoints: 330, Attack: 66, Defense: 56, IdLevel: 2, IdClass: 1 },
      { IdPersonage: 25, Name: 'Compagnon 5', MaxHealthPoints: 340, HealthPoints: 340, Attack: 68, Defense: 58, IdLevel: 2, IdClass: 2 },
      { IdPersonage: 26, Name: 'Compagnon 6', MaxHealthPoints: 350, HealthPoints: 350, Attack: 70, Defense: 60, IdLevel: 2, IdClass: 3 },
      { IdPersonage: 27, Name: 'Compagnon 7', MaxHealthPoints: 360, HealthPoints: 360, Attack: 72, Defense: 62, IdLevel: 3, IdClass: 1 },
      { IdPersonage: 28, Name: 'Compagnon 8', MaxHealthPoints: 370, HealthPoints: 370, Attack: 74, Defense: 64, IdLevel: 3, IdClass: 2 },
      { IdPersonage: 29, Name: 'Compagnon 9', MaxHealthPoints: 380, HealthPoints: 380, Attack: 76, Defense: 66, IdLevel: 3, IdClass: 3 },
      { IdPersonage: 30, Name: 'Compagnon 10', MaxHealthPoints: 390, HealthPoints: 390, Attack: 78, Defense: 68, IdLevel: 3, IdClass: 1 }
    ]);

    await Combat.bulkCreate([
      { IdCombat: 1, StartTime: new Date('2023-01-01 10:00:00'), EndTime: new Date('2023-01-01 10:30:00'), Status: 'Terminé', IdPlace: 1 },
      { IdCombat: 2, StartTime: new Date('2023-01-02 11:00:00'), EndTime: new Date('2023-01-02 11:45:00'), Status: 'Terminé', IdPlace: 2 },
      { IdCombat: 3, StartTime: new Date('2023-01-03 12:00:00'), EndTime: new Date('2023-01-03 12:15:00'), Status: 'Terminé', IdPlace: 3 },
      { IdCombat: 4, StartTime: new Date('2023-01-04 13:00:00'), EndTime: new Date('2023-01-04 13:30:00'), Status: 'Terminé', IdPlace: 4 },
      { IdCombat: 5, StartTime: new Date('2023-01-05 14:00:00'), EndTime: new Date('2023-01-05 14:45:00'), Status: 'Terminé', IdPlace: 5 },
      { IdCombat: 6, StartTime: new Date('2023-01-06 15:00:00'), EndTime: new Date('2023-01-06 15:30:00'), Status: 'Terminé', IdPlace: 6 },
      { IdCombat: 7, StartTime: new Date('2023-01-07 16:00:00'), EndTime: new Date('2023-01-07 16:45:00'), Status: 'Terminé', IdPlace: 7 },
      { IdCombat: 8, StartTime: new Date('2023-01-08 17:00:00'), EndTime: new Date('2023-01-08 17:30:00'), Status: 'Terminé', IdPlace: 8 },
      { IdCombat: 9, StartTime: new Date('2023-01-09 18:00:00'), EndTime: new Date('2023-01-09 18:45:00'), Status: 'Terminé', IdPlace: 9 },
      { IdCombat: 10, StartTime: new Date('2023-01-10 19:00:00'), EndTime: new Date('2023-01-10 19:30:00'), Status: 'Terminé', IdPlace: 10 }
    ]);

    await CombatTeam.bulkCreate([
      { IdCombatTeam: 1, Type: 'Équipe 1', IdCombat: 1 },
      { IdCombatTeam: 2, Type: 'Équipe 2', IdCombat: 1 },
      { IdCombatTeam: 3, Type: 'Équipe 1', IdCombat: 2 },
      { IdCombatTeam: 4, Type: 'Équipe 2', IdCombat: 2 },
      { IdCombatTeam: 5, Type: 'Équipe 1', IdCombat: 3 },
      { IdCombatTeam: 6, Type: 'Équipe 2', IdCombat: 3 },
      { IdCombatTeam: 7, Type: 'Équipe 1', IdCombat: 4 },
      { IdCombatTeam: 8, Type: 'Équipe 2', IdCombat: 4 },
      { IdCombatTeam: 9, Type: 'Équipe 1', IdCombat: 5 },
      { IdCombatTeam: 10, Type: 'Équipe 2', IdCombat: 5 }
    ]);

    await CombatParticipant.bulkCreate([
      { IdCombatParticipant: 1, IdPersonage: 1, IdCombatTeam: 1 },
      { IdCombatParticipant: 2, IdPersonage: 2, IdCombatTeam: 1 },
      { IdCombatParticipant: 3, IdPersonage: 11, IdCombatTeam: 2 },
      { IdCombatParticipant: 4, IdPersonage: 12, IdCombatTeam: 2 },
      { IdCombatParticipant: 5, IdPersonage: 3, IdCombatTeam: 3 },
      { IdCombatParticipant: 6, IdPersonage: 4, IdCombatTeam: 3 },
      { IdCombatParticipant: 7, IdPersonage: 13, IdCombatTeam: 4 },
      { IdCombatParticipant: 8, IdPersonage: 14, IdCombatTeam: 4 },
      { IdCombatParticipant: 9, IdPersonage: 5, IdCombatTeam: 5 },
      { IdCombatParticipant: 10, IdPersonage: 6, IdCombatTeam: 5 },
      { IdCombatParticipant: 11, IdPersonage: 15, IdCombatTeam: 6 },
      { IdCombatParticipant: 12, IdPersonage: 16, IdCombatTeam: 6 },
      { IdCombatParticipant: 13, IdPersonage: 7, IdCombatTeam: 7 },
      { IdCombatParticipant: 14, IdPersonage: 8, IdCombatTeam: 7 },
      { IdCombatParticipant: 15, IdPersonage: 17, IdCombatTeam: 8 },
      { IdCombatParticipant: 16, IdPersonage: 18, IdCombatTeam: 8 },
      { IdCombatParticipant: 17, IdPersonage: 9, IdCombatTeam: 9 },
      { IdCombatParticipant: 18, IdPersonage: 10, IdCombatTeam: 9 },
      { IdCombatParticipant: 19, IdPersonage: 19, IdCombatTeam: 10 },
      { IdCombatParticipant: 20, IdPersonage: 20, IdCombatTeam: 10 }
    ]);

    await Companion.bulkCreate([
      { IdCompanion: 1, Experience: 100, IdPersonage: 21 },
      { IdCompanion: 2, Experience: 110, IdPersonage: 22 },
      { IdCompanion: 3, Experience: 120, IdPersonage: 23 },
      { IdCompanion: 4, Experience: 130, IdPersonage: 24 },
      { IdCompanion: 5, Experience: 140, IdPersonage: 25 },
      { IdCompanion: 6, Experience: 150, IdPersonage: 26 },
      { IdCompanion: 7, Experience: 160, IdPersonage: 27 },
      { IdCompanion: 8, Experience: 170, IdPersonage: 28 },
      { IdCompanion: 9, Experience: 180, IdPersonage: 29 },
      { IdCompanion: 10, Experience: 190, IdPersonage: 30 }
    ]);

    await EquipmentSlot.bulkCreate([
      { IdEquipmentSlot: 1, Name: 'Main' },
      { IdEquipmentSlot: 2, Name: 'Tête' },
      { IdEquipmentSlot: 3, Name: 'Corps' },
      { IdEquipmentSlot: 4, Name: 'Accessoire' },
      { IdEquipmentSlot: 5, Name: 'Pieds' },
      { IdEquipmentSlot: 6, Name: 'Ceinture' },
      { IdEquipmentSlot: 7, Name: 'Dos' },
      { IdEquipmentSlot: 8, Name: 'Cou' },
      { IdEquipmentSlot: 9, Name: 'Poignet' },
      { IdEquipmentSlot: 10, Name: 'Doigt' }
    ]);

    await EquipedItem.bulkCreate([
      { IdEquipedItem: 1, IdItem: 1, IdEquipmentSlot: 1, IdPersonage: 1 },
      { IdEquipedItem: 2, IdItem: 2, IdEquipmentSlot: 2, IdPersonage: 1 },
      { IdEquipedItem: 3, IdItem: 3, IdEquipmentSlot: 1, IdPersonage: 2 },
      { IdEquipedItem: 4, IdItem: 4, IdEquipmentSlot: 4, IdPersonage: 2 },
      { IdEquipedItem: 5, IdItem: 5, IdEquipmentSlot: 1, IdPersonage: 3 },
      { IdEquipedItem: 6, IdItem: 6, IdEquipmentSlot: 3, IdPersonage: 3 },
      { IdEquipedItem: 7, IdItem: 7, IdEquipmentSlot: 1, IdPersonage: 4 },
      { IdEquipedItem: 8, IdItem: 8, IdEquipmentSlot: 4, IdPersonage: 4 },
      { IdEquipedItem: 9, IdItem: 9, IdEquipmentSlot: 2, IdPersonage: 5 },
      { IdEquipedItem: 10, IdItem: 10, IdEquipmentSlot: 4, IdPersonage: 5 }
    ]);

    await Adventurer.bulkCreate([
      { IdAdventurer: 1, IdDiscord: 'Discord1', Gold: 100, Experience: 50, IdPlace: 1, IdPersonage: 1 },
      { IdAdventurer: 2, IdDiscord: 'Discord2', Gold: 110, Experience: 60, IdPlace: 2, IdPersonage: 2 },
      { IdAdventurer: 3, IdDiscord: 'Discord3', Gold: 120, Experience: 70, IdPlace: 3, IdPersonage: 3 },
      { IdAdventurer: 4, IdDiscord: 'Discord4', Gold: 130, Experience: 80, IdPlace: 4, IdPersonage: 4 },
      { IdAdventurer: 5, IdDiscord: 'Discord5', Gold: 140, Experience: 90, IdPlace: 5, IdPersonage: 5 },
      { IdAdventurer: 6, IdDiscord: 'Discord6', Gold: 150, Experience: 100, IdPlace: 6, IdPersonage: 6 },
      { IdAdventurer: 7, IdDiscord: 'Discord7', Gold: 160, Experience: 110, IdPlace: 7, IdPersonage: 7 },
      { IdAdventurer: 8, IdDiscord: 'Discord8', Gold: 170, Experience: 120, IdPlace: 8, IdPersonage: 8 },
      { IdAdventurer: 9, IdDiscord: 'Discord9', Gold: 180, Experience: 130, IdPlace: 9, IdPersonage: 9 },
      { IdAdventurer: 10, IdDiscord: '540924250312409091', Gold: 190, Experience: 140, IdPlace: 10, IdPersonage: 10 }
    ]);

    await Ability.bulkCreate([
      { IdAbility: 1, Name: 'Coup puissant', Description: 'Augmente les dégâts', Damage: 10, Regen: 0, Shield: 0, Experience: 50, LevelRequired: 1, IdLevel: 1, IdClass: 1 },
      { IdAbility: 2, Name: 'Bouclier magique', Description: 'Crée un bouclier', Damage: 0, Regen: 0, Shield: 10, Experience: 60, LevelRequired: 1, IdLevel: 1, IdClass: 2 },
      { IdAbility: 3, Name: 'Flèche enflammée', Description: 'Tire une flèche enflammée', Damage: 15, Regen: 0, Shield: 0, Experience: 70, LevelRequired: 1, IdLevel: 1, IdClass: 3 },
      { IdAbility: 4, Name: 'Soins', Description: 'Restaure des points de vie', Damage: 0, Regen: 20, Shield: 0, Experience: 80, LevelRequired: 2, IdLevel: 2, IdClass: 1 },
      { IdAbility: 5, Name: 'Boule de feu', Description: 'Lance une boule de feu', Damage: 20, Regen: 0, Shield: 0, Experience: 90, LevelRequired: 2, IdLevel: 2, IdClass: 2 },
      { IdAbility: 6, Name: 'Invisibilité', Description: 'Devient invisible', Damage: 0, Regen: 0, Shield: 0, Experience: 100, LevelRequired: 2, IdLevel: 2, IdClass: 3 },
      { IdAbility: 7, Name: 'Coup critique', Description: 'Augmente les chances de coup critique', Damage: 25, Regen: 0, Shield: 0, Experience: 110, LevelRequired: 3, IdLevel: 3, IdClass: 1 },
      { IdAbility: 8, Name: 'Régénération', Description: 'Régénère des points de vie', Damage: 0, Regen: 30, Shield: 0, Experience: 120, LevelRequired: 3, IdLevel: 3, IdClass: 2 },
      { IdAbility: 9, Name: 'Protection divine', Description: 'Augmente la défense', Damage: 0, Regen: 0, Shield: 20, Experience: 130, LevelRequired: 3, IdLevel: 3, IdClass: 3 },
      { IdAbility: 10, Name: 'Foudre', Description: 'Invoque la foudre', Damage: 30, Regen: 0, Shield: 0, Experience: 140, LevelRequired: 3, IdLevel: 3, IdClass: 1 }
    ]);

    await Enemy.bulkCreate([
      { IdEnemy: 1, ExperienceValue: 50, GoldValue: 20, IdPersonage: 11 },
      { IdEnemy: 2, ExperienceValue: 55, GoldValue: 22, IdPersonage: 12 },
      { IdEnemy: 3, ExperienceValue: 60, GoldValue: 24, IdPersonage: 13 },
      { IdEnemy: 4, ExperienceValue: 65, GoldValue: 26, IdPersonage: 14 },
      { IdEnemy: 5, ExperienceValue: 70, GoldValue: 28, IdPersonage: 15 },
      { IdEnemy: 6, ExperienceValue: 75, GoldValue: 30, IdPersonage: 16 },
      { IdEnemy: 7, ExperienceValue: 80, GoldValue: 32, IdPersonage: 17 },
      { IdEnemy: 8, ExperienceValue: 85, GoldValue: 34, IdPersonage: 18 },
      { IdEnemy: 9, ExperienceValue: 90, GoldValue: 36, IdPersonage: 19 },
      { IdEnemy: 10, ExperienceValue: 95, GoldValue: 38, IdPersonage: 20 }
    ]);

    await Building.bulkCreate([
      { IdBuilding: 1, Name: 'Forge', Description: 'Pour forger des armes', IdType: 5 },
      { IdBuilding: 2, Name: 'Taverne', Description: 'Pour se reposer', IdType: 5 },
      { IdBuilding: 3, Name: 'Temple', Description: 'Pour prier', IdType: 5 },
      { IdBuilding: 4, Name: 'Bibliothèque', Description: 'Pour étudier', IdType: 5 },
      { IdBuilding: 5, Name: 'Magasin', Description: 'Pour acheter des objets', IdType: 5 },
      { IdBuilding: 6, Name: 'Marché', Description: 'Pour vendre des objets', IdType: 5 },
      { IdBuilding: 7, Name: 'Château', Description: 'Pour rencontrer le roi', IdType: 5 },
      { IdBuilding: 8, Name: 'Prison', Description: 'Pour enfermer les ennemis', IdType: 5 },
      { IdBuilding: 9, Name: 'Tour de guet', Description: 'Pour surveiller', IdType: 5 },
      { IdBuilding: 10, Name: 'Écurie', Description: 'Pour les montures', IdType: 5 }
    ]);

    await Inventory.bulkCreate([
      { IdInventory: 1, Quantity: 1, IdAdventurer: 1, IdItem: 1 },
      { IdInventory: 2, Quantity: 2, IdAdventurer: 2, IdItem: 2 },
      { IdInventory: 3, Quantity: 3, IdAdventurer: 3, IdItem: 3 },
      { IdInventory: 4, Quantity: 4, IdAdventurer: 4, IdItem: 4 },
      { IdInventory: 5, Quantity: 5, IdAdventurer: 5, IdItem: 5 },
      { IdInventory: 6, Quantity: 6, IdAdventurer: 6, IdItem: 6 },
      { IdInventory: 7, Quantity: 7, IdAdventurer: 7, IdItem: 7 },
      { IdInventory: 8, Quantity: 8, IdAdventurer: 8, IdItem: 8 },
      { IdInventory: 9, Quantity: 9, IdAdventurer: 9, IdItem: 9 },
      { IdInventory: 10, Quantity: 10, IdAdventurer: 10, IdItem: 10 }
    ]);

    await BuildingPlace.bulkCreate([
      { IdPlace: 1, IdBuilding: 1 },
      { IdPlace: 2, IdBuilding: 2 },
      { IdPlace: 3, IdBuilding: 3 },
      { IdPlace: 4, IdBuilding: 4 },
      { IdPlace: 5, IdBuilding: 5 },
      { IdPlace: 6, IdBuilding: 6 },
      { IdPlace: 7, IdBuilding: 7 },
      { IdPlace: 8, IdBuilding: 8 },
      { IdPlace: 9, IdBuilding: 9 },
      { IdPlace: 10, IdBuilding: 10 }
    ]);

    await AdventurerCompanion.bulkCreate([
      { IdAdventurer: 1, IdCompanion: 1 },
      { IdAdventurer: 2, IdCompanion: 2 },
      { IdAdventurer: 3, IdCompanion: 3 },
      { IdAdventurer: 4, IdCompanion: 4 },
      { IdAdventurer: 5, IdCompanion: 5 },
      { IdAdventurer: 6, IdCompanion: 6 },
      { IdAdventurer: 7, IdCompanion: 7 },
      { IdAdventurer: 8, IdCompanion: 8 },
      { IdAdventurer: 9, IdCompanion: 9 },
      { IdAdventurer: 10, IdCompanion: 10 }
    ]);

    console.log('Fixtures insérées avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des fixtures:', error);
  } finally {
    sequelize.close();
  }
}

seedDatabase();
