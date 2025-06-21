function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");

  const expanded = nav.classList.contains("active");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", expanded);
}
