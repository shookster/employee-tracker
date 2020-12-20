USE employeesDB;

INSERT INTO department (name)
VALUES ("Field Team Leaders");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Facilities Maintenance");

INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", 45000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Manager", 30000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("District Manager", 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Specialist", 55000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Associate", 45000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Preventative Maintenance Technician", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luke", "Skywalker", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Obi Wan", "Kenobi", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ben", "Solo", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harry", "Potter", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hermione", "Granger", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ron", "Weasley", 6, null);