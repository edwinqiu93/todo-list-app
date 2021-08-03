CREATE TYPE Completed AS ENUM (
   'Y',
   'N'
);

ALTER TABLE Tasks
    ADD COLUMN
        Completed Completed;