import './App.css'
import { GameBoard, Header } from './components'

function App() {
  return (
    <div className="appShell">
      <Header
        title="Lilla språk"
        subtitle="Lek med bokstäver, fidel, siffror och djur på svenska och tigrinja."
      />
      <main className="appMain">
        <GameBoard />
      </main>
    </div>
  )
}

export default App
