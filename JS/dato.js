// Denne funktion viser dags dato i dansk format
function setTodaysDate() {
  const today = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" }; // Format: dd/mm/yyyy
  const formattedDate = today.toLocaleDateString("da-DK", options);
  document.getElementById("current-date").textContent = formattedDate;
}

// Kør funktionen, når siden er indlæst
window.onload = setTodaysDate;
