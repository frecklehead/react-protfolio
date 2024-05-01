
import styles from'./App.module.css'
import { Navbar } from './components/navbar/Navbar'
//created a css module named app.module.css using bundlers like vite

function App() {
  
  return <div className={styles.App}>
  <Navbar></Navbar>
  </div>
}

export default App
