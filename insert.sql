-- Insertion des données dans la table Class
INSERT INTO Class (IdClass, Name, Description, HealthPointsRatio, AttackRatio, DefenseRatio) VALUES
(1, 'Guerrier', 'Combattant au corps à corps puissant', 1.5, 1.2, 1.0),
(2, 'Mage', 'Lanceur de sorts puissant', 1.0, 1.5, 0.8),
(3, 'Voleur', 'Assassin furtif', 1.1, 1.3, 0.9),
(4, 'Soigneur', 'Guérisseur de soutien', 1.3, 0.8, 1.2),
(5, 'Rôdeur', 'Archer habile', 1.2, 1.4, 1.1),
(6, 'Paladin', 'Guerrier sacré', 1.4, 1.1, 1.3),
(7, 'Nécromancien', 'Utilisateur de magie noire', 0.9, 1.6, 0.7),
(8, 'Barde', 'Soutien musical', 1.2, 1.0, 1.1),
(9, 'Moine', 'Artiste martial', 1.3, 1.2, 1.2),
(10, 'Druide', 'Gardien de la nature', 1.1, 1.3, 1.0);

-- Insertion des données dans la table City
INSERT INTO City (IdCity, Name, Description, RequiredLevel) VALUES
(1, 'Cité d\'Émeraude', 'Verte et prospère', 5),
(2, 'Cité d\'Argent', 'Brillante et riche', 10),
(3, 'Cité Sombre', 'Mystérieuse et dangereuse', 15),
(4, 'Cité Dorée', 'Radieuse et luxueuse', 20),
(5, 'Cité de Cristal', 'Transparente et magique', 25),
(6, 'Cité de Pierre', 'Solide et fortifiée', 30),
(7, 'Cité de Glace', 'Gelée et sereine', 35),
(8, 'Cité des Sables', 'Oasis du désert', 40),
(9, 'Cité de la Forêt', 'Cachée dans les bois', 45),
(10, 'Cité de la Montagne', 'Haute et majestueuse', 50);

-- Insertion des données dans la table Region
INSERT INTO Region (IdRegion, Name, Description, RequiredLevel) VALUES
(1, 'Plaines Vertes', 'Vaste et fertile', 1),
(2, 'Pics Enneigés', 'Froid et traître', 10),
(3, 'Sables du Désert', 'Chaud et sec', 15),
(4, 'Forêt Mystique', 'Enchantée et sauvage', 20),
(5, 'Crête Volcanique', 'Ardente et imprévisible', 25),
(6, 'Falaises Côtières', 'Rugueuses et venteuses', 30),
(7, 'Marécages', 'Boueux et mystérieux', 35),
(8, 'Canyons', 'Profonds et résonnants', 40),
(9, 'Toundra', 'Aride et glacée', 45),
(10, 'Jungle Profonde', 'Dense et humide', 50);

-- Insertion des données dans la table Place
INSERT INTO Place (IdPlace, Name, Description, Location, IdRegion, IdCity) VALUES
(1, 'Prairie Verte', 'Paisible et sereine', 10.001, 1, 1),
(2, 'Lac Gelé', 'Glacé et immobile', 20.002, 2, 2),
(3, 'Dune de Sable', 'Venteuse et vaste', 30.003, 3, NULL),
(4, 'Ruines Anciennes', 'Mystérieuses et vieilles', 40.004, 4, 4),
(5, 'Fosse de Lave', 'Dangereuse et chaude', 50.005, 5, 5),
(6, 'Sentier de Falaise', 'Étroit et périlleux', 60.006, 6, 6),
(7, 'Hutte du Marais', 'Cachée et humide', 70.007, 7, 7),
(8, 'Pont du Canyon', 'Long et grinçant', 80.008, 8, 8),
(9, 'Caverne de Glace', 'Froide et résonnante', 90.009, 9, 9),
(10, 'Temple de la Jungle', 'Ancien et envahi', 100.010, 10, 10);

