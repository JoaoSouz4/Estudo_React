import styled from 'styled-components';

export const Item = styled.li`
    position: relative;
    list-style: none;
    text-decoration: none;
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
    background-color: rgba(2, 0, 3, 0.28);
    border-radius: 0.4rem;
`

export const CheckBox = styled.input`
    &:hover{
        cursor: pointer;
    }
`

export const Delete = styled.button`
    position: absolute;
    right: 0;   
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    color: rgb(108, 23, 182);
    font-weight: bolder;
    border: 1px solid rgb(108, 23, 182);
    border-radius: 0.4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    &:hover{
        cursor: pointer;
    }
`

export const Task = styled.h5`
    color: #fafafa;
    font-size: 1.1rem;

    width: 80%;
    overflow: hidden;
`