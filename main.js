const MenuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
/*despliegue del menu de Desktop*/
MenuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
	DesktopMenu.classList.toggle("inactive");
}
