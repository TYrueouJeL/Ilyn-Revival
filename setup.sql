DROP DATABASE IF EXISTS ilynrevival;
CREATE DATABASE ilynrevival;
USE ilynrevival;

CREATE TABLE Class(
   IdClass INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   HealthPointsRatio DECIMAL(15,2),
   AttackRatio DECIMAL(15,2),
   DefenseRatio DECIMAL(15,2),
   PRIMARY KEY(IdClass)
);

CREATE TABLE City(
   IdCity INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   RequiredLevel INT,
   PRIMARY KEY(IdCity)
);

CREATE TABLE Region(
   IdRegion INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   RequiredLevel INT,
   PRIMARY KEY(IdRegion)
);

CREATE TABLE Place(
   IdPlace INT,
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
   IdItem INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   BuyPrice INT,
   SellPrice INT,
   Damage INT,
   Regen INT,
   Shield INT,
   Rarity VARCHAR(50),
   RequiredLevel INT,
   SlotType VARCHAR(50),
   PRIMARY KEY(IdItem)
);

CREATE TABLE Level(
   IdLevel INT,
   Level INT,
   ExperienceRequired INT,
   HealthPointsBonus INT,
   AttackBonus INT,
   DefenseBonus INT,
   Type VARCHAR(50),
   PRIMARY KEY(IdLevel)
);

CREATE TABLE Type(
   IdType INT,
   Type VARCHAR(50),
   PRIMARY KEY(IdType)
);

CREATE TABLE TradeableItem(
   IdTradeableItem VARCHAR(50),
   IdType INT NOT NULL,
   IdItem INT NOT NULL,
   PRIMARY KEY(IdTradeableItem),
   FOREIGN KEY(IdType) REFERENCES Type(IdType),
   FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
);

CREATE TABLE Personage(
   IdPersonage INT,
   Name VARCHAR(50),
   MaxHealthPoints INT,
   HealthPoints INT,
   Attack INT,
   Defense INT,
   IdLevel INT NOT NULL,
   IdClass INT NOT NULL,
   PRIMARY KEY(IdPersonage),
   FOREIGN KEY(IdLevel) REFERENCES Level(IdLevel),
   FOREIGN KEY(IdClass) REFERENCES Class(IdClass)
);

CREATE TABLE Combat(
   IdCombat INT,
   StartTime DATETIME,
   EndTime DATETIME,
   Status VARCHAR(50),
   IdPlace INT NOT NULL,
   PRIMARY KEY(IdCombat),
   FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace)
);

CREATE TABLE CombatTeam(
   IdCombatTeam INT,
   Type VARCHAR(50),
   IdCombat INT NOT NULL,
   PRIMARY KEY(IdCombatTeam),
   FOREIGN KEY(IdCombat) REFERENCES Combat(IdCombat)
);

CREATE TABLE CombatParticipant(
   IdCombatParticipant INT,
   IdPersonage INT NOT NULL,
   IdCombatTeam INT NOT NULL,
   PRIMARY KEY(IdCombatParticipant),
   FOREIGN KEY(IdPersonage) REFERENCES Personage(IdPersonage),
   FOREIGN KEY(IdCombatTeam) REFERENCES CombatTeam(IdCombatTeam)
);

CREATE TABLE Companion(
   IdCompanion INT,
   Experience INT,
   IdPersonage INT NOT NULL,
   PRIMARY KEY(IdCompanion),
   UNIQUE(IdPersonage),
   FOREIGN KEY(IdPersonage) REFERENCES Personage(IdPersonage)
);

CREATE TABLE EquipmentSlot(
   IdEquipmentSlot INT,
   Name VARCHAR(50),
   PRIMARY KEY(IdEquipmentSlot)
);

CREATE TABLE EquipedItem(
   IdEquipedItem INT,
   IdItem INT,
   IdEquipmentSlot INT NOT NULL,
   IdPersonage INT NOT NULL,
   PRIMARY KEY(IdEquipedItem),
   FOREIGN KEY(IdItem) REFERENCES Item(IdItem),
   FOREIGN KEY(IdEquipmentSlot) REFERENCES EquipmentSlot(IdEquipmentSlot),
   FOREIGN KEY(IdPersonage) REFERENCES Personage(IdPersonage)
);

CREATE TABLE Adventurer(
   IdAdventurer INT,
   IdDiscord VARCHAR(50) NOT NULL,
   Gold INT,
   Experience INT,
   IdPlace INT NOT NULL,
   IdPersonage INT NOT NULL,
   PRIMARY KEY(IdAdventurer),
   UNIQUE(IdPersonage),
   FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
   FOREIGN KEY(IdPersonage) REFERENCES Personage(IdPersonage)
);

CREATE TABLE Ability(
   IdAbility INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   Damage INT,
   Regen INT,
   Shield INT,
   Experience INT,
   LevelRequired INT,
   IdLevel INT NOT NULL,
   IdClass INT NOT NULL,
   PRIMARY KEY(IdAbility),
   FOREIGN KEY(IdLevel) REFERENCES Level(IdLevel),
   FOREIGN KEY(IdClass) REFERENCES Class(IdClass)
);

CREATE TABLE Enemy(
   IdEnemy INT,
   ExperienceValue INT,
   GoldValue INT,
   IdPersonage INT NOT NULL,
   PRIMARY KEY(IdEnemy),
   UNIQUE(IdPersonage),
   FOREIGN KEY(IdPersonage) REFERENCES Personage(IdPersonage)
);

CREATE TABLE Building(
   IdBuilding INT,
   Name VARCHAR(50),
   Description VARCHAR(50),
   IdType INT NOT NULL,
   PRIMARY KEY(IdBuilding),
   FOREIGN KEY(IdType) REFERENCES Type(IdType)
);

CREATE TABLE Inventory(
   IdInventory INT,
   Quantity INT,
   IdAdventurer INT NOT NULL,
   IdItem INT,
   PRIMARY KEY(IdInventory),
   UNIQUE(IdAdventurer),
   FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
   FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
);

CREATE TABLE BuildingPlace(
   IdPlace INT,
   IdBuilding INT,
   PRIMARY KEY(IdPlace, IdBuilding),
   FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
   FOREIGN KEY(IdBuilding) REFERENCES Building(IdBuilding)
);

CREATE TABLE AdventurerCompanion(
   IdAdventurer INT,
   IdCompanion INT,
   PRIMARY KEY(IdAdventurer, IdCompanion),
   FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
   FOREIGN KEY(IdCompanion) REFERENCES Companion(IdCompanion)
);

