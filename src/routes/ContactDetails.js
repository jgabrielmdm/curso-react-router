import { useParams, useNavigate } from 'react-router-dom'

function ContactDetails (){
    const { id } = useParams();

    // 6 - redirect

    const navigate = useNavigate()

    const handleContact = () => {
        console.log("contato Enviado!")
        return navigate("/")
    }

    return(
        <div> 
            <h1>Exibindo Mais informações do Contato {id}</h1>
            <button onClick={handleContact}>Enviar Mensagem</button>
        </div>
        
    );
};

export default ContactDetails;