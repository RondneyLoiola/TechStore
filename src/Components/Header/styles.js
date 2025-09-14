import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--gray);
    width: 1000px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Nav = styled.nav`
    a {
        margin: 0 1rem;
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
        transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);

        &:hover {
            color: var(--blue);
            border-bottom: 0.1rem solid var(--blue);
            padding-bottom: 0.5rem;
        }

    }
`;
