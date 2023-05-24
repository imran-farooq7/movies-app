import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviePaginate from "../components/MoviePaginate";
import SearchInput from "../components/SearchInput";
import useLoading from "../hooks/useLoading";
import { RootState } from "../store/store";

const Home = () => {
	const { loading, setLoading } = useLoading();

	const { results } = useSelector((state: RootState) => state.movies.url);
	// console.log(results);

	return (
		<div className="mx-auto w-100 ">
			<h1 className="text-center">Welcome To MDB</h1>

			<SearchInput setLoading={setLoading} loading={loading} />
			{loading ? <Loading /> : <MoviePaginate movies={results} />}
		</div>
	);
};
export default Home;
