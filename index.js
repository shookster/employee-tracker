const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: ""
    database: "employeesDB"
});

connection.connect(function (err) {
    if (err) throw err;
    startUp();
});

function startUp() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Select an option from the following list:",
            choices: [
                "View Employees",
                "View Employees by Department",
                "Add Employee",
                "Remove Employees",
                "Update Employee Role",
                "Add Role",
                "End"
            ]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View Employees":
                    viewEmployee();
                    break;
                case "View Employees by Department":
                    viewEmmployeeByDepartment();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employees":
                    removeEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "End":
                    connection.end();
                    break;
            }
        });
}

function viewEmployee() {
    console.log("displaying employees\n");

    let query =
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employee e
        LEFT JOIN role r
        ON e.role_id = r.id
        LEFT JOIN department d
        ON d.id = r.department_id
        LEFT JOIN employee m
        ON m.id = e.manager_id`
        
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("There they are!\n");
        
        startUp();
    });
}

function viewEmployeeByDepartment() {
    console.log("Displaying employees by department\n");

    var query =
        `SELECT d.id, d.name, r.salary AS budget
        FROM employee e
        LEFT JOIN role r
        ON e.role_id = r.id
        LEFT JOIN department d
        ON d.id = r.department_id
        GROUP BY d.id, d.name`

    connection.query(query, function (err, res) {
        if (err) throw err;

        const departmentChoices = res.map(data => ({
            value: data.id, name: data.name
        }));

        console.table(res);
        console.log("Displaying department!\n");
        
        promptDepartment(departmentChoices);
    });
}