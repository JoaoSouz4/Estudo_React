import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    gap: ${(props: {gap : string}) => { return props.gap}};
    
`

export default Wrapper;