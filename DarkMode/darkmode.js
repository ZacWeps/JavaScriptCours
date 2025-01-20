const toggleButton = document.getElementById("toggle-dark-mode");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
  toggleButton.textContent =
    savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}

toggleButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    toggleButton.textContent = "Switch to Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    toggleButton.textContent = "Switch to Light Mode";
    localStorage.setItem("theme", "dark"); 
  }
});