-- Insertion des données dans la table Item
INSERT INTO Item (IdItem, Name, Description, BuyPrice, SellPrice, Damage, Regen, Shield, Rarity, RequiredLevel) VALUES
(1, 'Épée', 'Tranchante et mortelle', 100, 50, 20, 0, 5, 'Commun', 1),
(2, 'Bâton', 'Magique et puissant', 150, 75, 15, 10, 3, 'Rare', 5),
(3, 'Arc', 'Précis et rapide', 120, 60, 18, 0, 4, 'Peu commun', 3),
(4, 'Potion', 'Soignante et rafraîchissante', 50, 25, 0, 25, 0, 'Commun', 1),
(5, 'Bouclier', 'Protecteur et robuste', 200, 100, 5, 0, 20, 'Rare', 10),
(6, 'Hache', 'Lourde et puissante', 130, 65, 25, 0, 6, 'Épique', 15),
(7, 'Baguette', 'Arcanique et mystique', 180, 90, 10, 15, 2, 'Légendaire', 20),
(8, 'Dague', 'Rapide et mortelle', 110, 55, 16, 0, 3, 'Peu commun', 8),
(9, 'Casque', 'Protection pour la tête', 170, 85, 0, 0, 15, 'Rare', 12),
(10, 'Anneau', 'Magique et enchanté', 250, 125, 0, 5, 0, 'Épique', 25);

-- Insertion des données dans la table Level
INSERT INTO Level (IdLevel, Level, ExperienceRequired, HealthPointsBonus, AttackBonus, DefenseBonus, Type) VALUES
(1, 1, 0, 100, 10, 5, 'Personnage'),
(2, 2, 100, 150, 15, 10, 'Personnage'),
(3, 3, 300, 200, 20, 15, 'Personnage'),
(4, 4, 600, 250, 25, 20, 'Personnage'),
(5, 5, 1000, 300, 30, 25, 'Personnage'),
(6, 6, 1500, 350, 35, 30, 'Personnage'),
(7, 7, 2100, 400, 40, 35, 'Personnage'),
(8, 8, 2800, 450, 45, 40, 'Personnage'),
(9, 9, 3600, 500, 50, 45, 'Personnage'),
(10, 10, 4500, 550, 55, 50, 'Personnage'),
(11, 1, 0, 0, 5, 3, 'Capacité'),
(12, 2, 100, 0, 10, 6, 'Capacité'),
(13, 3, 300, 0, 15, 9, 'Capacité'),
(14, 4, 600, 0, 20, 12, 'Capacité'),
(15, 5, 1000, 0, 25, 15, 'Capacité'),
(16, 6, 1500, 0, 30, 18, 'Capacité'),
(17, 7, 2100, 0, 35, 21, 'Capacité'),
(18, 8, 2800, 0, 40, 24, 'Capacité'),
(19, 9, 3600, 0, 45, 27, 'Capacité'),
(20, 10, 4500, 0, 50, 30, 'Capacité');

-- Insertion des données dans la table Type
INSERT INTO Type (IdType, Type) VALUES
(1, 'Arme'),
(2, 'Armure'),
(3, 'Consommable'),
(4, 'Outil'),
(5, 'Objet de quête'),
(6, 'Accessoire'),
(7, 'Monture'),
(8, 'Animal de compagnie'),
(9, 'Ressource'),
(10, 'Monnaie');

-- Insertion des données dans la table TradeableItem
INSERT INTO TradeableItem (IdTradeableItem, IdType, IdItem) VALUES
('ARME_EPEE', 1, 1),
('ARME_BATON', 1, 2),
('ARME_ARC', 1, 3),
('CONSOMMABLE_POTION', 3, 4),
('ARMURE_BOUCLIER', 2, 5),
('ARME_HACHE', 1, 6),
('ARME_BAGUETTE', 1, 7),
('ARME_DAGUE', 1, 8),
('ARMURE_CASQUE', 2, 9),
('ACCESSOIRE_ANNEAU', 6, 10);

