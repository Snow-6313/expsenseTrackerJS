//Exspense Tracker

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