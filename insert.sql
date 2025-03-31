-- Table Class
INSERT INTO Class (IdClass, Name, Description, HealthPointsRatio, AttackRatio, DefenseRatio) VALUES
(1, 'Guerrier', 'Classe de combat rapproché', 1.5, 1.2, 1.0),
(2, 'Mage', 'Classe de magie', 1.0, 1.5, 0.8),
(3, 'Archer', 'Classe de combat à distance', 1.2, 1.3, 1.1),
(4, 'Voleur', 'Classe furtive', 1.1, 1.4, 0.9),
(5, 'Prêtre', 'Classe de soutien', 1.3, 1.0, 1.2),
(6, 'Paladin', 'Classe de défense', 1.4, 1.1, 1.3),
(7, 'Barde', 'Classe de soutien magique', 1.0, 1.2, 1.1),
(8, 'Druide', 'Classe de nature', 1.2, 1.1, 1.2),
(9, 'Moine', 'Classe de combat à mains nues', 1.3, 1.3, 1.0),
(10, 'Nécromancien', 'Classe de magie noire', 1.0, 1.6, 0.7);

-- Table City
INSERT INTO City (IdCity, Name, Description, RequiredLevel) VALUES
(1, 'Ville 1', 'Capitale du royaume', 1),
(2, 'Ville 2', 'Ville portuaire', 2),
(3, 'Ville 3', 'Ville montagnarde', 3),
(4, 'Ville 4', 'Ville désertique', 4),
(5, 'Ville 5', 'Ville forestière', 5),
(6, 'Ville 6', 'Ville souterraine', 6),
(7, 'Ville 7', 'Ville côtière', 7),
(8, 'Ville 8', 'Ville marchande', 8),
(9, 'Ville 9', 'Ville fortifiée', 9),
(10, 'Ville 10', 'Ville agricole', 10);

-- Table Region
INSERT INTO Region (IdRegion, Name, Description, RequiredLevel) VALUES
(1, 'Région 1', 'Plaines verdoyantes', 1),
(2, 'Région 2', 'Montagnes enneigées', 2),
(3, 'Région 3', 'Déserts arides', 3),
(4, 'Région 4', 'Forêts denses', 4),
(5, 'Région 5', 'Marécages sombres', 5),
(6, 'Région 6', 'Côtes rocheuses', 6),
(7, 'Région 7', 'Îles tropicales', 7),
(8, 'Région 8', 'Toundra glacée', 8),
(9, 'Région 9', 'Vallées fertiles', 9),
(10, 'Région 10', 'Collines vallonnées', 10);

-- Table Place
INSERT INTO Place (IdPlace, Name, Description, Location, IdRegion, IdCity) VALUES
(1, 'Place 1', 'Centre de la ville', 1.000, 1, 1),
(2, 'Place 2', 'Port principal', 2.000, 2, 2),
(3, 'Place 3', 'Sommet de la montagne', 3.000, 3, 3),
(4, 'Place 4', 'Oasis', 4.000, 4, 4),
(5, 'Place 5', 'Clairière', 5.000, 5, 5),
(6, 'Place 6', 'Caverne', 6.000, 6, 6),
(7, 'Place 7', 'Plage', 7.000, 7, 7),
(8, 'Place 8', 'Marché', 8.000, 8, 8),
(9, 'Place 9', 'Fort', 9.000, 9, 9),
(10, 'Place 10', 'Ferme', 10.000, 10, 10);

