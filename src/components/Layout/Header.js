import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>Fragment Meals</h1>
				<HeaderCartButton />
			</header>
		</React.Fragment>
	);
};

export default Header;
