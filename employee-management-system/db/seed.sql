-- Seed Data for the `department` Table
INSERT INTO department (name)
VALUES 
('Engineering'),
('Finance'),
('Human Resources'),
('Sales');

-- Seed Data for the `role` Table
INSERT INTO role (title, salary, department_id)
VALUES 
('Software Engineer', 80000, 1),
('Accountant', 70000, 2),
('HR Manager', 65000, 3),
('Sales Representative', 50000, 4);

-- Seed Data for the `employee` Table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, NULL),
('Charlie', 'Brown', 3, NULL),
('David', 'Davis', 4, 1);