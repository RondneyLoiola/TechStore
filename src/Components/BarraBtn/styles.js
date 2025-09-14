import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 999;
    right: 50px;
    top: 15px;
    display: none;

    @media (max-width: 1000px){
        display: block;
    }

    i {
        background-color: var(--gray);
        color: var(--blue);
        border-radius: 15px;
        font-size: 3rem;
    }
`