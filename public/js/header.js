// header.js
export function initHeader() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) {
    console.error("Menu toggle or nav links not found");
    return;
  }

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