-- Insertion des données dans la table Personage
INSERT INTO Personage (IdPersonage, Name, MaxHealthPoints, HealthPoints, Attack, Defense, IdLevel, IdClass) VALUES
(1, 'Arthur', 100, 100, 20, 10, 1, 1),
(2, 'Merlin', 80, 80, 30, 5, 2, 2),
(3, 'Lancelot', 90, 90, 25, 15, 3, 3),
(4, 'Guinevere', 110, 110, 15, 20, 4, 4),
(5, 'Gauvain', 95, 95, 22, 18, 5, 5),
(6, 'Perceval', 105, 105, 24, 16, 6, 6),
(7, 'Morgane', 85, 85, 32, 8, 7, 7),
(8, 'Tristan', 92, 92, 26, 14, 8, 8),
(9, 'Iseult', 115, 115, 16, 22, 9, 9),
(10, 'Galaad', 100, 100, 28, 19, 10, 10),
(11, 'CompagnonA', 85, 85, 15, 10, 1, 1),
(12, 'CompagnonB', 90, 90, 18, 12, 2, 2),
(13, 'CompagnonC', 95, 95, 20, 14, 3, 3),
(14, 'CompagnonD', 100, 100, 22, 16, 4, 4),
(15, 'CompagnonE', 105, 105, 24, 18, 5, 5),
(16, 'CompagnonF', 110, 110, 26, 20, 6, 6),
(17, 'CompagnonG', 115, 115, 28, 22, 7, 7),
(18, 'CompagnonH', 120, 120, 30, 24, 8, 8),
(19, 'CompagnonI', 125, 125, 32, 26, 9, 9),
(20, 'CompagnonJ', 130, 130, 34, 28, 10, 10),
(21, 'EnnemiA', 110, 110, 25, 15, 1, 1),
(22, 'EnnemiB', 120, 120, 30, 20, 2, 2),
(23, 'EnnemiC', 130, 130, 35, 25, 3, 3),
(24, 'EnnemiD', 140, 140, 40, 30, 4, 4),
(25, 'EnnemiE', 150, 150, 45, 35, 5, 5),
(26, 'EnnemiF', 160, 160, 50, 40, 6, 6),
(27, 'EnnemiG', 170, 170, 55, 45, 7, 7),
(28, 'EnnemiH', 180, 180, 60, 50, 8, 8),
(29, 'EnnemiI', 190, 190, 65, 55, 9, 9),
(30, 'EnnemiJ', 200, 200, 70, 60, 10, 10);

-- Insertion des données dans la table Combat
INSERT INTO Combat (IdCombat, StartTime, EndTime, Status, IdPlace) VALUES
(1, '2023-10-01 10:00:00', '2023-10-01 10:30:00', 'Terminé', 1),
(2, '2023-10-02 11:00:00', NULL, 'En cours', 2),
(3, '2023-10-03 12:00:00', '2023-10-03 12:45:00', 'Terminé', 3),
(4, '2023-10-04 13:00:00', NULL, 'En cours', 4),
(5, '2023-10-05 14:00:00', '2023-10-05 14:30:00', 'Terminé', 5),
(6, '2023-10-06 15:00:00', '2023-10-06 15:30:00', 'Terminé', 6),
(7, '2023-10-07 16:00:00', NULL, 'En cours', 7),
(8, '2023-10-08 17:00:00', '2023-10-08 17:45:00', 'Terminé', 8),
(9, '2023-10-09 18:00:00', NULL, 'En cours', 9),
(10, '2023-10-10 19:00:00', '2023-10-10 19:30:00', 'Terminé', 10);

-- Insertion des données dans la table CombatTeam
INSERT INTO CombatTeam (IdCombatTeam, Type, IdCombat) VALUES
(1, 'Aventurier', 1),
(2, 'Ennemi', 1),
(3, 'Aventurier', 2),
(4, 'Ennemi', 2),
(5, 'Aventurier', 3),
(6, 'Ennemi', 4),
(7, 'Aventurier', 5),
(8, 'Ennemi', 5),
(9, 'Aventurier', 6),
(10, 'Ennemi', 6);

-- Insertion des données dans la table CombatParticipant
INSERT INTO CombatParticipant (IdCombatParticipant, IdPersonage, IdCombatTeam) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 21, 2),
(4, 22, 2),
(5, 3, 3),
(6, 23, 4),
(7, 4, 5),
(8, 24, 6),
(9, 5, 7),
(10, 25, 8);

-- Insertion des données dans la table Companion
INSERT INTO Companion (IdCompanion, Experience, IdPersonage) VALUES
(1, 50, 11),
(2, 75, 12),
(3, 100, 13),
(4, 125, 14),
(5, 150, 15),
(6, 175, 16),
(7, 200, 17),
(8, 225, 18),
(9, 250, 19),
(10, 275, 20);

