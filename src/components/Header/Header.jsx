import style from "./Header.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Header(){

    const [themeColor, setThemeColor] = useState(false);

    function handleChangeThemeColor(){
        setThemeColor(!themeColor);
    }
    function handleRedirectionSocialMedia(){
        window.open("https://www.linkedin.com/in/solene-lema-developpeur-web/");
    }

    useEffect(() => {
        if(themeColor){
            document.body.setAttribute('style', 'background-color : white');
        }else{
            document.body.setAttribute('style', 'background-color : var(--black)');
        }
    }, [themeColor])
    

    return (
        <header className={`${style.header}`}>
            <div className={`${style.headerLogo}`}>Solène LEMA.</div>
            <div className={!themeColor ?`${style.socialMediaNight}` : `${style.socialMediaLight}`}><i className="fa-brands fa-linkedin" onClick={handleRedirectionSocialMedia}></i></div>
            <div className={`${style.btnChangeColor}`}><i onClick={handleChangeThemeColor} className={!themeColor ? `${style.iconMoon} fa-solid fa-moon` : `${style.iconSun} fa-solid fa-sun`}></i></div>
        </header>
    )
}