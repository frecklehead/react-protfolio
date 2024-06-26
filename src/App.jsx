
import styles from'./App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/profile'
import Projects from './components/projects/Projects';
import { Contact } from './components/contact/contact';

//created a css module named app.module.css using bundlers like vite

function App() {
  
  return (  <div className={styles.App}>
    <Navbar/>
    <Profile/>
 <Projects/>
    <Contact></Contact>
    </div>);
}

export default App
