CREATE TABLE Tasks (
    task_id SERIAL PRIMARY KEY,
    task_title varchar(60) NOT NULL,
    task_description varchar(255) DEFAULT NULL,
    due_date TIMESTAMP DEFAULT NULL,
    user_id varchar(30) REFERENCES Users(user_id) ON DELETE CASCADE NOT NULL,
    enter_date TIMESTAMP DEFAULT now() NOT NULL
);