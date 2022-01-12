import "./App.css";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Meals from "./components/Meals/Meals";

function App() {
	return (
		<div>
			<Header />
			<Banner />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
