const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const button = document.getElementById("toggle");

button.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  content.classList.toggle("collapsed");
});
