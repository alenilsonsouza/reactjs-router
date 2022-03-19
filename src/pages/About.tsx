import { Link } from 'react-router-dom';
export const About = () => {
    return (
        <div>
            <h2>Sobre</h2>
            <ul>
                <li><Link to="/sobre/joao">João</Link></li>
                <li><Link to="/sobre/paulo">Paulo</Link></li>
                <li><Link to="/sobre/sueli">Sueli</Link></li>
                <li><Link to="/sobre/alenilson">Alenilson</Link></li>
            </ul>
        </div>
    )
}