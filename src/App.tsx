import React from "react"
import './Style.css'
import Resumo from "./pages/Resumo"
import Sidenav from "./components/Sidenav"
import Header from "./components/Header"
function App() {
  return (
    <div>
      <Sidenav/>
      <main>
      <Header/>
      <Resumo/>
      </main>
    </div>
  )
}

export default App
