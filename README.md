# Praticando Rotas em ReactJs

Praticando durando o curso B7Web.
Feito por [Alenilson Souza](https://alenilsonsouza.com.br).

- Apresentação modelo: <https://reactroutes.alenilsonsouza.com.br/>

### Para instalar
- `npm install`

### Para rodar
- `npm start`


## 00 - Criando o projeto com Typescript
```
npx create-react-app react_dom --template typescript
```

## 01 - Instalação da Biblioteca React Router Dom
```
npm install react-router-dom
```

### Importando o BrowerRouter no index

É importante envolver todo o **App** no **BrowserRouter** para as rotas funcionarem em toda a aplicação.

```javascript
import { BrowserRouter } from 'react-router-dom'
```

No index envolver o componente `<App />` dentro do BrowserRouter. Ex.:

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```
## 02 - Criando rotas
No ``App.tsx`` importar os recursos pra montar as regras das rotas:

```javascript
import { Routes, Route } from 'react-router-dom';
```
Importar as páginas:
```javascript
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
```
Dentro do componente onde será exibido o conteúdo das páginas criar as regras:
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/sobre' element={<About />} />
  <Route path="/servicos" element={<Services />} />
  <Route path="/contato" element={<Contact />} />
</Routes>
```
## 03 - Criando grupos de rotas

```javascript
<Route path="/sobre" element={<About />} />
<Route path="/sobre/fulano" element={<AboutFulano />} />
<Route path="/sobre/ciclano" element={<AboutCiclano />} />
```
## 04 - Rota de 404 (Página não encontrada)
Caso digite ou procure uma rota inexistente podemos criar uma rota coringa no final das demais rotas direcionando para uma página com a informação 'Página não encontrada':
```javascript
<Route path="*" element={<NotFound />} />
```
## 05 - Links
Primeiro precisamos importar o recurso `Link` do React Router Dom:
```javascript
import { Link } from 'react-router-dom';
```
Colocando os links:
```javascript
<ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/sobre">Sobre</Link></li>
    <li><Link to="/servicos">Serviços</Link></li>
    <li><Link to="/contato">Contato</Link></li>
</ul>
```
Usando o recurso `Link` veremos que ao acessar será carregado o conteúdo da página sem atualizar a página.
## 06 - Rotas com valores dinâmicos (useParams)
Para acrescentar uma rota dinânimca é preciso adiciona um ou mais parâmetros precedido com o sinal de (:) dois-pontos.
```javascript
<Route path="/sobre/:slug" element={<AboutItem />} />
```
O parâmetro `:slug` é dinânimo e pode receber qualquer valor.

### Receber os valores dos parâmetros enviados pela rota

No `AboutItem` vamos importar um Hoock quer recebe todos os parâmetros enviados pela rota:
```javascript
import { useParams } from "react-router-dom"
```

Exemplo de uso do Hoock `useParams`:
```javascript
export const AboutItem = () => {

    const params = useParams();

    return (
        <div>
            <h2>Página de {params.slug}</h2>
        </div>
    )
}
```
Sugestões de uso:
```javascript
<h2>Página de {params.slug?.toUpperCase()} ({params.slug?.length})</h2>
```
## 07 - Redirecionamento de rotas (useNavigate)
Para esse recurso usamos o Hook `useNavigate` importado do react-router-dom. Vamos fazer isso no `<AboutItem />`:
```javascript
import { useParams, useNavigate } from "react-router-dom"
```
Exemplo de uso:
```javascript
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
```

Exemplo de uso com navigate.
- Votando no histórico:
```javascript
navigate(-1)
```
Podemos voltar 1 ou mais históricos colocando o número desejado.
- Redirecionando para uma rota:
```javascript
navigate('/sobre')
```
## 08 - Parâmetro de query (useSearchParams)
O `useSearchParams` capturas as query strings da URL. Dentro do `<About />` vamos fazer um exemplo de uso importando esse hook:
```javascript
import { Link, useSearchParams } from 'react-router-dom';
```

Exemplo de uso para capturar as query string:
```javascript
export const About = () => {

    const [searchParams, setSearchParam] = useSearchParams();

    return (
        <div>
            Filtro: {searchParams.get('filter')}<br />
            Ordem: {searchParams.get('order')}
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
```

Exemplo de usa para setar query string na URL:
```javascript
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
```
## 09 - Rota Privada
Nesse caso criamos um componente para gerenciar se está logado ou não. Criamos um componente `RequireAuth.tsx`.
```javascript
import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element;
}

export const RequieAuth = ({ children }:Props) => {
    const isAuth = true;

    if(!isAuth) {
        return <Navigate to="/login" />
    }

    return children;
}
```
Na rota que desejamos que seja privada colocamos como filho dessa.
```javascript
<Route path='/sobre' element={<RequieAuth><About /></RequieAuth>} />
```
## 10 - Rotas em componente
Separar bem o projeto em partes facilita na manutenção no futuro. Por isso é importante deixar as rotas separada em um componente somente para elas.
```javascript
import { Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';
import { RequieAuth } from '../RequireAuth';

export const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sobre' element={<RequieAuth><About /></RequieAuth>} />
        <Route path="/sobre/:slug" element={<AboutItem />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}
```
Onde for usar as rotas é só importar
```javascript
import { MainRoutes } from './routes/MainRoutes';
```
```javascript
<MainRoutes />
```
## 11 -Rotas em objeto (useRoutes)
Outra forma de organizar as rotas é em objetos usando o hook `useRoutes`
```javascript
import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';
import { RequieAuth } from '../RequireAuth';

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/sobre", element: <RequieAuth><About /></RequieAuth> },
        { path: "/sobre/:slug", element: <AboutItem />  },
        { path: "/servicos", element: <Services /> },
        { path: "/contato", element: <Contact /> },
        { path: "*", element: <NotFound /> }
    ]);
}
```



