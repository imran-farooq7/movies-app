import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Link to="/">
					<Navbar.Brand style={{ fontWeight: "bold" }}>MDB</Navbar.Brand>
				</Link>
			</Container>
		</Navbar>
	);
};

export default NavBar;
