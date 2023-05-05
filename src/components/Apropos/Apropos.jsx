import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import style from "./Apropos.module.scss";



export default function Apropos({colorTheme, updateColor}){

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,{
                opacity: 0,
                y: -400,
            },
            {
                opacity: 1,
                y:0,
                duration : duration,
                delay: delay,
                scrollTrigger:{
                    trigger: elem ,
                    start:"top center",
                    end:"bottom center"
                }
            }
        )
    }

    const slideSide = (elem, duration, delay) => {
        gsap.fromTo(
            elem, {
                opacity: 0,
                x: -600,
            },
            {
                opacity: 1,
                x: 0,
                duration : duration,
                delay: delay,
                scrollTrigger:{
                    trigger:elem,
                    start:"top center",
                    end:"bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop(".aproposTitle", 1, 0.5);
    },[])

    useEffect(() => {
        slideSide(".aproposPara", 1, 0.5);
    },[])

    useEffect(() => {
        slideSide(".aproposText1", 1, 0.5);
    },[])
    useEffect(() => {
        slideSide(".aproposPara", 1, 0.5);
    },[])
    useEffect(() => {
        slideSide(".aproposImg", 1, 0.5);
    },[])
    useEffect(() => {
        slideInTop(".aproposDownloadButton", 1, 0.3);
    },[])
    useEffect(() => {
        slideInTop(".itemApropos", 1, 0.5);
    },[])

    async function handleClickDownload(){
        const fileGet = await fetch("../CV_solene_lema_dev_2023.pdf", {
            method: 'get',
            mode:'no-cors'
            }
        );
        const file = await fileGet.blob()
        const fileElement = document.createElement('a');
        fileElement.setAttribute('download', 'cvSolèneLEMA');
        const href = URL.createObjectURL(file);
        fileElement.href = href;
        fileElement.setAttribute('target', '_blank');
        fileElement.click()
        URL.revokeObjectURL(href)
    }

    return (
        <div className={`${style.apropos}`}>
            <div className={`${style.aproposItem} itemApropos`}>
                <img src="/images/bateau.svg" alt="" />
            </div>
            <h2 className={colorTheme ? `colorLight aproposTitle`: `colorDark aproposTitle`}> Mon histoire</h2>
            <p className={colorTheme ? `${style.pTitle} colorLight aproposPara`: `${style.pTitle} colorDark aproposPara` }>Développeuse Front end React.js & intégratrice web</p>
            <div className={`${style.aproposBlocText}`}>
                <p className={colorTheme ? `${style.pBlocTxt} colorLight aproposText1`: `${style.pBlocTxt} colorDark aproposText1` }>Après une reconversion professionnelle ou je travaillais autrefois dans le domaine du dentaire, me voici devenue <span className="colorYellow"><strong> Développeuse front end </strong></span> spécialisée <span className="colorYellow"><strong> Javascript </strong></span> et <span className="colorYellow"><strong> React </strong></span>.
                    J'ai suivi une formation riche et concise avec l'école OpenClassRooms et j'ai également été stagiaire dans plusieurs agences Web et ESN qui m'ont beaucoup appris.</p>
                    <p className={colorTheme ? `${style.pBlocTxt} colorLight text-end aproposText1`: `${style.pBlocTxt} colorDark text-end aproposText1` }> Au quotidien, j'aime travailler avec <span className="colorYellow"><strong> React.js </strong></span> côté front et j'aime parfois toucher au backend avec <span className="colorYellow"><strong> Node.js </strong></span> & <span className="colorYellow"><strong> PHP </strong></span>.
                    Je peux réaliser des sites vitrines esthétiques et je peux également réaliser des applications efficaces et réactives.
                    L'écoute de mon client est primordiale et je suis impartiale quand à leur choix de design et de fonctionnalités.
                    Je m'adapte très rapidement aux demandes quelles qu'elles soient.
                </p>
                <div className={`${style.aproposImg} aproposImg`}>
                    <img src="../images/photocv.jpg" alt="" />
                </div>
            </div>
            <div className={`${style.aproposButton} aproposDownloadButton`} onClick={handleClickDownload}><button>Télécharger mon cv <i class="fa-solid fa-download"></i></button></div>
        </div>
    )
}