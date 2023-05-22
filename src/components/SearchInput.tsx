import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
// import { RootState } from "../store/store";
import { getMovies } from "../store/moviesSlice";
import fetchMovies from "../utils/api";
type Props = {
	setLoading: (value: boolean) => void;
};

const SearchInput = ({ setLoading }: Props) => {
	const dispatch = useDispatch();
	// const url = useSelector((state: RootState) => state.movies.url);
	const [searchInput, setSearchInput] = useState("");
	const handleInputChange = (e: any) => {
		setSearchInput(e.target.value);
	};
	const searchMovieHandler = (e: any) => {
		e.preventDefault();
		if (e.key === "Enter" && searchInput.length > 0) {
			setLoading(true);
			fetchMovies("/search/movie?", {
				query: searchInput,
			}).then((res) => {
				setLoading(false);
				dispatch(getMovies(res));
			});
		}
	};
	return (
		<Form
			onSubmit={searchMovieHandler}
			className="d-flex justify-content-center my-5"
		>
			<Form.Control
				type="text"
				value={searchInput}
				onChange={(e) => handleInputChange(e)}
				onKeyUp={(e) => searchMovieHandler(e)}
				className="w-50"
				style={{ borderRadius: "20px" }}
				placeholder="Search movie"
			/>
			{/* <Button type="submit">Search</Button> */}
		</Form>
	);
};
export default SearchInput;