-- Table Item
INSERT INTO Item (IdItem, Name, Description, BuyPrice, SellPrice, Damage, Regen, Shield, Rarity, RequiredLevel, SlotType) VALUES
(1, 'Épée', 'Épée en fer', 100, 50, 10, 0, 0, 'Commun', 1, 'Main'),
(2, 'Bouclier', 'Bouclier en bois', 80, 40, 0, 0, 5, 'Commun', 1, 'Main'),
(3, 'Arc', 'Arc en bois', 120, 60, 8, 0, 0, 'Commun', 1, 'Main'),
(4, 'Potion', 'Potion de vie', 50, 25, 0, 10, 0, 'Commun', 1, 'Consommable'),
(5, 'Bâton', 'Bâton magique', 150, 75, 12, 0, 0, 'Rare', 2, 'Main'),
(6, 'Armure', 'Armure en cuir', 200, 100, 0, 0, 10, 'Rare', 2, 'Corps'),
(7, 'Dague', 'Dague empoisonnée', 180, 90, 15, 0, 0, 'Épique', 3, 'Main'),
(8, 'Anneau', 'Anneau de protection', 250, 125, 0, 0, 15, 'Épique', 3, 'Accessoire'),
(9, 'Casque', 'Casque en acier', 300, 150, 0, 0, 20, 'Légendaire', 4, 'Tête'),
(10, 'Amulette', 'Amulette de régénération', 350, 175, 0, 20, 0, 'Légendaire', 4, 'Accessoire');

-- Table Level
INSERT INTO Level (IdLevel, Level, ExperienceRequired, HealthPointsBonus, AttackBonus, DefenseBonus, Type) VALUES
(1, 1, 100, 10, 5, 3, 'Débutant'),
(2, 2, 200, 20, 10, 6, 'Intermédiaire'),
(3, 3, 400, 30, 15, 9, 'Avancé'),
(4, 4, 800, 40, 20, 12, 'Expert'),
(5, 5, 1600, 50, 25, 15, 'Maître'),
(6, 6, 3200, 60, 30, 18, 'Légende'),
(7, 7, 6400, 70, 35, 21, 'Héros'),
(8, 8, 12800, 80, 40, 24, 'Demi-dieu'),
(9, 9, 25600, 90, 45, 27, 'Dieu'),
(10, 10, 51200, 100, 50, 30, 'Immortel');

-- Table Type
INSERT INTO Type (IdType, Type) VALUES
(1, 'Arme'),
(2, 'Armure'),
(3, 'Consommable'),
(4, 'Accessoire'),
(5, 'Bâtiment'),
(6, 'Quête'),
(7, 'Monture'),
(8, 'Familier'),
(9, 'Ressource'),
(10, 'Magie');

-- Table TradeableItem
INSERT INTO TradeableItem (IdTradeableItem, IdType, IdItem) VALUES
('Item1', 1, 1),
('Item2', 2, 2),
('Item3', 1, 3),
('Item4', 3, 4),
('Item5', 1, 5),
('Item6', 2, 6),
('Item7', 1, 7),
('Item8', 4, 8),
('Item9', 2, 9),
('Item10', 4, 10);

-- Table Personage
INSERT INTO Personage (IdPersonage, Name, MaxHealthPoints, HealthPoints, Attack, Defense, IdLevel, IdClass) VALUES
(1, 'Aventurier 1', 100, 100, 20, 10, 1, 1),
(2, 'Aventurier 2', 110, 110, 22, 12, 1, 2),
(3, 'Aventurier 3', 120, 120, 24, 14, 1, 3),
(4, 'Aventurier 4', 130, 130, 26, 16, 2, 1),
(5, 'Aventurier 5', 140, 140, 28, 18, 2, 2),
(6, 'Aventurier 6', 150, 150, 30, 20, 2, 3),
(7, 'Aventurier 7', 160, 160, 32, 22, 3, 1),
(8, 'Aventurier 8', 170, 170, 34, 24, 3, 2),
(9, 'Aventurier 9', 180, 180, 36, 26, 3, 3),
(10, 'Aventurier 10', 190, 190, 38, 28, 1, 1),
(11, 'Ennemi 1', 200, 200, 40, 30, 1, 1),
(12, 'Ennemi 2', 210, 210, 42, 32, 1, 2),
(13, 'Ennemi 3', 220, 220, 44, 34, 1, 3),
(14, 'Ennemi 4', 230, 230, 46, 36, 2, 1),
(15, 'Ennemi 5', 240, 240, 48, 38, 2, 2),
(16, 'Ennemi 6', 250, 250, 50, 40, 2, 3),
(17, 'Ennemi 7', 260, 260, 52, 42, 3, 1),
(18, 'Ennemi 8', 270, 270, 54, 44, 3, 2),
(19, 'Ennemi 9', 280, 280, 56, 46, 3, 3),
(20, 'Ennemi 10', 290, 290, 58, 48, 3, 1),
(21, 'Compagnon 1', 300, 300, 60, 50, 1, 1),
(22, 'Compagnon 2', 310, 310, 62, 52, 1, 2),
(23, 'Compagnon 3', 320, 320, 64, 54, 1, 3),
(24, 'Compagnon 4', 330, 330, 66, 56, 2, 1),
(25, 'Compagnon 5', 340, 340, 68, 58, 2, 2),
(26, 'Compagnon 6', 350, 350, 70, 60, 2, 3),
(27, 'Compagnon 7', 360, 360, 72, 62, 3, 1),
(28, 'Compagnon 8', 370, 370, 74, 64, 3, 2),
(29, 'Compagnon 9', 380, 380, 76, 66, 3, 3),
(30, 'Compagnon 10', 390, 390, 78, 68, 3, 1);

