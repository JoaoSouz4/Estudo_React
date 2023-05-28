import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    height: 15rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 0.5rem;

    ::-webkit-scrollbar{
        border-radius: 20px;
        color: transparent
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient( 45deg, rgb(108, 23, 182), rgb(89, 22, 256));
        border-radius: 1rem;       
}
`   
