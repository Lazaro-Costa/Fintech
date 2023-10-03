import React from "react"
import './Style.css'
import Resumo from "./pages/Resumo"
import Sidenav from "./components/Sidenav"
import Header from "./components/Header"
import { DataContextProvider } from "./Context/DataContext"
import Vendas from "./pages/Vendas"
function App() {
  return (
    <DataContextProvider>
    <div className="container">
      <Sidenav/>
      <main>
      <Header/>
      <Resumo/>
      <Vendas/>
      </main>
    </div>
    </DataContextProvider>
  )
}

export default App
