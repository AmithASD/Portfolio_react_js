import styles from "./App.module.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {Hero} from "./components/Hero/Hero";
import {Navbar} from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";
import  {Footer} from "./components/Footer/Footer.jsx"
import { Education } from "./components/education/Education.jsx";

function App() {
    return (
        <div className={styles.App}>
            <Navbar/>
            <Hero/>
            <About/>
            <Education/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
