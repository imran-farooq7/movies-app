import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

type Props = {
	results: any[];
};
const MoviesList = (props: Props) => {
	const { results } = props;
	if (results?.length === 0) {
		return <h1>Movie is not found</h1>;
	}

	return (
		<Row className="gy-4">
			{results?.map((movie: any) => {
				return (
					<Col key={movie.id} xs={12} md={6} lg={4}>
						<MovieCard
							title={movie.original_title}
							popularity={movie.popularity}
							image={movie.poster_path}
							movie={movie.id}
						/>
					</Col>
				);
			})}
		</Row>
	);
};
export default MoviesList;
