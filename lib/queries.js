// Import the database connection from the db.js file
import db from '../db/db.js';

/** ============================
 * VIEW (READ) FUNCTIONS
 * These functions are used to retrieve data from the database.
 * ============================
 */

// Fetch all departments and return the results
export const getDepartments = async () => {
    try {
        // Fetch all records from the department table
        const { rows } = await db.query('SELECT * FROM department');
        return rows; // Return the result as an array of objects
    } catch (error) {
        console.error('❌ Error fetching departments:', error.message);
        return []; // Return an empty array if there's an error
    }
};

// Fetch all roles with department names
export const getRoles = async () => {
    try {
        // Fetch all roles and include the department name using a JOIN statement
        const { rows } = await db.query(`
            SELECT role.id, role.title, role.salary, department.name AS department 
            FROM role
            JOIN department ON role.department_id = department.id
        `);
        return rows; // Return the formatted list of roles
    } catch (error) {
        console.error('❌ Error fetching roles:', error.message);
        return [];
    }
};

// Fetch all employees with role, department, salary, and manager data
export const getEmployees = async () => {
    try {
        // Fetch employee details including their manager's name
        const { rows } = await db.query(`
            SELECT 
                e.id, 
                e.first_name, 
                e.last_name, 
                r.title, 
                d.name AS department, 
                r.salary, 
                CONCAT(m.first_name, ' ', m.last_name) AS manager
            FROM employee e
            JOIN role r ON e.role_id = r.id
            JOIN department d ON r.department_id = d.id
            LEFT JOIN employee m ON e.manager_id = m.id
        `);
        return rows;
    } catch (error) {
        console.error('❌ Error fetching employees:', error.message);
        return [];
    }
};

/** ============================
 * CREATE (INSERT) FUNCTIONS
 * These functions are used to add new records into the database.
 * ============================
 */

// Add a new department by inserting the provided department name
export const addDepartment = async (departmentName) => {
    try {
        // Insert the department into the table
        await db.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
        console.log(`✅ Department "${departmentName}" added successfully!`);
    } catch (error) {
        console.error('❌ Error adding department:', error.message);
    }
};

// Add a new role with title, salary, and department reference
export const addRole = async (title, salary, departmentId) => {
    try {
        // Insert the new role with dynamic data placeholders
        await db.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [title, salary, departmentId]
        );
        console.log(`✅ Role "${title}" added successfully!`);
    } catch (error) {
        console.error('❌ Error adding role:', error.message);
    }
};

// Add a new employee with optional manager reference
export const addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        // Insert the employee, allowing managerId to be optional using NULL if absent
        await db.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [firstName, lastName, roleId, managerId || null]
        );
        console.log(`✅ Employee "${firstName} ${lastName}" added successfully!`);
    } catch (error) {
        console.error('❌ Error adding employee:', error.message);
    }
};

/** ============================
 * UPDATE FUNCTION
 * Used to modify existing records in the database.
 * ============================
 */

// Update an employee's role by their employee ID
export const updateEmployeeRole = async (employeeId, newRoleId) => {
    try {
        // Update the role_id for the specified employee
        await db.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2',
            [newRoleId, employeeId]
        );
        console.log(`✅ Employee role updated successfully!`);
    } catch (error) {
        console.error('❌ Error updating employee role:', error.message);
    }
};

/** ============================
 * DELETE (BONUS FUNCTIONS)
 * Used to remove records from the database.
 * ============================
 */

// Delete a department by its ID
export const deleteDepartment = async (departmentId) => {
    try {
        // Delete the department using the ID provided
        await db.query('DELETE FROM department WHERE id = $1', [departmentId]);
        console.log(`✅ Department deleted successfully!`);
    } catch (error) {
        console.error('❌ Error deleting department:', error.message);
    }
};

// Delete a role by its ID
export const deleteRole = async (roleId) => {
    try {
        // Delete the role using the ID provided
        await db.query('DELETE FROM role WHERE id = $1', [roleId]);
        console.log(`✅ Role deleted successfully!`);
    } catch (error) {
        console.error('❌ Error deleting role:', error.message);
    }
};

// Delete an employee by their ID
export const deleteEmployee = async (employeeId) => {
    try {
        // Delete the employee using the ID provided
        await db.query('DELETE FROM employee WHERE id = $1', [employeeId]);
        console.log(`✅ Employee deleted successfully!`);
    } catch (error) {
        console.error('❌ Error deleting employee:', error.message);
    }
};