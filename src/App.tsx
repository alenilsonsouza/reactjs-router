import { Nav } from './components/Nav';
import  './App.css';
import { MainRoutes } from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Brincando com Rotas (Routers)</h1>
          <span>by Alenilson Souza</span>
        </div>
      </header>
      <Nav />
      <section className="content">
        <div className="container">
          <MainRoutes />
        </div>
      </section>
      <footer>
        <div className="container">
          Praticando em aula...
        </div>
      </footer>
    </div>
  )
}

export default App;