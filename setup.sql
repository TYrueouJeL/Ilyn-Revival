DROP DATABASE IF EXISTS ilynrevival;
CREATE DATABASE ilynrevival;
USE ilynrevival;

CREATE TABLE DiscordUser(
   IdDiscord VARCHAR(50),
   DiscordUsername VARCHAR(50),
   PRIMARY KEY(IdDiscord)
);

CREATE TABLE Class(
   IdClass INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   HealthPoints INT,
   Attack INT,
   Defense INT,
   PRIMARY KEY(IdClass)
);

CREATE TABLE Ability(
   IdAbility INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   Damage INT,
   Regen INT,
   Shield INT,
   PRIMARY KEY(IdAbility)
);

CREATE TABLE Enemy(
   IdEnemy INT AUTO_INCREMENT,
   Name VARCHAR(50),
   HealthPoints INT,
   Attack INT,
   Defense INT,
   PRIMARY KEY(IdEnemy)
);

CREATE TABLE City(
   IdCity INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   RequiredLevel INT,
   PRIMARY KEY(IdCity)
);

CREATE TABLE Region(
   IdRegion INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   RequiredLevel INT,
   PRIMARY KEY(IdRegion)
);

CREATE TABLE Place(
   IdPlace INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   Location DECIMAL(6,3),
   IdRegion INT NOT NULL,
   IdCity INT,
   PRIMARY KEY(IdPlace),
   FOREIGN KEY(IdRegion) REFERENCES Region(IdRegion),
   FOREIGN KEY(IdCity) REFERENCES City(IdCity)
);

CREATE TABLE Item(
   IdItem INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   BuyPrice INT,
   SellPrice INT,
   Damage INT,
   Regen INT,
   Shield INT,
   Rarity VARCHAR(50),
   PRIMARY KEY(IdItem)
);

CREATE TABLE Level(
   IdLevel INT AUTO_INCREMENT,
   Level INT,
   ExperienceRequired DECIMAL(15,2),
   HealthPointsBonus INT,
   AttackBonus INT,
   DefenseBonus INT,
   PRIMARY KEY(IdLevel)
);

CREATE TABLE Type(
   IdType INT AUTO_INCREMENT,
   Type VARCHAR(50),
   PRIMARY KEY(IdType)
);

CREATE TABLE TradeableItem(
   IdTradeableItem INT AUTO_INCREMENT,
   IdType INT NOT NULL,
   IdItem INT NOT NULL,
   PRIMARY KEY(IdTradeableItem),
   FOREIGN KEY(IdType) REFERENCES Type(IdType),
   FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
);

CREATE TABLE Adventurer(
   IdAdventurer INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Gold INT,
   Experience DECIMAL(15,2),
   MaxHealthPoints INT,
   HealthPoints INT,
   Attack INT,
   Defense INT,
   IdPlace INT NOT NULL,
   IdClass INT NOT NULL,
   IdDiscord VARCHAR(50) NOT NULL,
   PRIMARY KEY(IdAdventurer),
   FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
   FOREIGN KEY(IdClass) REFERENCES Class(IdClass),
   FOREIGN KEY(IdDiscord) REFERENCES DiscordUser(IdDiscord)
);

CREATE TABLE Building(
   IdBuilding INT AUTO_INCREMENT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   IdType INT NOT NULL,
   PRIMARY KEY(IdBuilding),
   FOREIGN KEY(IdType) REFERENCES Type(IdType)
);

CREATE TABLE ClassAbility(
   IdClass INT,
   IdAbility INT,
   PRIMARY KEY(IdClass, IdAbility),
   FOREIGN KEY(IdClass) REFERENCES Class(IdClass),
   FOREIGN KEY(IdAbility) REFERENCES Ability(IdAbility)
);

CREATE TABLE EnemyClass(
   IdClass INT,
   IdEnemy INT,
   PRIMARY KEY(IdClass, IdEnemy),
   FOREIGN KEY(IdClass) REFERENCES Class(IdClass),
   FOREIGN KEY(IdEnemy) REFERENCES Enemy(IdEnemy)
);

CREATE TABLE AdventurerItem(
   IdAdventurer INT,
   IdItem INT,
   PRIMARY KEY(IdAdventurer, IdItem),
   FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
   FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
);

CREATE TABLE AdventurerLevel(
   IdAdventurer INT,
   IdLevel INT,
   PRIMARY KEY(IdAdventurer, IdLevel),
   FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
   FOREIGN KEY(IdLevel) REFERENCES Level(IdLevel)
);

CREATE TABLE EnemyLevel(
   IdEnemy INT,
   IdLevel INT,
   ExperienceGiven DECIMAL(15,2),
   PRIMARY KEY(IdEnemy, IdLevel),
   FOREIGN KEY(IdEnemy) REFERENCES Enemy(IdEnemy),
   FOREIGN KEY(IdLevel) REFERENCES Level(IdLevel)
);

CREATE TABLE BuildingPlace(
   IdPlace INT,
   IdBuilding INT,
   PRIMARY KEY(IdPlace, IdBuilding),
   FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
   FOREIGN KEY(IdBuilding) REFERENCES Building(IdBuilding)
);

