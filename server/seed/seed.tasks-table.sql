TRUNCATE Tasks RESTART IDENTITY CASCADE;

INSERT INTO Tasks (task_title, task_description, due_date, completed, user_id) VALUES 
('Finish Homework', 'Finish Calculus Homework quickly & head to Elie''s house for group project after', '2021-08-02 19:10:00', 'Y', 'demo'),
('Do Chores', 'Clean dust off all furniture and fold clothes this weekend', '2021-08-07 20:10:00', 'N', 'demo'),
('Finish TODO List', 'Make sure code is clean and reusable', '2021-08-06 13:00:00', 'N', 'foobar')