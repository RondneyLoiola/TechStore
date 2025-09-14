import Iphone from '../../assets/Celulares/iphone-max.png'
import s4 from '../../assets/Celulares/s24.png'
import xiaomi from '../../assets/Celulares/xiaomi.png'
import Header from '../../Components/Header'
import { Box, Container, Content, Product } from "./styles";

function Celular(){
    const produtos = [
        {
            img: Iphone,
            nome: 'iPhone Pro Max',
            desc: '128GB, câmera tripla, chip A17 Pro',
            preco: 'R$ 6.999,00'
        },

        {
            img: s4,
            nome: 'Samsung Galaxy S24',
            desc: '256GB, tela AMOLED, câmera 200MP',
            preco: 'R$ 4.299,00'
        },

        {
            img: xiaomi,
            nome: 'Xiaomi Mi 13',
            desc: '128GB, carregamento rápido 67W',
            preco: 'R$ 1.899,00'
        }
    ]

    return(
        <>
            <Header/>
            <Container>
                <Content>
                    <h1>Celulares</h1>
                    <p className='p-content'>Os melhores celulares com tecnologia de ponta e preços competitivos</p>
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

export default Celular