const MenuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const BurguerMenu = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");
const CarritoIcon = document.querySelector(".navbar-shopping-cart");
const CarroShopp = document.querySelector(".product-detail");

/*despliegue del menu de Desktop*/
MenuEmail.addEventListener("click", toggleDesktopMenu);
/*despliegue del menu en mobile*/
BurguerMenu.addEventListener("click", toggleMobileMenu);
/*despliegue carro de compras */
CarritoIcon.addEventListener("click", toggleCarShop);

function toggleDesktopMenu() {
	const isCarroShoppClosed = CarroShopp.classList.contains("inactive");

	if (!isCarroShoppClosed) {
		CarroShopp.classList.add("inactive");
	}
	DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
	const isCarroShoppClosed = CarroShopp.classList.contains("inactive");

	if (!isCarroShoppClosed) {
		CarroShopp.classList.add("inactive");
	}

	MobileMenu.classList.toggle("inactive");
}

function toggleCarShop() {
	const isMobileMenuClosed = MobileMenu.classList.contains("inactive");
	const isDesktopMenuClosed = DesktopMenu.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		MobileMenu.classList.add("inactive");
	}
	if (!isDesktopMenuClosed) {
		DesktopMenu.classList.add("inactive");
	}

	CarroShopp.classList.toggle("inactive");
}
