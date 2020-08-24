import React, { useState } from "react";

import Collection from "./Collection";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

export default function TrendingMoviesList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useUpcomingMovies(pageCount);

    if (isLoading) return "Upcoming Loading...";

    if (isError) return "Upcoming Data errror";

    return (
        <Collection
            movies={data.results}
            title="Upcoming Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='movie'
        />
    );
}
