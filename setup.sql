DROP DATABASE IF EXISTS ilynrevival;
CREATE DATABASE ilynrevival;
USE ilynrevival;

CREATE TABLE IF NOT EXISTS DiscordUser (
            IdDiscord VARCHAR(50),
            DiscordUsername VARCHAR(50),
            PRIMARY KEY(IdDiscord)
        );

        CREATE TABLE IF NOT EXISTS Class (
            IdClass INT,
            Name VARCHAR(50),
            Description VARCHAR(50),
            PRIMARY KEY(IdClass)
        );

        CREATE TABLE IF NOT EXISTS Ability (
            IdAbility INT,
            Name VARCHAR(50),
            Description VARCHAR(50),
            Damage INT,
            Regen INT,
            Shield INT,
            PRIMARY KEY(IdAbility)
        );

        CREATE TABLE IF NOT EXISTS Enemy (
            IdEnemy INT,
            Name VARCHAR(50),
            Level INT,
            HealthPoints INT,
            Attack INT,
            Defence INT,
            PRIMARY KEY(IdEnemy)
        );

        CREATE TABLE IF NOT EXISTS City (
            IdCity INT,
            Name VARCHAR(50),
            Description VARCHAR(50),
            RequiredLevel INT,
            PRIMARY KEY(IdCity)
        );

        CREATE TABLE IF NOT EXISTS Region (
            IdRegion INT,
            Name VARCHAR(50),
            Description VARCHAR(50),
            RequiredLevel INT,
            PRIMARY KEY(IdRegion)
        );

        CREATE TABLE IF NOT EXISTS Place (
            IdPlace INT,
            Name VARCHAR(50),
            Description VARCHAR(50),
            IdRegion INT NOT NULL,
            PRIMARY KEY(IdPlace),
            FOREIGN KEY(IdRegion) REFERENCES Region(IdRegion)
        );

        CREATE TABLE IF NOT EXISTS Item (
            IdItem INT,
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

        CREATE TABLE IF NOT EXISTS Trade (
            IdTrade INT,
            IdPlace INT NOT NULL,
            IdItem INT NOT NULL,
            PRIMARY KEY(IdTrade),
            FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
            FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
        );

        CREATE TABLE IF NOT EXISTS Adventurer (
            IdAdventurer INT,
            Name VARCHAR(50),
            Level INT,
            Experience DECIMAL(15,2),
            HealthPoints INT,
            Attack INT,
            Defence INT,
            IdPlace INT NOT NULL,
            IdDiscord VARCHAR(50) NOT NULL,
            PRIMARY KEY(IdAdventurer),
            FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace),
            FOREIGN KEY(IdDiscord) REFERENCES DiscordUser(IdDiscord)
        );

        CREATE TABLE IF NOT EXISTS Est_Adventurer_Class (
            IdAdventurer INT,
            IdClass INT,
            PRIMARY KEY(IdAdventurer, IdClass),
            FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
            FOREIGN KEY(IdClass) REFERENCES Class(IdClass)
        );

        CREATE TABLE IF NOT EXISTS Maitrise (
            IdClass INT,
            IdAbility INT,
            PRIMARY KEY(IdClass, IdAbility),
            FOREIGN KEY(IdClass) REFERENCES Class(IdClass),
            FOREIGN KEY(IdAbility) REFERENCES Ability(IdAbility)
        );

        CREATE TABLE IF NOT EXISTS Est_Enemy_Class (
            IdClass INT,
            IdEnemy INT,
            PRIMARY KEY(IdClass, IdEnemy),
            FOREIGN KEY(IdClass) REFERENCES Class(IdClass),
            FOREIGN KEY(IdEnemy) REFERENCES Enemy(IdEnemy)
        );

        CREATE TABLE IF NOT EXISTS Est_dans_Building_City (
            IdCity INT,
            IdPlace INT,
            PRIMARY KEY(IdCity, IdPlace),
            FOREIGN KEY(IdCity) REFERENCES City(IdCity),
            FOREIGN KEY(IdPlace) REFERENCES Place(IdPlace)
        );

        CREATE TABLE IF NOT EXISTS Avoir (
            IdAdventurer INT,
            IdItem INT,
            PRIMARY KEY(IdAdventurer, IdItem),
            FOREIGN KEY(IdAdventurer) REFERENCES Adventurer(IdAdventurer),
            FOREIGN KEY(IdItem) REFERENCES Item(IdItem)
        );