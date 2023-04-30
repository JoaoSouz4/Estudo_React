import styled from "styled-components";

export const HeaderMenu = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--color-secundary);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.8rem;

    a{
        color: white;
        text-transform: uppercase;
        font-weight: bolder;
        text-decoration: none;
    }
`

export const UlMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    list-style: none;
`

export const Li = styled.li`
     
        color: white;
        text-decoration: none;
        list-style: none;
        &:hover {
            cursor: pointer;
        }
`