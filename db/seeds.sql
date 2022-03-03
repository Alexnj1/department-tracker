INSERT INTO department (name)
VALUES ("Technology"),
       ("Finance"),
       ("Customer Service");

INSERT INTO roles (title, department_id, salary)
VALUES ("Development", 1 , 80000.00),
       ("UI/UX", 1, 70000.00 ),
       ("Analysis", 1, 75000.00),
       ("Sales Development", 2, 65000.00),
       ("Accounting", 2, 63000.00),
       ("Customer Representative", 3, 45000.00),
       ("Customer Engineer", 3, 55000.00);

INSERT INTO employees (id, first_name, last_name, job_title, role_id, manager_id)
VALUES (1, "Alex", "J", "Senior FS Developer", 1, null),
       (2, "Person", "Two", "Software Developer", 2, 1),
       (3, "Person", "Three", "Data Analyst", 3, 1),
       (4, "Person", "Four", "Senior Sales Consultant", 4, null),
       (5, "Person", "Five", "Account Representative", 5, 4),
       (6, "Person", "Six", "Senior Customer Experience Rep", 6, null),
       (7, "Person", "Seven", "Customer Experience Representative", 6, 6),
       (8, "Person", "Eight", "Customer Experience Enngineer", 7, 6);