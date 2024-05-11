const addEmployee = (employee) => {
    return db.query('INSERT INTO employees (first_name, last_name, role, manager) VALUES ($1, $2, $3, $4) RETURNING *', [employee.first_name, employee.last_name, employee.role, employee.manager]);
}

const addDepartment = (department) => {
    return db.query('INSERT INTO departments (name) VALUES ($1) RETURNING *', [department.name]);
}


const addRole = (role) => {
    return db.query('INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3) RETURNING *', [role.title, role.salary, role.department]);
}

const getAllEmployees = () => {
    return db.query('SELECT * FROM employees');
}

const getAllRoles = () => {
    return db.query('SELECT * FROM role');
}

const getAllDepartments = () => {
    return db.query('SELECT * FROM department');
}

module.exports = {
    addEmployee,
    addDepartment,
    addRole,
    getAllEmployees,
    getAllRoles,
    getAllDepartments
}


