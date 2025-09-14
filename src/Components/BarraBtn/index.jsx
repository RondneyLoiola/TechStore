import { Container } from "./styles"

function BtnBarra({ onClick, $show}) {
    
    return (
        <Container onClick={onClick} $show={$show}>
            {
                $show ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>
            }
            
        </Container>
    )
}

export default BtnBarra