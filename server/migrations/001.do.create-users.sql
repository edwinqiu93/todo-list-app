CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    Username varchar(30) NOT NULL UNIQUE,
    Password varchar(150) NOT NULL,
    EnterDate TIMESTAMP DEFAULT now() NOT NULL
);