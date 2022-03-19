import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <div className="container">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}