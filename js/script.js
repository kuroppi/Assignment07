// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form  = document.querySelector('form');
let table = document.querySelector('table');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId         = document.querySelector('#id').value;
    let employeeName       = document.querySelector('#name').value;
    let employeeExtension  = document.querySelector('#extension').value;
    let employeeEmail      = document.querySelector('#email').value;
    let employeeDepartment = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = table.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID         = newRow.insertCell(0);
    let cellName       = newRow.insertCell(1);
    let cellExtension  = newRow.insertCell(2);
    let cellMail       = newRow.insertCell(3);
    let cellDepartment = newRow.insertCell(4);
    let deleteCell     = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(employeeId));
    cellName.appendChild(document.createTextNode(employeeName));
    cellExtension.appendChild(document.createTextNode(employeeExtension));
    cellMail.appendChild(document.createTextNode(employeeEmail));
    cellDepartment.appendChild(document.createTextNode(employeeDepartment));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteCell.appendChild(deleteBtn);

    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    console.log(count);
    document.querySelector('#empCount').textContent = count.toString();
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {

            // GET THE SELECTED ROW INDEX
            let rowIndex = e.target.parentNode.parentNode.rowIndex;

            // DELETE THE SELECTED ROW
            table.deleteRow(rowIndex);

            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            count--;
            document.querySelector('#empCount').textContent = count.toString();

        }
    }
});
