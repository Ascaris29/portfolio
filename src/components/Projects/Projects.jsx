import style from "./Projects.module.scss";
import data from "../../Datas/Projets/Projets.json";
import CardProjects from "./components/CardProjects";


export default function Projects({colorTheme, updateColor}){

function randomClassName(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const randowNumber = Math.floor(Math.random() * (max - min +1)) + min;
    if(randowNumber === 1){
        return "animation-third"
    }else if(randowNumber === 2){
        return "animation-second"
    }else{
        return "animation-first"
    }
} 

    const number = randomClassName(1,3)

    console.log(colorTheme)

    return (
        <div className={`${style.blocProjects}`}>
            <h2 className={colorTheme ? `colorLight`: `colorDark`}>Mes Projets </h2>
            <p className={colorTheme ? `$colorLight`: `colorDark`}>Ceci est une sélection de mes projets realisés durant ma formation</p>
            <div className={`${style.blocCardsProject}`}>
                { data.map((p) => 
                    <CardProjects 
                        classNameCard={`${style.card} ${number}`}
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
                    {/* <div className={`${style.card}`}>
                            <img src="" alt="" />
                            <h4 className={`${style.TitleCardProject}`}>Site Kasa</h4>
                    </div>
                    <div className={`${style.card}`}>               
                            <img src="" alt="" />
                            <h4 className={`${style.TitleCardProject}`}>Site HotTakes</h4>
                    </div>
                    <div className={`${style.card}`}>                
                            <img src="" alt="" />
                            <h4 className={`${style.TitleCardProject}`}>Site OhMyFood</h4>
                    </div>
                    <div className={`${style.card}`}>                
                            <img src="" alt="" />
                            <h4 className={`${style.TitleCardProject}`}>Site Booki</h4>
                    </div> */}
            </div>
        </div>
    )
}