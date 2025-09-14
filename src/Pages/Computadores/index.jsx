import { useState } from 'react'
import Pc6 from '../../assets/Computador/4090.png'
import Pc4 from '../../assets/Computador/asus1.png'
import Pc5 from '../../assets/Computador/lenovo.png'
import Pc1 from '../../assets/Computador/macbook.png'
import Pc3 from '../../assets/Computador/notbok.png'
import Pc2 from '../../assets/Computador/pc.png'
import Barra from '../../Components/Barra'
import BtnBarra from '../../Components/BarraBtn'

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
        },

        {
            img: Pc4,
            nome: 'ASUS ROG Strix G15',
            desc: 'AMD Ryzen 7, 16GB RAM, RTX 3050, SSD 512GB',
            preco: 'R$ 5.299,00'
        },

        {
            img:Pc5,
            nome: 'Lenovo ThinkPad X1',
            desc: 'Intel i5, 16GB RAM, SSD 512GB, tela 14" IPS',
            preco: 'R$ 3.899,00'
        },

        {
            img: Pc6,
            nome: 'PC GAMER RTX 4090',
            desc: 'Intel i9, 32GB RAM, SSD 2TB, RTX 4090',
            preco: 'R$ 19.499,00'
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