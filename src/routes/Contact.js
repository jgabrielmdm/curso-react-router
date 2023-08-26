import {Link} from "react-router-dom"

function Contact (){
    return(
        <div>
           <h1>
                Página de Contatos
            </h1> 
            {/* 5 - Nested Routes */}
            <p>
                <Link to="/contact/1"> Forma de Contato 1 </Link>
            </p>

            <p>
                <Link to="/contact/2"> Forma de Contato 2 </Link>
            </p>

            <p>
                <Link to="/contact/3"> Forma de Contato 3 </Link>
            </p>
        </div>
        
    );
};

export default Contact;