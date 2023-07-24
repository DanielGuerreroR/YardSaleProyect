const MenuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const BurguerMenu = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");
const CarritoIcon = document.querySelector(".navbar-shopping-cart");
const CarroShopp = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

/*despliegue del menu de Desktop*/
MenuEmail.addEventListener("click", toggleDesktopMenu);
/*despliegue del menu en mobile*/
BurguerMenu.addEventListener("click", toggleMobileMenu);
/*despliegue carro de compras*/
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

/*creacion de lista de productos dinamica*/
const productList = [];
productList.push({
	name: "bike",
	price: 120,
	image:
		"https://images.pexels.com/photos/2412368/pexels-photo-2412368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
	name: "Tv",
	price: 220,
	image:
		"https://images.pexels.com/photos/2412368/pexels-photo-2412368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
	name: "compu",
	price: 620,
	image:
		"https://images.pexels.com/photos/2412368/pexels-photo-2412368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
	for (product of arr) {
		/* Referencia de estructura en HTML:
	<div class="product-card">
	<img
		src="https://images.pexels.com/photos/2412368/pexels-photo-2412368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		alt=""
	/>
	contenedor general para organizar la parte baja de la card
	<div class="product-info">
		creamos dos contenedores, para texto y logo, de esta manera lo podemos
		organizar con flexbox
		<div>
			<p>$120,00</p>
			<p>Bike</p>
		</div>
		<figure>
			<img src="./assets/icons/bt_add_to_cart.svg" alt="" />
		</figure>
	</div>
</div>; */

		/*crear elementos*/
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const producImg = document.createElement("img");
		producImg.setAttribute("src", product.image);

		const productInfoContainer = document.createElement("div");
		productInfoContainer.classList.add("product-info");

		const productInfo = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = "$" + product.price;
		const productName = document.createElement("p");
		productName.innerText = product.name;

		productInfo.append(productPrice, productName);

		const productInfoFigure = document.createElement("figure");
		const productImgCart = document.createElement("img");
		productImgCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");

		productInfoFigure.appendChild(productImgCart);

		productInfoContainer.append(productInfo, productInfoFigure);

		productCard.append(producImg, productInfoContainer);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);
