import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
	image: string;
	title: string;
	popularity: number;
	movie: string;
};
const MovieCard = (props: Props) => {
	return (
		<Card className="h-100">
			<Link to={`movie/${props.movie}`}>
				<Card.Img
					variant="top"
					src={`https://image.tmdb.org/t/p/original${props.image}`}
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
