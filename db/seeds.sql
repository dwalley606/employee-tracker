INSERT INTO department (name)
VALUES  ('Sales'), 
        ('Engineering'), 
        ('Finance'), 
        ('Legal'), 
        ('HR');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Associate', 50000, 1),
        ('Sales Manager', 75000, 1),
        ('Engineer', 80000, 2),
        ('Senior Engineer', 120000, 2),
        ('CFO', 150000, 3),
        ('COO', 180000, 3),
        ('Legal Team Lead', 100000, 4),
        ('Lawyer', 90000, 4),
        ('HR Manager', 75000, 5),
        ('HR Associate', 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('John', 'Doe', 1, NULL),
        ('Jane', 'Doe', 2, 1),
        ('Bob', 'Smith', 3, 2),
        ('Alice', 'Johnson', 4, 2),
        ('Chris', 'Brown', 5, 3),
        ('Mike', 'Jones', 6, 3),
        ('Jim', 'Davis', 7, 4),
        ('Jill', 'Miller', 8, 4),
        ('Bill', 'Wilson', 9, 5),
        ('Sue', 'Davis', 10, 5);


