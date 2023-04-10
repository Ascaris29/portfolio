import style from "./Header.module.scss";
import { useEffect } from "react";
import 'boxicons';


export default function Header({colorTheme, updateColor}){

    function handleChangeThemeColor(){
        updateColor(!colorTheme);
    }

    useEffect(() => {
        if(colorTheme){
            document.body.setAttribute('style', 'background-color : white');
        }else{
            document.body.setAttribute('style', 'background-color : var(--black)');
        }
    }, [colorTheme])
    

    return (
        <header className={`${style.header}`}>
            <div className={`${style.headerLogo}`}>S L</div>
            <div className={`${style.headerLogoD}`}>S L</div>
            <div className={!colorTheme ?`${style.socialMediaNight} ${style.iconHeaderSocial}` : `${style.socialMediaLight} ${style.iconHeaderSocial}`}>
                <i className="fa-brands fa-linkedin" onClick={()=> window.open("https://www.linkedin.com/in/solene-lema-developpeur-web/")}></i>
                <i className="fa-brands fa-github" onClick={() => {window.open("https://github.com/ascaris29")}}></i>
            </div>
            <div className={`${style.btnChangeColor}`}><i onClick={handleChangeThemeColor} className={colorTheme ? `${style.iconMoon} bx bxs-moon` : `${style.iconSun} bx bx-sun`}></i></div>
           
        </header>
    )
}