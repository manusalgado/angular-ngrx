-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: marvel_universe
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--
CREATE DATABASE marvel_universe;


CREATE USER 'marvel_universe_user'@'localhost' IDENTIFIED BY 'vcUCIS8377@r';
GRANT ALL PRIVILEGES ON marvel_universe.* TO 'marvel_universe_user'@'localhost';
ALTER USER 'marvel_universe_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vcUCIS8377@r';

USE marvel_universe;

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `countries_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cities_countries1_idx` (`countries_id`),
  CONSTRAINT `fk_cities_countries1` FOREIGN KEY (`countries_id`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'New York',1),(2,'Los Angeles',1),(3,'Atlantis',1),(4,'Star City',1),(5,'Gotham City',1),(6,'Star City',1),(7,'Seattle',1),(8,'San Francisco',1),(9,'Calgary',1),(10,'Bogota',3),(11,'Medellin',3),(12,'London',2),(13,'Manchester',2);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'EEUU'),(2,'UK'),(3,'Colombia');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroes`
--

DROP TABLE IF EXISTS `heroes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `heroe_type` enum('Villain','Hero') NOT NULL,
  `condition` enum('Free','Detained','Unkown') NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `cities_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_heroes_cities1_idx` (`cities_id`),
  CONSTRAINT `fk_heroes_cities1` FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes`
--

LOCK TABLES `heroes` WRITE;
/*!40000 ALTER TABLE `heroes` DISABLE KEYS */;
INSERT INTO `heroes` VALUES (1,'Black Panther','Hero','Unkown','https://cdn.mos.cms.futurecdn.net/9TeYbQaYXkCpnZRQ7ATjBK-1200-80.jpg.webp',1),(2,'Wolverine','Hero','Free','https://cdn.mos.cms.futurecdn.net/NxkVGZQhqqC83VXmH52mok-1200-80.jpg.webp',1),(3,'She-Hulk','Hero','Free','https://cdn.mos.cms.futurecdn.net/DYa8ti87nPDAMDSA2tExhQ-1200-80.jpg.webp',1),(4,'The Thing','Hero','Unkown','https://cdn.mos.cms.futurecdn.net/FXnvinQypGsN5y4uRJMVq-1200-80.jpg.webp',1),(5,'Thanos','Villain','Unkown','https://cdn.mos.cms.futurecdn.net/nFMKcb5xekypsUcQeLBCeD-1200-80.jpg.webp',1),(6,'Captain America','Hero','Unkown','https://cdn.mos.cms.futurecdn.net/HrFXpWgg8rnhFcn2EZ94PM-1200-80.jpg.webp',1),(7,'Spider-Man','Hero','Unkown','https://cdn.mos.cms.futurecdn.net/Rttcgptz4CCASa3nRqvXo7-1200-80.jpg.webp',1),(8,'Doctor Doom','Villain','Unkown','https://cdn.mos.cms.futurecdn.net/WVUzuRAGpUQRcZ9i8qg8XM-1200-80.jpg.webp',1),(9,'Kitty Pryde','Hero','Unkown','https://cdn.mos.cms.futurecdn.net/m8DFpY5ici9j9VzADg79To-1200-80.jpg.webp',1);
/*!40000 ALTER TABLE `heroes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroes_has_powers`
--

DROP TABLE IF EXISTS `heroes_has_powers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroes_has_powers` (
  `heroes_id` int NOT NULL,
  `powers_id` int NOT NULL,
  PRIMARY KEY (`heroes_id`,`powers_id`),
  KEY `fk_heroes_has_powers_powers1_idx` (`powers_id`),
  KEY `fk_heroes_has_powers_heroes_idx` (`heroes_id`),
  CONSTRAINT `fk_heroes_has_powers_heroes` FOREIGN KEY (`heroes_id`) REFERENCES `heroes` (`id`),
  CONSTRAINT `fk_heroes_has_powers_powers1` FOREIGN KEY (`powers_id`) REFERENCES `powers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes_has_powers`
--

LOCK TABLES `heroes_has_powers` WRITE;
/*!40000 ALTER TABLE `heroes_has_powers` DISABLE KEYS */;
/*!40000 ALTER TABLE `heroes_has_powers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `powers`
--

DROP TABLE IF EXISTS `powers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `powers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `powers`
--

LOCK TABLES `powers` WRITE;
/*!40000 ALTER TABLE `powers` DISABLE KEYS */;
INSERT INTO `powers` VALUES (1,'Telekinesis'),(2,'Under Water Control'),(3,'Super Strength'),(4,'Super Speed'),(5,'Healing'),(6,'Shapeshifting'),(7,'Invisibility'),(8,'Flight');
/*!40000 ALTER TABLE `powers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `vehicle_type` enum('Aerial','Ground','Aquatic') NOT NULL,
  `heroes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vehicles_heroes1_idx` (`heroes_id`),
  CONSTRAINT `fk_vehicles_heroes1` FOREIGN KEY (`heroes_id`) REFERENCES `heroes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-13 16:57:46
