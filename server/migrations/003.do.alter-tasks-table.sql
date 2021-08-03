CREATE TYPE completed AS ENUM (
   'Y',
   'N'
);

ALTER TABLE Tasks
    ADD COLUMN
        completed completed;