import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

import { Nav } from './components/Nav';

import  './App.css';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path="/sobre/:slug" element={<AboutItem />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
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