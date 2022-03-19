import { useParams } from "react-router-dom"

export const AboutItem = () => {

    const params = useParams();

    return (
        <div>
            <h2>Página de {params.slug?.toUpperCase()} ({params.slug?.length})</h2>
            
        </div>
    )
}