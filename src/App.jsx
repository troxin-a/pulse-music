// import logo from './logo.svg';
import './App.css'
import { Navigation } from './components/Navigation.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Player } from './components/Player.jsx'
import { Centerblock } from './components/Centerblock.jsx'

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
