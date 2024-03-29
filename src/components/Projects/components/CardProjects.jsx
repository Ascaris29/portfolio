import { useState } from "react";
import Modale from "./Modale/Modale";

//je recupere la props data avec les donnée récupérées depuis le composant Projects
export default function CardProjects({classNameCard, classNameImg, img, classNameTitle, title, alt, classNameModale, data, themeColor, updateThemeColor, idCard}){

    const [modale, setModale] = useState(false)

    function handleShowModale(){
        setModale(true);
        // document.body.setAttribute('style', 'opacity : 0.1');
    }

    return(
        <>
            <div className={classNameCard} >               
                <img src={img} alt={alt} className={classNameImg}/>
                <h4 className={classNameTitle}>{title}</h4>
                <p onClick={handleShowModale}>En savoir plus <i className="fa-solid fa-arrow-right"></i></p>
            </div> 
            {/* je transmets la props data récupérée depuis Projects pour l'envoyer à modale */}
            { modale ? <Modale title={title} data={data} themeColor={themeColor} updateThemeColor={updateThemeColor} modaleState={modale} updateModaleState={setModale} /> : null}
        </>
    )
}