INSERT INTO departments (department_name)
VALUES ("Technology"),
       ("Finance"),
       ("Customer Service");

INSERT INTO roles (name, department_name, salary)
VALUES ("Development", "Technology" , 80000.00),
       ("UI/UX", "Technology", 70000.00 ),
       ("Analysis", "Technology", 75000.00),
       ("Sales Development", 'Finance', 65000.00),
       ("Accounting", "Finance", 63000.00),
       ("Customer Representative", "Customer Service", 45000.00),
       ("Customer Engineer", "Customer Service", 55000.00);

INSERT INTO employees (id, first_name, last_name, job_title, role_NAME, manager_id)
VALUES (1, "Alex", "J", "Senior FS Developer", "Development", null),
       (2, "Person", "Two", "Software Developer", "UI/UX", 1),
       (3, "Person", "Three", "Data Analyst", "Analysis", 1),
       (4, "Person", "Four", "Senior Sales Consultant", "Sales Development", null),
       (5, "Person", "Five", "Account Representative", "Accounting", 4),
       (6, "Person", "Six", "Senior Customer Experience Rep", "Customer Representative", null),
       (7, "Person", "Seven", "Customer Experience Representative", "Customer Representative", 6),
       (8, "Person", "Eight", "Customer Experience Enngineer", "Customer Engineer", 6);