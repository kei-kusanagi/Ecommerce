/*eslint no-unused-vars: "warn"*/

// This is the scss entry file
import "../styles/index.css";

// We can import other JS file as we like
import "../components/sidebar";

export function toggleTheme() {
  let isDarkMode = JSON.parse(localStorage.getItem("isDarkmode")) ?? false;
  localStorage.setItem("isDarkmode", !isDarkMode);
  console.log("Toggling theme... 👋");
  switchTheme();
}

export function switchTheme() {
  console.log("Switching theme... 👋");
  const switchToggle = document.querySelector("#switch-toggle");
  const body = document.querySelector("body");
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`;
      
  let isDarkMode = JSON.parse(localStorage.getItem("isDarkmode")) ?? false;
  if (isDarkMode) {
      body.classList.add("dark");
      switchToggle.classList.remove("bg-yellow-500", "-translate-x-2");
      switchToggle.classList.add("bg-gray-700", "translate-x-full");
      setTimeout(() => {
          switchToggle.innerHTML = darkIcon;
      }, 250);
  } else {
      body.classList.remove("dark");
      switchToggle.classList.add("bg-yellow-500", "-translate-x-2");
      switchToggle.classList.remove("bg-gray-700", "translate-x-full");

      setTimeout(() => {
          switchToggle.innerHTML = lightIcon;
      }, 250);
  }
}

export function initialSetup() {
  // Business logic to trigger dark mode.
  const body = document.querySelector("body");
  const localDarkmode = JSON.parse(localStorage.getItem("isDarkmode")) ?? false;

  // Salva localDarkMode en localStorage
  if (localDarkmode) {
      body.classList.add("dark");
  } else {
      body.classList.remove("dark");
  }
  console.log("Finished setup... 👋");
  switchTheme();
}