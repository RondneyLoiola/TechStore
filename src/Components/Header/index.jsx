import Cart from "../Carrinho"
import { Container, Content, Nav } from "./styles"

function Header(){
    return(
        <Container>
            <Content>
                <Nav>
                    <a href="/">Ínicio</a>
                    <a href="/celulares">Celulares</a>
                    <a href="/relogios">Relógios</a>
                    <a href="/computadores">Computadores</a>
                </Nav>
                <Cart/>
            </Content>
        </Container>
    )
}

export default Header