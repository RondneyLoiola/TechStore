import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    height: 100vh;
    display: block;
    background-color: var(--gray);
    position: fixed;
    z-index: 99;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 1000px) {
        display: block;
    }
`;

export const Content = styled.div`
    display: none;
    flex-direction: column;

    @media (max-width: 1000px){
        display: flex;
    }
`;
export const Nav = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    a {
        margin-top: 5px;
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
        padding: 10px;
        width: 100%;
        
        &:hover {
            background-color: var(--blue);
        }
    }
`;
