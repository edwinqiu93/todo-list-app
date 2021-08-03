CREATE TABLE Tasks (
    TaskId SERIAL PRIMARY KEY,
    TaskTitle varchar(60) NOT NULL,
    TaskDescription varchar(255) DEFAULT NULL,
    DueDate TIMESTAMP DEFAULT NULL,
    UserId varchar(30) REFERENCES Users(UserId) ON DELETE CASCADE NOT NULL,
    EnterDate TIMESTAMP DEFAULT now() NOT NULL
);