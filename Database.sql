CREATE DATABASE SB_DB;
USE SB_DB;

-- Table for Clothing
CREATE TABLE clothing (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  size VARCHAR(50),
  description TEXT,
  image VARCHAR(255)
);

-- Table for Jewelry
CREATE TABLE jewelry (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);
