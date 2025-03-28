-- Insert sample data into DiscordUser table
INSERT INTO DiscordUser (IdDiscord, DiscordUsername) VALUES
('540924250312409091', 'TY'),
('user2', 'Bob'),
('user3', 'Charlie'),
('user4', 'David'),
('user5', 'Eve');

-- Insert sample data into Class table
INSERT INTO Class (IdClass, Name, Description) VALUES
(1, 'Warrior', 'Strong melee fighter'),
(2, 'Mage', 'Powerful spell caster'),
(3, 'Rogue', 'Stealthy and agile'),
(4, 'Cleric', 'Healer and supporter'),
(5, 'Ranger', 'Skilled archer');

-- Insert sample data into Ability table
INSERT INTO Ability (IdAbility, Name, Description, Damage, Regen, Shield) VALUES
(1, 'Fireball', 'Throws a ball of fire', 50, 0, 0),
(2, 'Heal', 'Restores health points', 0, 30, 0),
(3, 'Backstab', 'Deals damage from behind', 40, 0, 0),
(4, 'Bless', 'Increases defence', 0, 0, 20),
(5, 'Arrow Shot', 'Shoots an arrow', 30, 0, 0);

-- Insert sample data into Enemy table
INSERT INTO Enemy (IdEnemy, Name, Level, HealthPoints, Attack, Defence) VALUES
(1, 'Goblin', 1, 100, 10, 5),
(2, 'Orc', 5, 300, 30, 20),
(3, 'Skeleton', 3, 150, 20, 10),
(4, 'Troll', 7, 400, 40, 25),
(5, 'Dragon', 10, 500, 50, 30);

-- Insert sample data into City table
INSERT INTO City (IdCity, Name, Description, RequiredLevel) VALUES
(1, 'Camelot', 'A legendary city', 1),
(2, 'Avalon', 'A mystical city', 5),
(3, 'Eldoria', 'An ancient city', 3),
(4, 'Necropolis', 'A city of the dead', 7),
(5, 'Dragonspire', 'A city in the sky', 10);

-- Insert sample data into Region table
INSERT INTO Region (IdRegion, Name, Description, RequiredLevel) VALUES
(1, 'Forest', 'A dense forest', 1),
(2, 'Mountain', 'A tall mountain range', 5),
(3, 'Desert', 'A vast desert', 3),
(4, 'Swamp', 'A murky swamp', 7),
(5, 'Sky', 'Floating islands', 10);

-- Insert sample data into Place table
INSERT INTO Place (IdPlace, Name, Description, IdRegion) VALUES
(1, 'Tavern', 'A place to rest and drink', 1),
(2, 'Blacksmith', 'A place to forge weapons', 2),
(3, 'Oasis', 'A refreshing spot in the desert', 3),
(4, 'Ruins', 'Ancient structures in the swamp', 4),
(5, 'Cloud Palace', 'A palace in the sky', 5);

-- Insert sample data into Item table
INSERT INTO Item (IdItem, Name, Description, BuyPrice, SellPrice, Damage, Regen, Shield, Rarity) VALUES
(1, 'Sword', 'A sharp blade', 100, 50, 20, 0, 0, 'Common'),
(2, 'Potion', 'Restores health', 50, 25, 0, 20, 0, 'Uncommon'),
(3, 'Dagger', 'A small, sharp knife', 75, 35, 15, 0, 0, 'Rare'),
(4, 'Shield', 'Protects from damage', 150, 75, 0, 0, 30, 'Epic'),
(5, 'Staff', 'A magical staff', 200, 100, 25, 10, 0, 'Legendary');

-- Insert sample data into Trade table
INSERT INTO Trade (IdTrade, IdPlace, IdItem) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5);

-- Insert sample data into Adventurer table
INSERT INTO Adventurer (IdAdventurer, Name, Level, Experience, HealthPoints, Attack, Defence, IdPlace, IdDiscord) VALUES
(1, 'Arthur', 1, 0.00, 100, 10, 5, 1, 'user1'),
(2, 'Lancelot', 5, 150.00, 300, 30, 20, 2, 'user2'),
(3, 'Gawain', 3, 75.00, 200, 20, 10, 3, 'user3'),
(4, 'Perceval', 7, 300.00, 400, 40, 25, 4, 'user4'),
(5, 'Galahad', 10, 500.00, 500, 50, 30, 5, 'user5');

-- Insert sample data into Est_Adventurer_Class table
INSERT INTO Est_Adventurer_Class (IdAdventurer, IdClass) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample data into Maitrise table
INSERT INTO Maitrise (IdClass, IdAbility) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample data into Est_Enemy_Class table
INSERT INTO Est_Enemy_Class (IdClass, IdEnemy) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample data into Est_dans_Building_City table
INSERT INTO Est_dans_Building_City (IdCity, IdPlace) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample data into Avoir table
INSERT INTO Avoir (IdAdventurer, IdItem) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