-- Table Combat
INSERT INTO Combat (IdCombat, StartTime, EndTime, Status, IdPlace) VALUES
(1, '2023-01-01 10:00:00', '2023-01-01 10:30:00', 'Terminé', 1),
(2, '2023-01-02 11:00:00', '2023-01-02 11:45:00', 'Terminé', 2),
(3, '2023-01-03 12:00:00', '2023-01-03 12:15:00', 'Terminé', 3),
(4, '2023-01-04 13:00:00', '2023-01-04 13:30:00', 'Terminé', 4),
(5, '2023-01-05 14:00:00', '2023-01-05 14:45:00', 'Terminé', 5),
(6, '2023-01-06 15:00:00', '2023-01-06 15:30:00', 'Terminé', 6),
(7, '2023-01-07 16:00:00', '2023-01-07 16:45:00', 'Terminé', 7),
(8, '2023-01-08 17:00:00', '2023-01-08 17:30:00', 'Terminé', 8),
(9, '2023-01-09 18:00:00', '2023-01-09 18:45:00', 'Terminé', 9),
(10, '2023-01-10 19:00:00', '2023-01-10 19:30:00', 'Terminé', 10);

-- Table CombatTeam
INSERT INTO CombatTeam (IdCombatTeam, Type, IdCombat) VALUES
(1, 'Équipe 1', 1),
(2, 'Équipe 2', 1),
(3, 'Équipe 1', 2),
(4, 'Équipe 2', 2),
(5, 'Équipe 1', 3),
(6, 'Équipe 2', 3),
(7, 'Équipe 1', 4),
(8, 'Équipe 2', 4),
(9, 'Équipe 1', 5),
(10, 'Équipe 2', 5);

-- Table CombatParticipant
INSERT INTO CombatParticipant (IdCombatParticipant, IdPersonage, IdCombatTeam) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 11, 2),
(4, 12, 2),
(5, 3, 3),
(6, 4, 3),
(7, 13, 4),
(8, 14, 4),
(9, 5, 5),
(10, 6, 5),
(11, 15, 6),
(12, 16, 6),
(13, 7, 7),
(14, 8, 7),
(15, 17, 8),
(16, 18, 8),
(17, 9, 9),
(18, 10, 9),
(19, 19, 10),
(20, 20, 10);

-- Table Companion
INSERT INTO Companion (IdCompanion, Experience, IdPersonage) VALUES
(1, 100, 21),
(2, 110, 22),
(3, 120, 23),
(4, 130, 24),
(5, 140, 25),
(6, 150, 26),
(7, 160, 27),
(8, 170, 28),
(9, 180, 29),
(10, 190, 30);

-- Table EquipmentSlot
INSERT INTO EquipmentSlot (IdEquipmentSlot, Name) VALUES
(1, 'Main'),
(2, 'Tête'),
(3, 'Corps'),
(4, 'Accessoire'),
(5, 'Pieds'),
(6, 'Ceinture'),
(7, 'Dos'),
(8, 'Cou'),
(9, 'Poignet'),
(10, 'Doigt');

