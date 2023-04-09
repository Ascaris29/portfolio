import style from "./Qualites.module.scss";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Qualites({colorTheme, updateColor}){

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
        slideInTop(".blocQualitesTitle", 1, 0.5);
    },[])
    useEffect(() => {
        slideSide(".blocQualitesBloc1", 1, 0.5);
    },[])
    useEffect(() => {
        slideSide(".blocQualitesBloc2", 1, 0.2);
    },[])
    useEffect(() => {
        slideSide(".blocQualitesBloc3", 1, 0.1);
    },[])

    return (
        <div className={`${style.blocQualites}`}>
            <div className={`${style.blocQualitesItem}`}>
                <img src="/images/ancre.svg" alt="animation d'une ancre" />
            </div>
            <h2 className={colorTheme ? `${style.blocQualitesTitle} colorLight blocQualitesTitle` : `${style.blocQualitesTitle} colorDark blocQualitesTitle`}>Soft Skills</h2>
            <div className={`${style.blocQualitesBloc}`}>
                <div className={`${style.blocQualitesCard} blocQualitesBloc1`}>
                    <div className={`${style.blocQualitesCardTxt} `}>
                        <h3>Capacité d'écoute</h3>
                        <img src="/images/ecoute.svg" alt="photographie de deux personnes discutant" />
                    </div>
                </div>
                <div className={`${style.blocQualitesCard} blocQualitesBloc2`}>
                    <div className={`${style.blocQualitesCardTxt} `}>
                        <h3>Capacité d'adaptation</h3>
                        <img src="/images/travail.svg" alt="photographie de trois rouages qui signifie travail ou construction" />
                    </div>
                </div>
                <div className={`${style.blocQualitesCard} blocQualitesBloc3`}>
                    <div className={`${style.blocQualitesCardTxt}`}>
                        <h3>Ouverture d'esprit</h3>
                        <img src="/images/planete.svg" alt="photographie d'une planète" />
                    </div>
                </div>
            </div>
        </div>
    )
}