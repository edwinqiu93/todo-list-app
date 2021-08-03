CREATE TABLE Users (
    user_id varchar(30) NOT NULL PRIMARY KEY,
    password varchar(150) NOT NULL,
    enter_date TIMESTAMP DEFAULT now() NOT NULL
);