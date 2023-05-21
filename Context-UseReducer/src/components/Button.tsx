import styled from "styled-components"

const ButtonComponent = styled.button`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-primary);
    color: var(--color-light);
    border: 2px solid var(--color-secundary);
    font-weight: bold;

    :hover{
        transition: 0.3s ease;
        background-color: var(--color-secundary);
    }
`

interface Props{
    name : string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}




function Button({name, onClick}: Props){
    return (
        <ButtonComponent onClick = {onClick}>{name}</ButtonComponent>
    )
}

export default Button;
