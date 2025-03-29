-- Insert data into Class table
INSERT INTO Class (IdClass, Name, Description, HealthPointsRatio, AttackRatio, DefenseRatio) VALUES
(1, 'Warrior', 'Strong melee fighter', 1.5, 1.2, 1.0),
(2, 'Mage', 'Powerful spell caster', 1.0, 1.5, 0.8),
(3, 'Rogue', 'Stealthy assassin', 1.1, 1.3, 0.9),
(4, 'Healer', 'Supportive healer', 1.3, 0.8, 1.2),
(5, 'Ranger', 'Skilled archer', 1.2, 1.4, 1.1),
(6, 'Paladin', 'Holy warrior', 1.4, 1.1, 1.3),
(7, 'Necromancer', 'Dark magic user', 0.9, 1.6, 0.7),
(8, 'Bard', 'Musical supporter', 1.2, 1.0, 1.1),
(9, 'Monk', 'Martial artist', 1.3, 1.2, 1.2),
(10, 'Druid', 'Nature guardian', 1.1, 1.3, 1.0);

-- Insert data into City table
INSERT INTO City (IdCity, Name, Description, RequiredLevel) VALUES
(1, 'Emerald City', 'Green and prosperous', 5),
(2, 'Silver City', 'Shiny and wealthy', 10),
(3, 'Dark City', 'Mysterious and dangerous', 15),
(4, 'Golden City', 'Radiant and luxurious', 20),
(5, 'Crystal City', 'Transparent and magical', 25),
(6, 'Stone City', 'Solid and fortified', 30),
(7, 'Ice City', 'Frozen and serene', 35),
(8, 'Sand City', 'Desert oasis', 40),
(9, 'Forest City', 'Hidden in the woods', 45),
(10, 'Mountain City', 'High and majestic', 50);

-- Insert data into Region table
INSERT INTO Region (IdRegion, Name, Description, RequiredLevel) VALUES
(1, 'Green Plains', 'Vast and fertile', 1),
(2, 'Snowy Peaks', 'Cold and treacherous', 10),
(3, 'Desert Sands', 'Hot and dry', 15),
(4, 'Mystic Forest', 'Enchanted and wild', 20),
(5, 'Volcanic Ridge', 'Fiery and unpredictable', 25),
(6, 'Coastal Cliffs', 'Rugged and windy', 30),
(7, 'Swamp Lands', 'Murky and mysterious', 35),
(8, 'Canyon Lands', 'Deep and echoing', 40),
(9, 'Tundra Expanse', 'Barren and icy', 45),
(10, 'Jungle Depths', 'Dense and humid', 50);

-- Insert data into Place table
INSERT INTO Place (IdPlace, Name, Description, Location, IdRegion, IdCity) VALUES
(1, 'Green Meadow', 'Peaceful and serene', 10.001, 1, 1),
(2, 'Frozen Lake', 'Icy and still', 20.002, 2, 2),
(3, 'Sand Dune', 'Windy and vast', 30.003, 3, NULL),
(4, 'Ancient Ruins', 'Mysterious and old', 40.004, 4, 4),
(5, 'Lava Pit', 'Dangerous and hot', 50.005, 5, 5),
(6, 'Cliffside Path', 'Narrow and treacherous', 60.006, 6, 6),
(7, 'Swamp Hut', 'Hidden and damp', 70.007, 7, 7),
(8, 'Canyon Bridge', 'Long and creaky', 80.008, 8, 8),
(9, 'Ice Cavern', 'Cold and echoing', 90.009, 9, 9),
(10, 'Jungle Temple', 'Ancient and overgrown', 100.010, 10, 10);

-- Insert data into Item table
INSERT INTO Item (IdItem, Name, Description, BuyPrice, SellPrice, Damage, Regen, Shield, Rarity, RequiredLevel) VALUES
(1, 'Sword', 'Sharp and deadly', 100, 50, 20, 0, 5, 'Common', 1),
(2, 'Staff', 'Magical and powerful', 150, 75, 15, 10, 3, 'Rare', 5),
(3, 'Bow', 'Precise and swift', 120, 60, 18, 0, 4, 'Uncommon', 3),
(4, 'Potion', 'Healing and refreshing', 50, 25, 0, 25, 0, 'Common', 1),
(5, 'Shield', 'Protective and sturdy', 200, 100, 5, 0, 20, 'Rare', 10),
(6, 'Axe', 'Heavy and powerful', 130, 65, 25, 0, 6, 'Epic', 15),
(7, 'Wand', 'Arcane and mystical', 180, 90, 10, 15, 2, 'Legendary', 20),
(8, 'Dagger', 'Quick and deadly', 110, 55, 16, 0, 3, 'Uncommon', 8),
(9, 'Helmet', 'Protective headgear', 170, 85, 0, 0, 15, 'Rare', 12),
(10, 'Ring', 'Magical and enchanted', 250, 125, 0, 5, 0, 'Epic', 25);

