import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import style from "./App.module.scss";
import { useState } from "react";
import Apropos from "../components/Apropos/Apropos";
import Qualites from "../components/Qualites/Qualites";


function App({colorTheme}) {

 const [themeColor, setThemeColor] = useState(false);

 console.log(themeColor)
  return (
    <div className={`${style.app}`}>
      <Header colorTheme={themeColor} updateColor={setThemeColor}/>
      <Hero />
      <Projects colorTheme={themeColor} updateColor={setThemeColor}/>
      <Apropos colorTheme={themeColor} updateColor={setThemeColor} />
      <Qualites colorTheme={themeColor} updateColor={setThemeColor} /> 
    </div>
  )
}

export default App;
