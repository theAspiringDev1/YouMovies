import styled from "styled-components";
import Container from "components/shared/Container";
import { blink } from "assets/animations";
import respondTo from "util/respondTo";

export const FeaturedLoader = styled(Container)`
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    box-sizing:border-box;
    animation: ${blink} var(--loader-speed);
    padding-top: 20vh;
    ${respondTo.md`
        align-items: center;
    `}
`;

export const FeaturedBottom = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    align-items: end;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    gap: 2rem;

    ${respondTo.md`
        grid-template-columns: 1fr;
        grid-template-rows: unset;
        place-items:center;
        align-content:center;
    `}

    & > * div:not(:first-child) {
        background: var(--main-mid);
        border-radius: 1rem;
    }
`;

export const SampleTitle = styled.h3`
    width: 200px;
    height: 30px;
    background: var(--main-mid);
    border-radius: 1rem;
    animation: ${blink} var(--loader-speed);

    ${respondTo.md`
        width:320px;
      `}
`;

export const SampleTags = styled.div`
    height: 30px;
    width: 60%;
    ${respondTo.md`
        width:300px;
      `}
`;

export const SampleDesc = styled.div`
    height: 150px;
    width: 80%;
    ${respondTo.md`
        width:100%;
        height:200px;
      `}
`;

export const SampleButton = styled.div`
    height: 50px;
    width: 150px;
    border-radius: 100px;
`;

export const SamplePoster = styled.div`
    width: 190px;
    height: 250px;
    background: var(--main-mid);
    position: relative;
    bottom: 150px;
    order: -1;
    ${respondTo.md`
      bottom:0;
    `}
`;

export const Content = styled.div`
    display: grid;
    gap: 1rem;
    position: relative;
    bottom: 80px;
    ${respondTo.md`
        width:100%;
        justify-items:center;
        bottom:0;
    `}
`;
