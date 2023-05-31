import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Poster from "../assets/no-poster.png";

type Props = {
	image: string;
	title: string;
	popularity: number;
	movie: string;
};
const MovieCard = (props: Props) => {
	return (
		<Card>
			<Link to={`movie/${props.movie}`}>
				<Card.Img
					variant="top"
					src={
						props.image
							? `https://image.tmdb.org/t/p/original${props.image}`
							: Poster
					}
				/>
			</Link>
			<Card.Body className="text-center bg-primary">
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					<Badge bg="info">{props.popularity}</Badge>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default MovieCard;
