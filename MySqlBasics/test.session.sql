
-- this is a comment

-- @block

CREATE TABLE Users(

    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT, 
    country VARCHAR(2)
);


CREATE TABLE Users(

    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT, 
    country VARCHAR(2)
);
-- @block

INSERT INTO Users(email, bio, country)
VALUES(
    'connor@email.com',
    'I like pie!',
    'US'
);


-- @block

INSERT INTO Users (email, bio, country)
VALUES
    ('panda@email.com','I like cake!','US'),
    ('lion@email.com','I like berries!','UK'),
    ('bird@email.com','I like toast!','GA'),
    ('mammoth@email.com','I like cookies!','GR'),
    ('cheetah@email.com','I like cars!','IO'),
    ('dog@email.com','I like Bikes!','SE');

-- @block
select * from Users;
-- @block
SELECT * FROM Users ORDER BY id DESC;
-- @block
SELECT * FROM Users WHERE country = "US" OR id = 7;


-- @block
CREATE INDEX email_index ON Users(email);
-- @block

SELECT * FROM Users;

-- @block

CREATE TABLE Rooms(    -- now, it's impossible to delete users who have an associated room at the same time  
    id INT AUTO_INCREMENT,
    STREET varchar(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(owner_id) REFERENCES Users(id)
);


-- @block
-- basically, the user with the id of 1 (connor@email.com) 
--  owns those 4 properties 
INSERT INTO Rooms (owner_id,street)  
VALUES                               
    (1, '505 Hollywood Lavenue'),
    (1, '100 N University Street'),
    (1, '123 Sesame Street'),
    (1, '308 Negra Orroyo Lane');

-- @block
delete from Rooms;
-- @block
SELECT * FROM users
INNER JOIN rooms
ON Rooms.owner_id = Users.id;



-- @block
SELECT * FROM Users  -- includes all the users, even those who don't have a room
LEFT JOIN Rooms      -- a right join would return all the room that don't have an owner
ON Rooms.owner_id = Users.id;


-- @block
SELECT
     Users.id AS MaUserEyeDee,
     Rooms.id AS MahRoomEyedee,
    email,
    street
FROM Users
INNER JOIN Rooms ON Rooms.owner_id = Users.id;

-- @block
-- Using this table to answer how a user can book a room from another user
CREATE TABLE Bookings(
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (guest_id) REFERENCES Users(id),  -- a user can reserve one or many rooms
    FOREIGN KEY (room_id) REFERENCES Rooms(id)  -- a room can be booked by users
)

-- @block
drop table bookings;
-- @block
SELECT
    guest_id,
    street,
    check_in
FROM Bookings
INNER JOIN Rooms ON Rooms.owner_id = guest_id
WHERE guest_id = 1;      -- showing all the rooms a user has booked

-- @block
SELECT
    room_id,
    guest_id,
    email,
    bio
FROM Bookings
INNER JOIN Users ON Users.id = guest_id
WHERE room_id = 1;      -- showing all the rooms a user has booked

-- @block

-- @block

-- @block