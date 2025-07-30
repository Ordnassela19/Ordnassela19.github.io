/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showTable() {
  const selected = document.getElementById("tableSelect").value;
  const tables = document.querySelectorAll(".data-table");

  tables.forEach(table => {
    table.style.display = (table.id === selected) ? "table" : "none";
  });
}