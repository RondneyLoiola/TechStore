import styled from "styled-components";

export const Container = styled.div`
    border-radius: 20px;
    background-color: var(--blue);
    width: 70px;
    height: 50px;
    display: flex;
    position: absolute;
    right: 50px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    .cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px;
        gap: 15px;
    }

    i{
        font-size: 1.3rem;
        color: #fff;
        position: relative;
        top: 2px;
    }

    &:hover {
        i {
            color: var(--blue);
        }

        background-color: #fff;
    }
`