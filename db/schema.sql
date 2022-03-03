DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) UNIQUE NOT NULL,
    department_name VARCHAR(30),
    salary DECIMAL NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_name) REFERENCES departments(department_name) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_name VARCHAR(40),
    job_title VARCHAR(40) NOT NULL,
    manager_id INTEGER REFERENCES employees(id),
    CONSTRAINT fk_role FOREIGN KEY (role_name) REFERENCES roles(name) ON DELETE CASCADE 
);