import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviePaginate from "../components/MoviePaginate";
import SearchInput from "../components/SearchInput";
import Select from "../components/Select";
import useLoading from "../hooks/useLoading";
import { RootState } from "../store/store";

const Home = () => {
	const { results } = useSelector((state: RootState) => state.movies.url);
	const { loading, setLoading } = useLoading();
	const [year, setYear] = useState("");
	const [rating, setRating] = useState("");
	const years = [
		"Year",
		"2000",
		"2001",
		"2002",
		"2003",
		"2004",
		"2005",
		"2006",
		"2007",
		"2008",
		"2009",
		"2010",
		"2011",
		"2012",
		"2013",
		"2014",
		"2015",
		"2016",
		"2017",
		"2018",
		"2019",
		"2020",
		"2021",
		"2022",
		"2023",
	];
	const ratings = ["rating", "populatiry", "votes"];
	// const [filterMovies, setFilterMovies] = useState();
	let filterMovies = results;
	console.log(results);

	if (year) {
		filterMovies = results?.filter(
			(res) => year === "Year" || res.release_date.includes(year)
		);
	}
	if (rating === "votes") {
		filterMovies = results?.filter((res) => res.vote_count > 100);
	}
	if (rating === "populatiry") {
		filterMovies = results?.filter((res) => res.popularity > 50);
	}

	return (
		<div className="mx-auto w-100 ">
			<h1 className="text-center">Welcome To MDB</h1>
			<Select options={years} option={year} setOption={setYear} />
			<Select options={ratings} option={rating} setOption={setRating} />

			<SearchInput setLoading={setLoading} loading={loading} />
			{loading ? <Loading /> : <MoviePaginate movies={filterMovies} />}
		</div>
	);
};
export default Home;
