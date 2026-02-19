//Exspense Tracker


//Prohect 
/*Expense Tracker Practice Assignment
In this practice assignment, you will build the JavaScript functionality for an Expense Tracker web page. You will be provided with a video and screenshots of the completed webpage.

Your task is to independently implement the JavaScript logic that makes the page interactive, using the skills you have learned in previous projects (arrays, objects, functions, loops, and DOM manipulation).
What You Must Build
You must build a fully functional Expense Tracker webpage from scratch.
While appearance matters, the primary focus of this assignment is JavaScript functionality. Your page must correctly handle and validate data, update the HTML dynamically, and match the behavior shown in the provided video and images.
You must write all required JavaScript functionality so that:
Expenses can be added, edited, displayed, and deleted
The HTML table/container updates dynamically based on data
The total amount updates correctly
Requirements
Expenses Array
You must use one main array to store all expenses. Each expense should be stored as an object with the following properties:
name
amount
category
You also must create at least four separate functions that handle the following responsibilities:
Add Expense Function (addExpense)
The function must:
Read values from the input fields (name, amount, category)
Create a new expense object
Add that object to the expenses array
Validate that all fields contain valid input
Clear input fields after adding
Call the function that updates the table
Update Expense Table Function (updateList)
The function must:
Display all expenses stored in the array inside the HTML table
Rebuild the table whenever the data changes
Loop through the expenses array
Dynamically generate table rows
Display expense name, amount, and category
Include Edit and Delete buttons for each row
Calculate and display the total amount
Edit Expense Function (editExpense)
The function must:
Modify an existing expense in the array
Identify which expense to edit using its index
Allow the user to update the name, amount, and/or category
Update the object in the array
Refresh the table after editing
Delete Expense Function (deleteExpense)
The function must:
Remove an expense from the array
Identify the expense using its index
Remove it from the array
Update the table immediately after deletion
Grading Criteria
You will be evaluated on:
Correct use of arrays and objects
Proper function structure and separation of functionality
Accurate table and total updates
Matching the behavior shown in the reference materials
Code clarity and organization */

//---------------------------------------------------------------------

// Start with an empty array
let expenses = [];

//add
function addExpense() {
    
    // Get input refrences
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const categoryInput = document.getElementById("category");

    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value); // 12 12.00 NaN
    const category = categoryInput.value;

    if (!name || isNaN(amount) || amount <= 0 || !category) {
        return;
    } // Thanks nysa

    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";

    updateList();
}

function editExpense(index) {
    const expense = expenses[index];
    if (!expense) return;


    //refrence inputs ss
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const categoryInput = document.getElementById("category");

    nameInput.value = expense.name;
    amountInput.value = expense.amount;
    categoryInput.value = expense.category;

    // Remove the expense from the array
    expenses.splice(index, 1);

    // Update the list
    updateList();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateList();
}

//update
function updateList() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        tableBody.innerHTML += "<tr>" +
            "<td>" + expenses[i].name + "</td>" +
            "<td>$" + expenses[i].amount + "</td>" +
            "<td>" + expenses[i].category + "</td>" +
            "<td><button onclick='editExpense(" + i + ")'>Edit</button> " +
            "<button onclick='deleteExpense(" + i + ")'>Delete</button></td>" +
            "</tr>";

        total = total + expenses[i].amount;
    }

    let totalEl = document.getElementById("total");
    if (totalEl) {
        totalEl.innerText = "Total: $" + total;
    }
}