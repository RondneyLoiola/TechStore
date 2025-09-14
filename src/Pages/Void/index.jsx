import { useNavigate } from "react-router"
import { Alert, Button, Container, Title } from "./styles"


function Void(){
    const navigate = useNavigate()

    return (
        <Container>
                <Alert>
                    <Title>Página não encontrada!</Title>
                    <Button onClick={() => navigate('/')}>Voltar para o ínico</Button>
                </Alert>
        </Container>
    )
}

export default Void