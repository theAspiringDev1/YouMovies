import useSWR from "swr";
import axios from "axios";

export default function usePopularTV(page = 1) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}
                `
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/popular/tv/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
