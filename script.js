const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  // Step 1: Select all price elements
const priceElements = document.querySelectorAll('.price');

// Step 2: Initialize total price variable
let totalPrice = 0;

// Step 3: Loop through the price elements and sum the prices
priceElements.forEach(priceElement => {
    // Convert the text content to a number and add to totalPrice
    totalPrice += parseFloat(priceElement.textContent) || 0; // Handle NaN
});

// Step 4: Create a new row for the total price
const table = document.querySelector('table'); // Assuming there's only one table
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Set the text content of the cell to the total price
totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`; // Format to 2 decimal places

// Step 5: Append the total cell to the new row and the new row to the table
newRow.appendChild(totalCell);
table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

