import './App.css'
import { GameBoard, Header } from './components'

function App() {
  return (
    <div className="appShell">
      <Header
        title="Lilla Språk"
        subtitle="Lek dig fram till bokstäver, siffror och första ord."
      />
      <main className="appMain">
        <GameBoard />
      </main>
    </div>
  )
}

export default App
