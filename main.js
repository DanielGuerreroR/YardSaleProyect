const MenuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const BurguerMenu = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");

/*despliegue del menu de Desktop*/
MenuEmail.addEventListener("click", toggleDesktopMenu);
/*despliegue del menu en mobile*/
BurguerMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
	DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
	MobileMenu.classList.toggle("inactive");
}
