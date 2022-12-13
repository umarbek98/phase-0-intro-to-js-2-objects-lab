// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAdress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value,) {
    employee[key] = value;
    return employee;
}

const updatedEmployeeDestructively = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway");
updatedEmployeeDestructively;

function deleteFromEmployeeByKey(employee, key) {
    const deleteFromEmployee = {...employee};
    delete deleteFromEmployee[key];
    return deleteFromEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

