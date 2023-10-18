
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Recipe from "./Recipe";
import Home from "./Home";

function App() {
	// const [visible, setVisible] = useState(false);
	// function handleVisible() {
	// 	setVisible(!visible);
	// }

	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
