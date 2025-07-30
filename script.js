/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




function showTable() {
  const selectedId = document.getElementById("tableSelect").value;
  const tables = document.querySelectorAll(".data-table");

  tables.forEach(table => {
    const isSelected = table.id === selectedId;
    table.style.display = isSelected ? "table" : "none";

    if (!isSelected) return;

    // Add row-number header if missing
    const headerRow = table.querySelector("tr");
    const alreadyHasNumberColumn = headerRow.firstElementChild.textContent === "#";
    if (!alreadyHasNumberColumn) {
      const th = document.createElement("th");
      th.textContent = "#";
      headerRow.insertBefore(th, headerRow.firstChild);
    }

    // Add or update row numbers in tbody
    const bodyRows = table.querySelectorAll("tr:not(:first-child)");
    bodyRows.forEach((row, index) => {
      // Remove old number column if it exists and was auto-added
      const firstCell = row.firstElementChild;
      if (firstCell && firstCell.classList.contains("row-number")) {
        row.removeChild(firstCell);
      }

      // Add new row number cell
      const td = document.createElement("td");
      td.textContent = index + 1;
      td.classList.add("row-number");
      row.insertBefore(td, row.firstChild);
    });
  });
}

// Show the default selected table on page load
window.onload = showTable;
