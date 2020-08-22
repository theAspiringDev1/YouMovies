import useSWR from "swr";
import axios from "axios";

export default function useMovieData(id) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/movie/${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
