import styled from "styled-components"

export const Input = styled.input`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-secundary);
    :focus{
        transition: 0.2s ease;
        outline: 1px solid var(--color-secundary);
    }
`

export const TextArea = styled.textarea`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-secundary);
     :focus{
        transition: 0.2s ease;
        outline: 1px solid var(--color-secundary);
    }
`

export const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`