import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {

    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate('/sobre');
    }

    return (
        <div>
            <h2>Página de {params.slug?.toUpperCase()} ({params.slug?.length})</h2>
            <button onClick={handleBackButton}>Voltar</button>
            
        </div>
    )
}