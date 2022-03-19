# Praticando Rotas em ReactJs

Praticando durando o curso B7Web.
Feito por [Alenilson Souza](https://alenilsonsouza.com.br).

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
## 06 - Rotas com valores dinâmicos
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


