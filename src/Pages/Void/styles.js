import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: var(--gray);
`;

export const Alert = styled.div`
    background-color: var(--blue);
    width: 500px;
    height: 300px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
    color: #fff;
`;

export const Button = styled.button`
    background-color: var(--blue);
    border-radius: 15px;
    padding: 5px 8px;
    border: 2px solid gray;
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: 15px;
`