import React from 'react';
import './Style.css';
import Resumo from './pages/Resumo';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import { DataContextProvider } from './Context/DataContext';
import Vendas from './pages/Vendas';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Venda from './pages/Venda';
function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resumo />}/>
              <Route path='/vendas' element={<Vendas />}/>
              <Route path='/vendas/:id' element={<Venda />}/>
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
