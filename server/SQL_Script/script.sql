USE property;

DROP TABLE IF EXISTS users
CREATE TABLE users(
    user_id varchar(50) PRIMARY KEY NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    passwords VARCHAR(200) NOT NULL,
    is_manager BIT, 
)

INSERT INTO users (user_id, user_name, passwords, is_manager)
VALUES ('u001' , 'test_user', 'password', 0), ('m001', 'test_manager', 'password', 1);


DROP TABLE IF EXISTS property_o;
CREATE TABLE property_o (
    property_ID VARCHAR(100) PRIMARY KEY NOT NULL,
    strees varchar(200)  NOT NULL,
    city VARCHAR(200)  NOT NULL,
    country varchar(200) NOT NULL,
    date_build DATE NOT NULL,
    current_owner varchar(200),
    price VARCHAR(200)
) 

INSERT INTO property_o (property_ID, strees, city, country, date_build, current_owner, price)
VALUES ('1', 'test stree', 'test city', 'NZ', '1999-1-1', 'test_user', '1'),
       ('3', 'noo stree', 'O city', 'NZ','2034-9-12', 'user1', '2');

SELECT * FROM property_o WHERE property_ID = '1'; 

DROP TABLE IF EXISTS property_temp;
CREATE TABLE property_temp(
    property_ID VARCHAR(100)  NOT NULL,
    strees varchar(200)  NOT NULL,
    city VARCHAR(200)  NOT NULL,
    country varchar(200) NOT NULL,
    date_build DATE NOT NULL,
    current_owner varchar(200),
    price VARCHAR(200),
    PRIMARY KEY (property_ID),
    FOREIGN KEY (property_ID) REFERENCES property_o(property_ID)
)

INSERT INTO property_temp (property_ID, strees, city, country, date_build, current_owner, price)
VALUES ('1', '123 test stree', 'test city', 'NZ', '1999-1-1', 'test_user', '1')


-- update table A by table B
UPDATE property_o
SET
    property_o.strees = property_temp.strees,
    property_o.city = property_temp.city,
    property_o.country = property_temp.country,
    property_o.date_build = property_temp.date_build,
    property_o.current_owner = property_temp.current_owner,
    property_o.price = property_temp.price
FROM property_temp
WHERE property_o.property_ID = property_temp.property_ID;