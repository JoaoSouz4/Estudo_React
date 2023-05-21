import styled from "styled-components";

const Button = styled.button`
    background-color: #b20dd7;
    color: white;
    border: 3px solid #a022bd;
    outline: none;
    padding: 1rem;
    border-radius: 0.3rem;
    width: ${(props) => {
        return props.width
    }};
    &:hover{
        color: #b20dd7;
        background-color: white;
        box-shadow: 1px 1px 3px #b20dd7;
        transition: 0.3s ease;
        cursor: pointer
    }
`
export default Button;