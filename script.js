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
    $('body').on('click', '.delete-button', handleDeleteClick);
} // end onReady

function handleSubmitClick() {
    let newFirstName = $('#first-name-input').val();
    let newLastName = $('#last-name-input').val();
    let newIdNumber = $('#id-input').val();
    let newJobTitle = $('#job-title-input').val();
    let newAnnualSalary = $('#annual-salary-input').val();

    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        idNumber: newIdNumber,
        jobTitle: newJobTitle,
        annualSalary: newAnnualSalary
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
    
    $(document).on('click', 'button.delete-button', function () {
        $(this).closest('tr').remove();
    });
};

function renderEmployees(employees) {
    $('#employee-table-body').empty();

    for (let employee of employees) {
        let newTableRow = `
        <tr class="one-table-row">
            <td class="data">${employee.firstName}</td>
            <td class="data">${employee.lastName}</td>
            <td class="${employee.idNumber} data">${employee.idNumber}</td>
            <td class="data">${employee.jobTitle}</td>
            <td class="annual-salary">$${employee.annualSalary}</td>
            <td class="data"><button class="delete-button">Delete</button></td>
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
    
    $('#monthly-total').append('Total Monthly $', monthlyTotal.toLocaleString('en-US', {minimumFractionDigits: 2}));

    if (monthlyTotal>20000) {
        $('#monthly-total').addClass("red");
    }
}
