// import logo from './logo.svg';
import './App.css'
import { Navigation } from './components/navigation/Navigation'
import { Centerblock } from './components/centerblock/Centerblock'
import { Sidebar } from './components/sidebar/Sidebar'
import { Player } from './components/player/Player'

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        <main class="main">
          <Navigation />
          <Centerblock />
          <Sidebar />
        </main>
        <Player />
        <footer class="footer"></footer>
      </div>
    </div>
  )
}

export default App
