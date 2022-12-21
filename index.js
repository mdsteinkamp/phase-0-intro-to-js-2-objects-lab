const employee = {
    name: "Employee 1", 
    streetAddress: "123 Fake Street",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const updatedEmployee = {...object};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(object, key) {
    const updatedEmployee = {...object};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}