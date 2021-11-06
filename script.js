$(document).ready(onReady);

let employees = [];


function onReady() {
    // collect data from input fields via submit button
    renderEmployees(employees);
    renderTotalMonthlyExpenses(employees);
    // empty input fields
    // store input data in variables
    // create array of employee objects
    // direct data to calculation functions
    //append calc functions data to DOM
    // add red background to totalMonthlyCost if > $20k
    $('#submit-button').on('click', handleSubmitClick);
    $('.delete-button').on('click', handleDeleteClick);
} // end onReady

function handleSubmitClick() {

    let newEmployee = {
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        idNumber: $('#id-input').val(),
        jobTitle: $('#job-title-input').val(),
        annualSalary: $('#annual-salary-input').val()
    };

    employees.push(newEmployee);
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#job-title-input').val('');
    $('#annual-salary-input').val('');
    renderEmployees(employees);
    renderTotalMonthlyExpenses(employees);
} // end handleSubmitClick

function handleDeleteClick() {
    console.log('in delete');
    
    $('#employee-table-body')
    .last()
    .remove()
}

function renderEmployees(employees) {
    $('#employee-table-body').empty();

    for (let employee of employees) {
        let newTableRow = `
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="delete-button">Delete</button></td>
        <tr>
        `;

        $('#employee-table-body').append(newTableRow);
    } // end newTableRow
} // end renderEmployees

function renderTotalMonthlyExpenses(employees) {
    $('#monthly-total').empty();

    let monthlyTotal = 0;

    for (let employee of employees) {
        let monthlyCost = employee.annualSalary/12

        monthlyTotal += monthlyCost;
    }
    $('#monthly-total').append('Total Monthly $', monthlyTotal.toFixed());
}
