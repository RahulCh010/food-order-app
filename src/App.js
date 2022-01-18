import "./App.css";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartVisible, setCartVisible] = useState(false);

	const showCartHandler = () => {
		setCartVisible(true);
	};

	const hideCartHandler = () => {
		setCartVisible(false);
	};

	return (
		<CartProvider>
			{cartVisible && <Cart onCloseCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Banner />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
