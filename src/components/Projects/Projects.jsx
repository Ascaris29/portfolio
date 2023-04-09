import style from "./Projects.module.scss";
import data from "../../Datas/Projets/Projets.json";
import CardProjects from "./components/CardProjects";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function Projects({colorTheme, updateColor}){

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
        elem,{
            opacity: 0,
            y: -200,
        },
        {
            opacity: 1,
            y:0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger:{
                trigger: elem ,
                start:"top center",
                end:"bottom center"
            }
        }
    )
}

// const slideSide = (elem, duration, delay) => {
//     gsap.fromTo(
//         elem, {
//             opacity: 0,
//             x: -200,
//         },
//         {
//             opacity: 1,
//             x: 0,
//             delay: delay || 0.4,
//             duration: duration || 0.6,
//             scrollTrigger:{
//                 trigger:elem,
//                 start:"top center",
//                 end:"bottom center"
//             }
//         }
//     )
// }

useEffect(() => {
    slideInTop("#titleBlocProjects", "0.5", "2");
},[])

useEffect(() => {
    slideInTop("#paraBlocProjects", "0.5", "2");
},[])

useEffect(() => {
    slideInTop(".blocCardProject", "0.5", "2");
})
useEffect(() => {
    slideInTop(".portfolioItem", "0.5", "2");
})
  
    return (
        <div id="portfolio" className={`${style.blocProjects}`}>
            <div className={`${style.blocProjectsItem} portfolioItem`}>
                <img src="/images/mouette.svg" alt="" />
            </div>
            <h2 id="titleBlocProjects"className={colorTheme ? "colorLight": "colorDark"} >Mes Projets </h2>
            <p id="paraBlocProjects" className={colorTheme ? "colorLight": "colorDark"} >Ceci est une sélection de mes projets realisés durant ma formation</p>
            <div id="blocCardsProject" className={`${style.blocCardsProject}`}>
                { data.map((p) => 
                    <CardProjects 
                        classNameCard={`${style.card} blocCardProject`}
                        classNameImg={`${style.cardImg}`}
                        img={p.image}
                        key={p.title}
                        classNameTitle={`${style.TitleCardProject}`}
                        title={p.title} 
                        alt={p.title}
                        classNameModale={`${style.BlocModale}`}
                        data={data}  
                        themeColor={colorTheme}
                        updateThemeColor={updateColor}                               //transmission d'une props avec les données dedans, je l'envoie au composant cardProjects
                        />
                )}
            </div>
        </div>
    )
}