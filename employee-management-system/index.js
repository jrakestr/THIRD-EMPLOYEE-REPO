// index.js (Complete CRUD with Error Handling)
import inquirer from 'inquirer';
import db from './db/db.js'; 
import { 
    getDepartments, 
    getRoles, 
    getEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole 
} from './lib/queries.js';

// Main CLI Function with All Options from README
const startApp = async () => {
    console.log("\n📊 Welcome to the Employee Management System!");

    try {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    'Exit'
                ]
            }
        ]);

        switch (action) {
            // ✅ View All Departments
            case 'View All Departments':
                console.table(await getDepartments());
                break;

            // ✅ View All Roles
            case 'View All Roles':
                console.table(await getRoles());
                break;

            // ✅ View All Employees
            case 'View All Employees':
                console.table(await getEmployees());
                break;

            // ✅ Add a Department
            case 'Add Department':
                const { departmentName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentName',
                        message: 'Enter the name of the new department:',
                        validate: input => input ? true : 'Department name cannot be empty!'
                    }
                ]);
                await addDepartment(departmentName);
                break;

            // ✅ Add a Role
            case 'Add Role':
                const departments = await getDepartments();
                const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roleTitle',
                        message: 'Enter the role title:',
                        validate: input => input ? true : 'Role title cannot be empty!'
                    },
                    {
                        type: 'input',
                        name: 'roleSalary',
                        message: 'Enter the role salary:',
                        validate: input => !isNaN(input) && input ? true : 'Salary must be a number!'
                    },
                    {
                        type: 'list',
                        name: 'departmentId',
                        message: 'Select a department:',
                        choices: departments.map(dept => ({
                            name: dept.name,
                            value: dept.id
                        }))
                    }
                ]);
                await addRole(roleTitle, roleSalary, departmentId);
                break;

            // ✅ Add an Employee
            case 'Add Employee':
                const roles = await getRoles();
                const employees = await getEmployees();
                const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: 'Enter the employee\'s first name:',
                        validate: input => input ? true : 'First name cannot be empty!'
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: 'Enter the employee\'s last name:',
                        validate: input => input ? true : 'Last name cannot be empty!'
                    },
                    {
                        type: 'list',
                        name: 'roleId',
                        message: 'Select the employee\'s role:',
                        choices: roles.map(role => ({
                            name: role.title,
                            value: role.id
                        }))
                    },
                    {
                        type: 'list',
                        name: 'managerId',
                        message: 'Select the employee\'s manager (if any):',
                        choices: [
                            { name: 'None', value: null },
                            ...employees.map(emp => ({
                                name: `${emp.first_name} ${emp.last_name}`,
                                value: emp.id
                            }))
                        ]
                    }
                ]);
                await addEmployee(firstName, lastName, roleId, managerId);
                break;

            // ✅ Update an Employee Role
            case 'Update Employee Role':
                const employeeList = await getEmployees();
                const roleList = await getRoles();
                const { employeeId, newRoleId } = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'employeeId',
                        message: 'Select the employee to update:',
                        choices: employeeList.map(emp => ({
                            name: `${emp.first_name} ${emp.last_name}`,
                            value: emp.id
                        }))
                    },
                    {
                        type: 'list',
                        name: 'newRoleId',
                        message: 'Select the new role:',
                        choices: roleList.map(role => ({
                            name: role.title,
                            value: role.id
                        }))
                    }
                ]);
                await updateEmployeeRole(employeeId, newRoleId);
                break;

            // ✅ Exit
            case 'Exit':
                console.log('👋 Goodbye!');
                db.end();
                process.exit();
        }

        // Loop back to the main menu
        startApp();

    } catch (error) {
        console.error('❌ An error occurred:', error.message);
        startApp();
    }
};

startApp();