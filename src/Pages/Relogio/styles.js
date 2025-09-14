import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 70%;
    height: 780px;
    background-color: var(--gray);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    justify-content: center;
    position: relative;
    backdrop-filter: blur(10px);

    h1 {
        color: #fff;
        position: absolute;
        align-self: center;
        top: 15px;
        font-size: 3rem;
    }

    .p-content {
        color: #fff;
        position: absolute;
        align-self: center;
        top: 90px;
        font-size: 1.5rem;
    }

    img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.5);;
        object-fit: cover;
    }

    h2 {
        color: #fff;
        font-size: 1rem;
        span {
            color: var(--blue);
        }
    }

    button {
        width: 100%;
        background: transparent;
        text-decoration: none;
        border: 1px solid var(--gray);
        color: white;
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
    }
`;
export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
    padding-top: 35px;

    p {
       width: 100%;
    }
`;

export const Product = styled.div`
    background: var(--blue);
    color: #fff;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    .buttonitem {
        width: 100%;
        background: transparent;
        text-decoration: none;
        border: 1px solid var(--gray);
        color: white;
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        border: 2px solid rgba(102, 126, 234, 0.3);
    }
`;
