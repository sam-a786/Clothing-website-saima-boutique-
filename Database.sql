DROP DATABASE IF EXISTS SB_DB;
CREATE DATABASE SB_DB;
USE SB_DB;

-- Table for Clothing
CREATE TABLE clothing (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  size VARCHAR(50),
  description TEXT,
  image_url VARCHAR(255)
);

-- Adding example information into clothing table
INSERT INTO clothing (name, size, description, image_url) VALUES
    ('T-Shirt', 'Medium', 'Comfortable cotton T-shirt', 'https://example.com/tshirt.jpg'),
    ('Jeans', '32x34', 'Classic blue jeans', 'https://example.com/jeans.jpg');

-- Table for Jewelry
CREATE TABLE jewelry (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255)
);

-- Adding example information into jewelry table
INSERT INTO jewelry (name, description, image_url) VALUES
    ('Silver Necklace', 'Elegant silver necklace with a pendant', 'https://example.com/silver_necklace.jpg'),
    ('Diamond Ring', 'Sparkling diamond ring for special occasions', 'https://example.com/diamond_ring.jpg');


