--Aca vamos a crear todas las tablas con CREATE TABLE

CREATE DATABASE IF NOT EXISTS 'entrelineas'
USE 'entrelineas'

-- Table structure for table 'authors'
DROP TABLE IF EXISTS 'authors'
CREATE TABLE 'authors'(
    id INT UNSIGNED  NOT NULL AUTO INCREMENT,
    fullName VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
    );
--
-- Dumping data for table 'authors'
--
--
-- Table structure for table 'genres'
DROP TABLE IF EXISTS 'genres'
CREATE TABLE 'genres'(
    id INT UNSIGNED  NOT NULL AUTO INCREMENT,
    name VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
    );
--
-- Dumping data for table 'genres'
--
-- Table strucure for table 'products Types'
DROP TABLE IF EXISTS 'genres'
CREATE TABLE 'productTypes'(
    id INT UNSIGNED  NOT NULL AUTO INCREMENT,
    title VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
    );
--
-- Dumping data for table 'products Types'
--
-- Table strucure for table 'products Types'
DROP TABLE IF EXISTS 'editorials'
CREATE TABLE 'editorials'(
    id INT UNSIGNED  NOT NULL AUTO INCREMENT,
    title VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
    );
--
-- Dumping data for table 'products Types'
--
-- Table structure for table 'products'
DROP TABLE IF EXISTS 'products'
CREATE TABLE 'products'(
    id INT UNSIGNED  NOT NULL AUTO INCREMENT,
    name VARCHAR(50) NOT NULL,
    price DECIMAL (5,2) UNSIGNED,
    size VARCHAR(29),
    pages SMALLINT UNSIGNED,
    opinion VARCHAR(500),
    more TEXT,
    picture VARCHAR(200),
    stock SMALLINT UNSIGNED,
    id_author INT UNSIGNED NOT NULL,
    id_genre INT UNSIGNED NOT NULL,
    id_productType INT UNSIGNED NOT NULL
    id_editorial INT UNSIGNED 
    PRIMARY KEY (id),
    FOREIGN KEY (id_author) REFERENCES authors(id),
    FOREIGN KEY (id_genre) REFERENCES genres(id),
    FOREIGN KEY (id_productType) REFERENCES productTypes(id),
    FOREIGN KEY (id_editorial) REFERENCES editorials(id)
    );

--
-- Dumping data for table 'products'
--