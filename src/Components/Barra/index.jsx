
import { Container, Content, Nav } from "./styles"

function Barra(){
    return(
        <Container className="cont">
            <Content>
                <Nav>
                    <a href="/">Ínicio</a>
                    <a href="/celulares">Celulares</a>
                    <a href="/relogios">Relógios</a>
                    <a href="/computadores">Computadores</a>
                </Nav>
            </Content> 
        </Container>
    
    )    
}


export default Barra