-- Insert data into Level table
INSERT INTO Level (IdLevel, Level, ExperienceRequired, HealthPointsBonus, AttackBonus, DefenseBonus) VALUES
(1, 1, 0, 100, 10, 5),
(2, 2, 100, 150, 15, 10),
(3, 3, 300, 200, 20, 15),
(4, 4, 600, 250, 25, 20),
(5, 5, 1000, 300, 30, 25),
(6, 6, 1500, 350, 35, 30),
(7, 7, 2100, 400, 40, 35),
(8, 8, 2800, 450, 45, 40),
(9, 9, 3600, 500, 50, 45),
(10, 10, 4500, 550, 55, 50);

-- Insert data into Type table
INSERT INTO Type (IdType, Type) VALUES
(1, 'Weapon'),
(2, 'Armor'),
(3, 'Consumable'),
(4, 'Tool'),
(5, 'Quest Item'),
(6, 'Accessory'),
(7, 'Mount'),
(8, 'Pet'),
(9, 'Resource'),
(10, 'Currency');

-- Insert data into TradeableItem table
INSERT INTO TradeableItem (IdTradeableItem, IdType, IdItem) VALUES
('WEAPON_SWORD', 1, 1),
('WEAPON_STAFF', 1, 2),
('WEAPON_BOW', 1, 3),
('CONSUMABLE_POTION', 3, 4),
('ARMOR_SHIELD', 2, 5),
('WEAPON_AXE', 1, 6),
('WEAPON_WAND', 1, 7),
('WEAPON_DAGGER', 1, 8),
('ARMOR_HELMET', 2, 9),
('ACCESSORY_RING', 6, 10);

-- Insert data into Personage table
INSERT INTO Personage (IdPersonage, Name, MaxHealthPoints, HealthPoints, Attack, Defense, IdLevel, IdClass) VALUES
(1, 'Arthur', 100, 100, 20, 10, 1, 1),
(2, 'Merlin', 80, 80, 30, 5, 2, 2),
(3, 'Lancelot', 90, 90, 25, 15, 3, 3),
(4, 'Guinevere', 110, 110, 15, 20, 4, 4),
(5, 'Gawain', 95, 95, 22, 18, 5, 5),
(6, 'Perceval', 105, 105, 24, 16, 6, 6),
(7, 'Morgana', 85, 85, 32, 8, 7, 7),
(8, 'Tristan', 92, 92, 26, 14, 8, 8),
(9, 'Isolde', 115, 115, 16, 22, 9, 9),
(10, 'Galahad', 100, 100, 28, 19, 10, 10),
(11, 'CompanionA', 85, 85, 15, 10, 1, 1),
(12, 'CompanionB', 90, 90, 18, 12, 2, 2),
(13, 'CompanionC', 95, 95, 20, 14, 3, 3),
(14, 'CompanionD', 100, 100, 22, 16, 4, 4),
(15, 'CompanionE', 105, 105, 24, 18, 5, 5),
(16, 'CompanionF', 110, 110, 26, 20, 6, 6),
(17, 'CompanionG', 115, 115, 28, 22, 7, 7),
(18, 'CompanionH', 120, 120, 30, 24, 8, 8),
(19, 'CompanionI', 125, 125, 32, 26, 9, 9),
(20, 'CompanionJ', 130, 130, 34, 28, 10, 10),
(21, 'EnemyA', 110, 110, 25, 15, 1, 1),
(22, 'EnemyB', 120, 120, 30, 20, 2, 2),
(23, 'EnemyC', 130, 130, 35, 25, 3, 3),
(24, 'EnemyD', 140, 140, 40, 30, 4, 4),
(25, 'EnemyE', 150, 150, 45, 35, 5, 5),
(26, 'EnemyF', 160, 160, 50, 40, 6, 6),
(27, 'EnemyG', 170, 170, 55, 45, 7, 7),
(28, 'EnemyH', 180, 180, 60, 50, 8, 8),
(29, 'EnemyI', 190, 190, 65, 55, 9, 9),
(30, 'EnemyJ', 200, 200, 70, 60, 10, 10);

