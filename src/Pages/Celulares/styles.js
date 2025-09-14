import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: ${props => props.$show ? 'brightness(20%)' : 'none'};

    @media (max-width: 947px){
        padding: 0px;
    }

    @media (max-width: 768px){
        padding: 0px;
    }

    @media (width: 430px){
        padding: 5px;
    }
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
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.5);

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
        top: 80px;
        font-size: 1.5rem;
    }

    h2 {
        color: #fff;
        font-size: 1rem;
        span {
            color: var(--blue);
        }
    }

    img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
        background-color: rgba(255, 255, 255, 0.5);
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

    @media (max-width: 947px){
        width: 95%;
    }

    @media (max-width: 768px){
        .p-content{
            font-size: 1.3rem;
            text-align: center;
            
        }
    }

    @media (width: 430px){
        height: 100vh;
    }
`;
export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 105px;
    height: auto;
    overflow: auto;
    padding-right: 12px;

    &::-webkit-scrollbar {
        width: 12px; 
        height: 12px; 
    }

    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--blue);
        border-radius: 10px;
    }

    p {
       width: 100%;
    }

    @media (max-width: 1528px){
        margin-top: 140px;
        
    }

    @media (max-width: 947px){
        margin-top: 160px;
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
    }

    @media (width: 526px){
        margin-left: auto;
        margin-right: auto;
    }

    @media (width: 481px) {
        margin-left: auto;
        margin-right: auto;
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

        &:hover {
            transform: scale(1.02);
        }
    }
`;
