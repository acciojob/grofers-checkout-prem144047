const prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(priceCell => {
      total += parseFloat(priceCell.textContent) || 0;
    });

    // Create a new row for the total
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // span across both columns
    totalCell.textContent = `Total Price: ₹${total}`;

    totalRow.appendChild(totalCell);

    // Append the total row to the table
    document.getElementById("groceryTable").appendChild(totalRow);