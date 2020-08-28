import React from "react";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import useDetails from "../../../../hooks/useDetails";
import SeasonCard from "./SeasonCard";
import { Wrapper, Title } from "./styles";

SwiperCore.use([Scrollbar]);

const BREAKPOINTS = {
    600: {
        slidesPerView: 2,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
    },
};

export default function Seasons({ id }) {
    const { data, isLoading, hasError } = useDetails(id, "tv");

    if (isLoading) return "Loading Cards";

    if (hasError) return "Loading Error";

    const seasons = data.seasons;

    return (
        <Wrapper>
            <Title>Seasons</Title>
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore="10"
                slidesOffsetAfter="10"
                grabCursor="true"
                breakpoints={BREAKPOINTS}
            >
                {seasons.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SeasonCard details={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
}
