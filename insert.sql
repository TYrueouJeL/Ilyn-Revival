-- Insertion de données dans la table DiscordUser
INSERT INTO DiscordUser (IdDiscord, DiscordUsername) VALUES
('540924250312409091', 'User1'),
('540924250312409092', 'User2'),
('540924250312409093', 'User3'),
('540924250312409094', 'User4'),
('540924250312409095', 'User5');

-- Insertion de données dans la table Class
INSERT INTO Class (IdClass, Name, Description) VALUES
(1, 'Warrior', 'Strong and resilient'),
(2, 'Mage', 'Powerful spellcaster'),
(3, 'Rogue', 'Stealthy and agile'),
(4, 'Healer', 'Supportive and caring'),
(5, 'Ranger', 'Skilled with bows');

-- Insertion de données dans la table Ability
INSERT INTO Ability (IdAbility, Name, Description, Damage, Regen, Shield) VALUES
(1, 'Fireball', 'Throws a fireball', 50, 0, 0),
(2, 'Heal', 'Restores health', 0, 30, 0),
(3, 'Shield Wall', 'Creates a shield', 0, 0, 20),
(4, 'Stealth', 'Becomes invisible', 0, 0, 0),
(5, 'Arrow Shot', 'Shoots an arrow', 30, 0, 0);

-- Insertion de données dans la table Enemy
INSERT INTO Enemy (IdEnemy, Name, HealthPoints, Attack, Defence) VALUES
(1, 'Goblin', 100, 10, 5),
(2, 'Orc', 200, 20, 10),
(3, 'Dragon', 500, 50, 30),
(4, 'Skeleton', 80, 15, 8),
(5, 'Zombie', 120, 12, 6);

-- Insertion de données dans la table City
INSERT INTO City (IdCity, Name, Description, RequiredLevel) VALUES
(1, 'Eldoria', 'Capital city', 1),
(2, 'Darkwood', 'Mysterious forest', 5),
(3, 'Mountainkeep', 'Fortress in the mountains', 10),
(4, 'Seabrook', 'Coastal town', 15),
(5, 'Desertspring', 'Oasis in the desert', 20);

-- Insertion de données dans la table Region
INSERT INTO Region (IdRegion, Name, Description, RequiredLevel) VALUES
(1, 'Plains', 'Vast open fields', 1),
(2, 'Forest', 'Dense and lush', 5),
(3, 'Mountains', 'Rugged and tall', 10),
(4, 'Coast', 'Beautiful beaches', 15),
(5, 'Desert', 'Arid and hot', 20);

-- Insertion de données dans la table Place
INSERT INTO Place (IdPlace, Name, Description, IdRegion, IdCity) VALUES
(1, 'Eldoria Market', 'Busy marketplace', 1, 1),
(2, 'Darkwood Inn', 'Cozy inn', 2, 2),
(3, 'Mountainkeep Forge', 'Blacksmith shop', 3, 3),
(4, 'Seabrook Docks', 'Bustling docks', 4, 4),
(5, 'Desertspring Oasis', 'Refreshing oasis', 5, 5);

-- Insertion de données dans la table Item
INSERT INTO Item (IdItem, Name, Description, BuyPrice, SellPrice, Damage, Regen, Shield, Rarity) VALUES
(1, 'Sword', 'Sharp blade', 100, 50, 20, 0, 0, 'Common'),
(2, 'Potion', 'Heals wounds', 50, 25, 0, 30, 0, 'Uncommon'),
(3, 'Shield', 'Protective shield', 150, 75, 0, 0, 20, 'Rare'),
(4, 'Bow', 'Ranged weapon', 120, 60, 15, 0, 0, 'Common'),
(5, 'Staff', 'Magical staff', 200, 100, 30, 0, 0, 'Epic');

-- Insertion de données dans la table Trade
INSERT INTO Trade (IdTrade, IdPlace, IdItem) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5);

-- Insertion de données dans la table Level
INSERT INTO Level (IdLevel, Level, ExperienceRequired, HealthPointsBonus, AttackBonus, DefenceBonus) VALUES
(1, 1, 100.00, 10, 5, 3),
(2, 2, 200.00, 20, 10, 6),
(3, 3, 400.00, 30, 15, 9),
(4, 4, 800.00, 40, 20, 12),
(5, 5, 1600.00, 50, 25, 15);

-- Insertion de données dans la table Adventurer
INSERT INTO Adventurer (IdAdventurer, Name, Gold, Experience, MaxHealthPoints, HealthPoints, Attack, Defence, IdPlace, IdDiscord) VALUES
(1, 'Adventurer1', 1000, 500.00, 100, 100, 20, 10, 1, '540924250312409091'),
(2, 'Adventurer2', 1500, 1000.00, 150, 150, 25, 15, 2, '540924250312409092'),
(3, 'Adventurer3', 2000, 1500.00, 200, 200, 30, 20, 3, '540924250312409093'),
(4, 'Adventurer4', 2500, 2000.00, 250, 250, 35, 25, 4, '540924250312409094'),
(5, 'Adventurer5', 3000, 2500.00, 300, 300, 40, 30, 5, '540924250312409095');

-- Insertion de données dans la table AdventurerClass
INSERT INTO AdventurerClass (IdAdventurer, IdClass) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insertion de données dans la table ClassAbility
INSERT INTO ClassAbility (IdClass, IdAbility) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insertion de données dans la table EnemyClass
INSERT INTO EnemyClass (IdClass, IdEnemy) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insertion de données dans la table AdventurerItem
INSERT INTO AdventurerItem (IdAdventurer, IdItem) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insertion de données dans la table AdventurerLevel
INSERT INTO AdventurerLevel (IdAdventurer, IdLevel) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insertion de données dans la table EnemyLevel
INSERT INTO EnemyLevel (IdEnemy, IdLevel, ExperienceGiven) VALUES
(1, 1, 50.00),
(2, 2, 100.00),
(3, 3, 200.00),
(4, 4, 300.00),
(5, 5, 400.00);
