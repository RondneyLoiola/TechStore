import { useState } from 'react'
import Celular from '../../assets/home/celular.png'
import Notebook from '../../assets/home/laptop.png'
import Relogio from '../../assets/home/relogio.png'
import Barra from '../../Components/Barra'
import BtnBarra from '../../Components/BarraBtn'
import Header from '../../Components/Header'
import { Box, Container, Content, Product } from "./styles"

function Home(){

    const produtos = [
        {
            img: Celular,
            link: '/celulares',
            nome: 'Celulares',
            desc: 'Celulares de última geração com tecnologia avançada'
        },

        {
            img: Relogio,
            link: '/relogios',
            nome: 'Relógios',
            desc: 'Os mais modernos smartwatches do mercado'
        },

        {
            img: Notebook,
            link: '/computadores',
            nome: 'Computadores',
            desc: 'Computadores e notebooks para trabalho e games'
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
                    <h1>Bem vindos à <span>TechStore</span></h1>
                    <Box>
                        {
                            produtos.map((item, _index) => (
                                <Product key={item.nome}>
                                    <img src={item.img} alt={item.nome} />
                                    <h2>{item.nome}</h2>
                                    <p>{item.desc}</p>
                                    <a href={item.link} className='buttonitem'>Ver {item.nome}</a>
                                </Product>
                            )) 
                        }
                    </Box>
                </Content>
        </Container>
        </>
    )
}

export default Home