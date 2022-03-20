import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {
    // - Opção 01 - variáveis com todos os parâmentros
    //const params = useParams();
    
    // - Opção 02 - Objeto com os parâmetros
    const { slug } = useParams();

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate('/sobre');
    }

    return (
        <div>
            { /* Opção 01 */ }
            { /* <h2>Página de {params.slug?.toUpperCase()} ({params.slug?.length})</h2> */ }

            { /* Opção 02 */ }
            <h2>Página de {slug?.toUpperCase()} ({slug?.length})</h2>

            <button onClick={handleBackButton}>Voltar</button>
        </div>
    )
}