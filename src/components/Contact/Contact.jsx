import style from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Contact({colorTheme, updateColor}){

    const schema = yup.object({
        name : yup.string().required('Votre prénom est requis').min(2, 'Votre nom est trop court').max(15, 'Votre nom est trop long'),
        email : yup.string().email().required('N\'oubliez pas votre email s\'il vous plait'),
        message : yup.string().required(('J\'ai besoin d\'un message pour comprendre')),
    })

    const defaultValues = {
        name : "",
        email : "",
        message:"",
    }

    const {
        register, 
        handleSubmit,
        formState: { errors }} 
        = useForm({
        resolver : yupResolver(schema),
        defaultValues,
        criteriaMode: "all",
        mode : "onSubmit"
    });

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

    const slideSideLeft = (elem, duration, delay) => {
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
    const slideSideRight = (elem, duration, delay) => {
        gsap.fromTo(
            elem, {
                opacity: 0,
                x: 600,
            },
            {
                opacity: 1,
                x: 0,
                duration : duration,
                delay: delay,
                scrollTrigger:{
                    trigger:elem,
                    start:"left center",
                    end:"bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop(".blocContactTitle", 1, 0.5);
    },[])
    useEffect(() => {
        slideInTop(".blocContactPara", 1, 0.3);
    },[])
    useEffect(() => {
        slideSideLeft(".inputName", 1, 0.3);
    },[])
    useEffect(() => {
        slideSideRight(".inputEmail", 1, 0.3);
    },[])
    useEffect(() => {
        slideSideLeft(".inputMessage", 1, 0.3);
    },[])
    useEffect(() => {
        slideInTop(".btnFormContact", 1, 0.3);
    },[])

    const onSubmit = data => console.log(data);

    return (
        <div id="contact" className={`${style.blocContact}`}>
            <div className={`${style.blocContactItem}`}>
                <img src="/images/meduse.svg" alt="" />
            </div>
            <h2 className={`${style.blocContactTitle} blocContactTitle`}>Formulaire de contact</h2>
            <p className={colorTheme ? `${style.blocPara} colorLight blocContactPara` : `${style.blocPara} colorDark blocContactPara` }>N'hesitez pas à me laisser un petit message pour discuter de vos projets <i className="fa-brands fa-octopus-deploy"></i> </p>
                <form action="" className={`${style.formContact}`} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder="Votre prénom *" className="inputName"/>
                    {
                        errors?.name && (
                            <p className={`${style.blocParaErrorInput}`}>{errors.name.message}</p>
                        )
                    }
                    <input type="text" {...register("email")} placeholder="Votre email *" className="inputEmail"/>
                    {
                        errors?.email && (
                            <p className={`${style.blocParaErrorInput}`}>{errors.email.message}</p>
                        )
                    }
                    <textarea type="text" {...register("message")} placeholder="Votre message *" className="inputMessage"/>
                    {
                        errors?.message && (
                            <p className={`${style.blocParaErrorInput}`}>{errors.message.message}</p>
                        )
                    }
                    <button onClick={onSubmit} className="btnFormContact">Envoyer votre message</button>
                </form>
        </div>
    )
}