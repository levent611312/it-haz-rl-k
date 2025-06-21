function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggleBtn = document.querySelector(".menu-toggle");
  nav.classList.toggle("active");

  // Buton aria-expanded değerini güncelle
  const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
  toggleBtn.setAttribute("aria-expanded", !expanded);
}
