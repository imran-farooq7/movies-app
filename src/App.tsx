import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home.js";
import MovieDetails from "./pages/MovieDetails.js";

const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<MovieDetails />} />
				</Route>
			</Routes>
		</>
	);
};
export default App;
