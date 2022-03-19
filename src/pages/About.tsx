import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {

    const [searchParams, setSearchParam] = useSearchParams();

    const order = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParam(searchParams);
    }

    return (
        <div>
            Filtro: {searchParams.get('filter')}<br />
            Ordem: {searchParams.get('order')}
            <hr />
            <button onClick={() => order('asc')}>Asc</button>
            <button onClick={()=>order('desc')}>Desc</button>
            <hr />
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