-- Table EquipedItem
INSERT INTO EquipedItem (IdEquipedItem, IdItem, IdEquipmentSlot, IdPersonage) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 1, 2),
(4, 4, 4, 2),
(5, 5, 1, 3),
(6, 6, 3, 3),
(7, 7, 1, 4),
(8, 8, 4, 4),
(9, 9, 2, 5),
(10, 10, 4, 5);

-- Table Adventurer
INSERT INTO Adventurer (IdAdventurer, IdDiscord, Gold, Experience, IdPlace, IdPersonage) VALUES
(1, 'Discord1', 100, 50, 1, 1),
(2, 'Discord2', 110, 60, 2, 2),
(3, 'Discord3', 120, 70, 3, 3),
(4, 'Discord4', 130, 80, 4, 4),
(5, 'Discord5', 140, 90, 5, 5),
(6, 'Discord6', 150, 100, 6, 6),
(7, 'Discord7', 160, 110, 7, 7),
(8, 'Discord8', 170, 120, 8, 8),
(9, 'Discord9', 180, 130, 9, 9),
(10, '540924250312409091', 190, 140, 10, 10); -- Aventurier avec l'ID Discord spécifié

-- Table Ability
INSERT INTO Ability (IdAbility, Name, Description, Damage, Regen, Shield, Experience, LevelRequired, IdLevel, IdClass) VALUES
(1, 'Coup puissant', 'Augmente les dégâts', 10, 0, 0, 50, 1, 1, 1),
(2, 'Bouclier magique', 'Crée un bouclier', 0, 0, 10, 60, 1, 1, 2),
(3, 'Flèche enflammée', 'Tire une flèche enflammée', 15, 0, 0, 70, 1, 1, 3),
(4, 'Soins', 'Restaure des points de vie', 0, 20, 0, 80, 2, 2, 1),
(5, 'Boule de feu', 'Lance une boule de feu', 20, 0, 0, 90, 2, 2, 2),
(6, 'Invisibilité', 'Devient invisible', 0, 0, 0, 100, 2, 2, 3),
(7, 'Coup critique', 'Augmente les chances de coup critique', 25, 0, 0, 110, 3, 3, 1),
(8, 'Régénération', 'Régénère des points de vie', 0, 30, 0, 120, 3, 3, 2),
(9, 'Protection divine', 'Augmente la défense', 0, 0, 20, 130, 3, 3, 3),
(10, 'Foudre', 'Invoque la foudre', 30, 0, 0, 140, 3, 3, 1);

-- Table Enemy
INSERT INTO Enemy (IdEnemy, ExperienceValue, GoldValue, IdPersonage) VALUES
(1, 50, 20, 11),
(2, 55, 22, 12),
(3, 60, 24, 13),
(4, 65, 26, 14),
(5, 70, 28, 15),
(6, 75, 30, 16),
(7, 80, 32, 17),
(8, 85, 34, 18),
(9, 90, 36, 19),
(10, 95, 38, 20);

-- Table Building
INSERT INTO Building (IdBuilding, Name, Description, IdType) VALUES
(1, 'Forge', 'Pour forger des armes', 5),
(2, 'Taverne', 'Pour se reposer', 5),
(3, 'Temple', 'Pour prier', 5),
(4, 'Bibliothèque', 'Pour étudier', 5),
(5, 'Magasin', 'Pour acheter des objets', 5),
(6, 'Marché', 'Pour vendre des objets', 5),
(7, 'Château', 'Pour rencontrer le roi', 5),
(8, 'Prison', 'Pour enfermer les ennemis', 5),
(9, 'Tour de guet', 'Pour surveiller', 5),
(10, 'Écurie', 'Pour les montures', 5);

-- Table Inventory
INSERT INTO Inventory (IdInventory, Quantity, IdAdventurer, IdItem) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4),
(5, 5, 5, 5),
(6, 6, 6, 6),
(7, 7, 7, 7),
(8, 8, 8, 8),
(9, 9, 9, 9),
(10, 10, 10, 10);

-- Table BuildingPlace
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

-- Table AdventurerCompanion
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
