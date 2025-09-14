import Header from '../../Components/Header'
import { Box, Container, Content, Product } from "./styles";
import R1 from '../../assets/Relogio/classic.png'
import R2 from '../../assets/Relogio/fitness.png'
import R3 from '../../assets/Relogio/smart pro.png'

function Relogio(){
    const produtos = [
        {
            img: R1,
            nome: 'SmartWatch Pro',
            desc: 'Monitor cardíaco, GPS, resistente à água',
            preco: 'R$ 899,00'
        },

        {
            img: R2,
            nome: 'Watch Fitness',
            desc: 'Ideal para exercícios, bateria de 7 dias',
            preco: 'R$ 459,00'
        },

        {
            img: R3,
            nome: 'Relógio Clássico Smart',
            desc: 'Design elegante com tecnologia moderna',
            preco: 'R$ 299,00'
        }
    ]

    return(
        <>
            <Header/>
            <Container>
                <Content>
                    <h1>Relógios Inteligentes</h1>
                    <p className='p-content'>Descubra nossa coleção de smartwatches com as mais avançadas funcionalidades</p>
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

export default Relogio