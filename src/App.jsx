
import styles from'./App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/profile'
import Projects from './components/projects/Projects';

//created a css module named app.module.css using bundlers like vite

function App() {
  
  return (  <div className={styles.App}>
    <Navbar/>
    <Profile/>
 <Projects/>
    
    </div>);
}

export default App
