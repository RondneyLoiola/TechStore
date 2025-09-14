import Pc1 from '../../assets/Computador/macbook.png'
import Pc3 from '../../assets/Computador/notbok.png'
import Pc2 from '../../assets/Computador/pc.png'
import Header from '../../Components/Header'
import { Box, Container, Content, Product } from "./styles";

function Computador(){
    const produtos = [
        {
            img: Pc1,
            nome: 'MacBook Pro M3',
            desc: '16GB RAM, SSD 512GB, tela Retina 14"',
            preco: 'R$ 12.999,00'
        },

        {
            img: Pc2,
            nome: 'PC Gamer RTX 4060',
            desc: 'Intel i5, 16GB RAM, RTX 4060, SSD 1TB',
            preco: 'R$ 4.599,00'
        },

        {
            img: Pc3,
            nome: 'Notebook Dell Inspiron',
            desc: 'Intel i7, 8GB RAM, SSD 256GB, tela 15.6"',
            preco: 'R$ 2.799,00'
        }
    ]

    return(
        <>
            <Header/>
            <Container>
                <Content>
                    <h1>Computadores</h1>
                    <p className='p-content'>PCs e notebooks para todas as necessidades, do trabalho aos games mais exigentes</p>
                    <Box>
                        {
                            produtos.map((item, _index) => (
                                <Product key={item.nome}>
                                    <img src={item.img} alt={item.nome} />
                                    <h2>{item.nome}</h2>
                                    <p>{item.desc}</p>
                                    <p>{item.preco}</p>
                                    <button type='button'>Adicionar ao carrinho</button>
                                </Product>
                            )) 
                        }
                    </Box>
                </Content>
            </Container>
        </>
    )
}

export default Computador