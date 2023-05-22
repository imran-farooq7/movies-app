import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";

const Layout = () => {
	return (
		<>
			<NavBar />
			<Container>
				<main className="d-flex flex-column align-items-center justify-content-center">
					<Outlet />
				</main>
			</Container>
		</>
	);
};
export default Layout;
