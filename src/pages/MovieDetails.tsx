import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiMovie, BiTime } from "react-icons/bi";
import { BsCalendarDate, BsHeart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useLoading from "../hooks/useLoading";
import fetchMovies from "../utils/api";
import MoviesList from "../components/MoviesList";

const MovieDetails = () => {
	const [movie, setMovie] = useState<any>("");
	const { loading, setLoading } = useLoading();
	const [favourite, setFavourite] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		if (localStorage.getItem("favorites")) {
			const favouritesList = JSON.parse(localStorage.getItem("favorites"));
			setFavourite(favouritesList);
		}
		setLoading(true);
		fetchMovies(`/movie/${id}`).then((res) => {
			setLoading(false);
			setMovie(res);
		});
	}, []);
	console.log(favourite);

	const addtoFavourtie = () => {
		const newFavouriteMovie = movie;
		const isInFavourite = favourite.some((f) => f.id === newFavouriteMovie.id);
		if (isInFavourite) {
			alert("movie already in favorites");
		} else {
			setFavourite((prev) => [...prev, newFavouriteMovie]);
			localStorage.setItem(
				"favorites",
				JSON.stringify([...favourite, newFavouriteMovie])
			);
		}
	};
	// if (movie) {
	// 	console.log(movie.genres);
	// }
	// console.log(favourite.map((fav) => fav.id));

	return (
		<div className="details">
			{loading ? (
				<Loading />
			) : (
				<Row>
					<Col xs={12} md={3}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt="movie"
							className="details-thumb"
						/>
					</Col>
					<Col xs={12} md={9}>
						<h2>{movie.original_title}</h2>
						<div className="details-info mb-5 d-flex">
							<IconContext.Provider value={{ size: "1.5rem" }}>
								<span className="d-flex align-items-center gap-2">
									<BiTime /> <span className="">{movie.runtime} mins</span>
								</span>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: "1.5rem" }}>
								<span className="d-flex align-items-center gap-2">
									<BsCalendarDate />
									<span className="">{movie.release_date}</span>
								</span>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: "1.5rem" }}>
								<span className="d-flex align-items-center gap-2">
									<BiMovie />
									<span className="">
										{(movie &&
											movie.genres.length > 0 &&
											movie.genres[0].name) ||
											"no genre"}
									</span>
								</span>
							</IconContext.Provider>
						</div>
						<p>{movie.overview}</p>
						<Button className="p-2" variant="primary" onClick={addtoFavourtie}>
							<BsHeart />
							<span className="ms-1">Add to favourite</span>
						</Button>
					</Col>
					{/* <Button variant="primary" onClick={addtoFavourtie}>
						Add to favourite
					</Button> */}
				</Row>
			)}

			{favourite.length > 0 && (
				<>
					<h1>Favourties</h1>
					<MoviesList results={favourite} />
				</>
			)}
		</div>
	);
};
export default MovieDetails;
