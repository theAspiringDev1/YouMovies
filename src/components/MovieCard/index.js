import React from "react";
import { Link } from "react-router-dom";

import PosterPlaceholder from "../shared/PhotoPlaceholder";
import { Poster, Card, Date, Rating, StarIcon, Title, Content } from "./styles";
import getIcon from "../../util/getIcon";

export default function MovieCard({ movie, type, mediaType }) {
    const cardDate = (date) => (date ? String(date).slice(0, 4) : "unknown");

    return (
        <Link to={`/${mediaType || movie.media_type || type}/${movie.id}`}>
            <Card>
                {movie.poster_path ? (
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.name || movie.original_title}
                    />
                ) : (
                    <PosterPlaceholder>
                        {movie.original_title || movie.name}
                    </PosterPlaceholder>
                )}
                <Content className="content">
                    <Title> {movie.original_title || movie.name}</Title>
                    <Date>
                        {cardDate(movie.release_date || movie.first_air_date)}
                    </Date>
                    <Rating>
                        <StarIcon>
                            <use href={getIcon("star-full")}></use>
                        </StarIcon>
                        {String(movie.vote_average).length === 1
                            ? movie.vote_average + ".0"
                            : movie.vote_average}
                    </Rating>
                </Content>
            </Card>
        </Link>
    );
}
