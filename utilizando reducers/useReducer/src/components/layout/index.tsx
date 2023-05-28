import { Container, Wrapper } from "./styles"

function Layout({children}: any){
    return(
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}
export default Layout;