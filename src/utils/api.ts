import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_APP_TMDB;
const headers = {
	Authorization: `Bearer ${token}`,
	accept: "application/json",
};

const fetchMovies = async (url: string, params?: any) => {
	try {
		const { data } = await axios.get(`${baseUrl}${url}`, {
			headers,
			params,
		});
		// console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
export default fetchMovies;
