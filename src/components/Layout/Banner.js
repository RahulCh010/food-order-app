import React from "react";

import bannerImg from "../../assets/meals.jpeg";
import classes from "./Banner.module.css";

function Banner() {
	return (
		<div className={classes["main-image"]}>
			<img src={bannerImg} alt="Table full of food!" />
		</div>
	);
}

export default Banner;
