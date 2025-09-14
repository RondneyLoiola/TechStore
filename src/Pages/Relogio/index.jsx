import { useState } from 'react'
import R1 from '../../assets/Relogio/classic.png'
import R5 from '../../assets/Relogio/esport.png'
import R2 from '../../assets/Relogio/fitness.png'
import R6 from '../../assets/Relogio/kid.png'
import R4 from '../../assets/Relogio/luxury.png'
import R3 from '../../assets/Relogio/smart pro.png'
import Barra from '../../Components/Barra'
import BtnBarra from '../../Components/BarraBtn'

import Header from '../../Components/Header'
import { Box, Container, Content, Product } from "./styles";

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
        },

        {
            img: R4,
            nome: 'Luxury Watch Edition',
            desc: 'Pulseira de couro genuíno, à prova d\'água 50m',
            preco: 'R$ 4.299,00'
        },

        {
            img: R5,
            nome: 'SmartWatch Esportivo',
            desc: 'Resistente a impactos, 20 modos esportivos',
            preco: 'R$ 699,00'
        },

        {
            img: R6,
            nome: 'Relógio Inteligente Kids',
            desc: 'GPS infantil, chamadas, à prova d\'água',
            preco: 'R$ 399,00'
        }
    ]

    const [show, setShow] = useState(false)
            
    const toggleBtn = () => {
        setShow(!show)
    }

    const removeBar = () => {
        setShow(false)
    }

    return(
        <>
            <Header/>
            {show && <Barra/>}
            <BtnBarra onClick={toggleBtn} $show={show}/>
            <Container $show={show} onClick={removeBar}>
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