$(document).ready(onReady);

let employees = [];


function onReady() {
    // collect data from input fields via submit button
    renderEmployees(employees);
    // empty input fields
    // store input data in variables
    // create array of employee objects
    // direct data to calculation functions
    //append calc functions data to DOM
    // add red background to totalMonthlyCost if > $20k
    $('#submit-button').on('click', handleSubmitClick);
} // end onReady

function renderEmployees() {
    $('#employee-table-body').empty();

    for (let employee of employees) {
        let newTableRow = `
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
        <tr>
        `;

        $('#employee-table-body').append(newTableRow);
    } // end newTableRow
} // end renderEmployees

function handleSubmitClick() {
    let newFirstName = $('#first-name-input').val();
    
    let newEmployee = {
        name: newFirstName,
    };

    employees.push(newEmployee);
    $('#first-name-input').val('');
    renderEmployees(employees);
}