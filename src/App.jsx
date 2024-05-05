
import styles from'./App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/navbar/profile/profile'
//created a css module named app.module.css using bundlers like vite

function App() {
  
  return (<div className={styles.App}>
    <Navbar/>
    <Profile/>
    </div>);
}

export default App