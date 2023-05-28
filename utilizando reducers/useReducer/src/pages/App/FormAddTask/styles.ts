import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Input = styled.input`
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: transparent;
    border: 1px solid #fafafa;
    color: #fafafa;
    outline: none;
    width: 100%;

    &:focus{
        transition: 0.3s ease;
        outline: 1px solid #fafafa;
    }
`

export const Button = styled.button`
    background: rgb(108, 23, 182);
    border-radius: 0.4rem;
    border: 2px solid rgb(89, 22, 148);
    color: #fafafa;
    padding: 1rem;
    font-weight: bolder;

    &:hover{
        background-color: rgb(89, 22, 148);
        transition: 0.3s ease;
        cursor: pointer;
    }
`