-- Insert data into Combat table
INSERT INTO Combat (IdCombat, StartTime, EndTime, Status, IdPlace) VALUES
(1, '2023-10-01 10:00:00', '2023-10-01 10:30:00', 'Completed', 1),
(2, '2023-10-02 11:00:00', NULL, 'In Progress', 2),
(3, '2023-10-03 12:00:00', '2023-10-03 12:45:00', 'Completed', 3),
(4, '2023-10-04 13:00:00', NULL, 'In Progress', 4),
(5, '2023-10-05 14:00:00', '2023-10-05 14:30:00', 'Completed', 5),
(6, '2023-10-06 15:00:00', '2023-10-06 15:30:00', 'Completed', 6),
(7, '2023-10-07 16:00:00', NULL, 'In Progress', 7),
(8, '2023-10-08 17:00:00', '2023-10-08 17:45:00', 'Completed', 8),
(9, '2023-10-09 18:00:00', NULL, 'In Progress', 9),
(10, '2023-10-10 19:00:00', '2023-10-10 19:30:00', 'Completed', 10);

-- Insert data into CombatTeam table
INSERT INTO CombatTeam (IdCombatTeam, Type, IdCombat) VALUES
(1, 'Adventurer', 1),
(2, 'Enemy', 1),
(3, 'Adventurer', 2),
(4, 'Enemy', 2),
(5, 'Adventurer', 3),
(6, 'Enemy', 4),
(7, 'Adventurer', 5),
(8, 'Enemy', 5),
(9, 'Adventurer', 6),
(10, 'Enemy', 6);

-- Insert data into CombatParticipant table
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

-- Insert data into Companion table
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

-- Insert data into Adventurer table
INSERT INTO Adventurer (IdDiscord, Gold, Experience, IdPlace, IdPersonage) VALUES
('discord_1', 1000, 200, 1, 1),
('discord_2', 1500, 300, 2, 2),
('discord_3', 2000, 400, 3, 3),
('discord_4', 2500, 500, 4, 4),
('discord_5', 3000, 600, 5, 5),
('discord_6', 3500, 700, 6, 6),
('discord_7', 4000, 800, 7, 7),
('discord_8', 4500, 900, 8, 8),
('discord_9', 5000, 1000, 9, 9),
('discord_10', 5500, 1100, 10, 10);

-- Insert data into Ability table
INSERT INTO Ability (IdAbility, Name, Description, Damage, Regen, Shield, IdLevel, IdClass) VALUES
(1, 'Fireball', 'Deals fire damage', 50, 0, 0, 1, 2),
(2, 'Heal', 'Restores health', 0, 30, 0, 2, 4),
(3, 'Stealth', 'Increases evasion', 0, 0, 10, 3, 3),
(4, 'Slash', 'Deals physical damage', 40, 0, 0, 4, 1),
(5, 'Shield Up', 'Increases defense', 0, 0, 20, 5, 5),
(6, 'Ice Blast', 'Deals ice damage', 45, 0, 0, 6, 2),
(7, 'Mana Shield', 'Absorbs damage with mana', 0, 0, 15, 7, 4),
(8, 'Backstab', 'Deals surprise damage', 55, 0, 0, 8, 3),
(9, 'Blessing', 'Increases all stats', 10, 10, 10, 9, 4),
(10, 'Summon', 'Calls a creature to fight', 30, 0, 0, 10, 2);

-- Insert data into Enemy table
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

-- Insert data into Building table
INSERT INTO Building (IdBuilding, Name, Description, IdType) VALUES
(1, 'Tavern', 'A place to rest and drink', 4),
(2, 'Blacksmith', 'Forge and repair weapons', 4),
(3, 'Library', 'Store of ancient knowledge', 4),
(4, 'Temple', 'Place of worship and healing', 4),
(5, 'Market', 'Trade goods and items', 4),
(6, 'Stable', 'House and care for mounts', 7),
(7, 'Alchemy Lab', 'Create potions and elixirs', 9),
(8, 'Training Ground', 'Practice combat skills', 4),
(9, 'Guild Hall', 'Meeting place for adventurers', 4),
(10, 'Bank', 'Store and manage gold', 10);

-- Insert data into Inventory table
INSERT INTO Inventory (IdInventory, Quantity, IdDiscord, IdItem) VALUES
(1, 2, 'discord_1', 1),
(2, 3, 'discord_2', 2),
(3, 1, 'discord_3', 3),
(4, 5, 'discord_4', 4),
(5, 4, 'discord_5', 5),
(6, 6, 'discord_6', 6),
(7, 2, 'discord_7', 7),
(8, 3, 'discord_8', 8),
(9, 1, 'discord_9', 9),
(10, 5, 'discord_10', 10);

-- Insert data into BuildingPlace table
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

-- Insert data into AdventurerCompanion table
INSERT INTO AdventurerCompanion (IdDiscord, IdCompanion) VALUES
('discord_1', 1),
('discord_2', 2),
('discord_3', 3),
('discord_4', 4),
('discord_5', 5),
('discord_6', 6),
('discord_7', 7),
('discord_8', 8),
('discord_9', 9),
('discord_10', 10);
