import style from "./Hero.module.scss";
import video from "../../assets/video/waves.mp4";



export default function Hero(){
    return (
                <main className={`${style.blobHero}`}>
                    <video src={video} autoPlay loop muted></video>
                    <div className={`${style.blobHeroText}`}>
                       <h1>Je suis Solène LEMA, développeuse web.</h1> 
                       <p>Je concois et developpe des sites web accessibles et intuitifs.</p>
                       <p>Ces sites web mettront en valeur votre marque, votre entreprise, votre personnalité aussi merveilleuse soit-elle ✨</p>
                       <div className={`${style.blobButtons}`}>
                            <button>Contactez moi</button>
                            <button>Portfolio</button>
                       </div>
                    </div>
                </main>
    )
}