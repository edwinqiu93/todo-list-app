CREATE TABLE Users (
    UserId varchar(30) NOT NULL PRIMARY KEY,
    Password varchar(150) NOT NULL,
    EnterDate TIMESTAMP DEFAULT now() NOT NULL
);