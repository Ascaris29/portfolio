import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import style from "./App.module.scss";


function App() {
  return (
    <div className={`${style.app}`}>
      <Header/>
      <Hero />
      <Projects />
    </div>
  )
}

export default App;
