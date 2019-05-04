const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const button = document.getElementById("toggle");
const tabs = document.getElementsByClassName("tabs");

button.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  content.classList.toggle("collapsed");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle("fade-out");
    tabs[i].classList.toggle("fade-in");
  }
});

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("mouseover", () => {
    tabs[i].style.backgroundColor = "var(--dark3)";
  });
  tabs[i].addEventListener("mouseout", () => {
    tabs[i].style.background = "none";
  });
}
