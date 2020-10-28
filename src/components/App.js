
import css from './App.module.css'
import Header from './Header.js'
import Home from './Home.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className={css.container}>
      <Header/>
      <main>
        hsf
        <Home/>
      </main>
      <Navbar/>
    </div>
  );
}

export default App;