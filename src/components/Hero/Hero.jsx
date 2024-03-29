import style from "./Hero.module.scss";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { Link } from "react-scroll";




export default function Hero(){

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

useEffect(() => {
    slideInTop(".video", "0.5", "1");
},[])

useEffect(() => {
    slideInTop(".blobButtonsContact", "0.5", "1");
},[])

useEffect(() => {
    slideInTop(".blobButtonsPortfolio", "0.5", "1");
},[])
useEffect(() => {
    slideInTop(".textHero", "0.5", "1");
},[])




    return (
                <main className={`${style.blobHero}`}>
                    <video autoPlay loop muted className="video" width="100%" height="40%" controlsList="nodownload">
                        <source type="video/mp4" src="/video/waves.mp4"/>
                    </video>
                    <div className={`${style.blobHeroText} textHero`}>
                       <h1>Je suis Solène LEMA, <strong>développeuse web</strong> à <strong>Quimper</strong>.</h1> 
                       <p>Je concois et developpe des sites web accessibles et intuitifs.</p>
                       <p>Ces sites web mettront en valeur votre marque, votre entreprise, votre personnalité aussi merveilleuse soit-elle ✨</p>
                       <div className={`${style.blobButtons}`}>
                            <button className="blobButtonsContact"><Link to="contact" smooth={true}>Contactez moi</Link></button>
                            <button className="blobButtonsPortfolio"><Link to="portfolio" smooth={true}>Portfolio</Link></button>
                       </div>
                    </div>
                </main>
    )
}