-- Insertion des données dans la table Adventurer
INSERT INTO Adventurer (IdAdventurer, IdDiscord, Gold, Experience, IdPlace, IdPersonage) VALUES
(1, '540924250312409091', 1000, 200, 1, 1),
(2, 'discord_2', 1500, 300, 2, 2),
(3, 'discord_3', 2000, 400, 3, 3),
(4, 'discord_4', 2500, 500, 4, 4),
(5, 'discord_5', 3000, 600, 5, 5),
(6, 'discord_6', 3500, 700, 6, 6),
(7, 'discord_7', 4000, 800, 7, 7),
(8, 'discord_8', 4500, 900, 8, 8),
(9, 'discord_9', 5000, 1000, 9, 9),
(10, 'discord_10', 5500, 1100, 10, 10);

-- Insertion des données dans la table Ability
INSERT INTO Ability (IdAbility, Name, Description, Damage, Regen, Shield, IdLevel, IdClass) VALUES
(1, 'Boule de Feu', 'Inflige des dégâts de feu', 50, 0, 0, 11, 2),
(2, 'Soins', 'Restaure des points de vie', 0, 30, 0, 12, 4),
(3, 'Furtivité', 'Augmente l\'évasion', 0, 0, 10, 13, 3),
(4, 'Taillade', 'Inflige des dégâts physiques', 40, 0, 0, 14, 1),
(5, 'Bouclier Renforcé', 'Augmente la défense', 0, 0, 20, 15, 5),
(6, 'Souffle de Glace', 'Inflige des dégâts de glace', 45, 0, 0, 16, 2),
(7, 'Bouclier de Mana', 'Absorbe les dégâts avec la mana', 0, 0, 15, 17, 4),
(8, 'Coup en Traître', 'Inflige des dégâts surprise', 55, 0, 0, 18, 3),
(9, 'Bénédiction', 'Augmente toutes les statistiques', 10, 10, 10, 19, 4),
(10, 'Invocation', 'Appelle une créature pour combattre', 30, 0, 0, 20, 2);

-- Insertion des données dans la table Enemy
INSERT INTO Enemy (IdEnemy, ExperienceValue, GoldValue, IdPersonage) VALUES
(1, 100, 50, 21),
(2, 150, 75, 22),
(3, 200, 100, 23),
(4, 250, 125, 24),
(5, 300, 150, 25),
(6, 350, 175, 26),
(7, 400, 200, 27),
(8, 450, 225, 28),
(9, 500, 250, 29),
(10, 550, 275, 30);

-- Insertion des données dans la table Building
INSERT INTO Building (IdBuilding, Name, Description, IdType) VALUES
(1, 'Taverne', 'Un endroit pour se reposer et boire', 4),
(2, 'Forge', 'Forger et réparer des armes', 4),
(3, 'Bibliothèque', 'Lieu de savoir ancien', 4),
(4, 'Temple', 'Lieu de culte et de guérison', 4),
(5, 'Marché', 'Commerce de biens et d\'objets', 4),
(6, 'Écurie', 'Abri et soin des montures', 7),
(7, 'Laboratoire d\'Alchimie', 'Création de potions et d\'élixirs', 9),
(8, 'Terrain d\'Entraînement', 'Pratique des compétences de combat', 4),
(9, 'Salle de Guilde', 'Lieu de rencontre des aventuriers', 4),
(10, 'Banque', 'Gestion et stockage de l\'or', 10);

-- Insertion des données dans la table Inventory
INSERT INTO Inventory (IdInventory, Quantity, IdAdventurer, IdItem) VALUES
(1, 2, 1, 1),
(2, 3, 2, 2),
(3, 1, 3, 3),
(4, 5, 4, 4),
(5, 4, 5, 5),
(6, 6, 6, 6),
(7, 2, 7, 7),
(8, 3, 8, 8),
(9, 1, 9, 9),
(10, 5, 10, 10);

-- Insertion des données dans la table BuildingPlace
INSERT INTO BuildingPlace (IdPlace, IdBuilding) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- Insertion des données dans la table AdventurerCompanion
INSERT INTO AdventurerCompanion (IdAdventurer, IdCompanion) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);
