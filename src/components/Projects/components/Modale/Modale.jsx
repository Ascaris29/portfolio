import style from "./Modale.module.scss"

export default function Modale({title, data, modaleState, updateModaleState}){
    //je recupère la props data avec les données récupérées depuis CardProjects récupérées de Projects donc le composant parent
    const desc = data.find((i) => i.title === title)
    // const titleSplit = title.split(0,3)

    function handleCloseModale(){
        updateModaleState(false);
    }
    
    return (
        <div className={`${style.modale}`}>
            { desc && (
            <>
                <div className={`${style.modaleXmark}`} onClick={handleCloseModale}>
                    <i className="fa-solid fa-xmark" ></i>
                </div>
                <div className={`${style.imgModale}`}>
                    <img src={desc.image} alt="" />
                </div>
                <div className={`${style.textModale}`}>
                    <h3 className={`${style.textTitle}`}>{desc.title}</h3>
                    <p className={`${style.textTechno}`}><span className="colorYellow">Langages utilisées :</span> {`${desc.technologies}`}</p>
                    <p className={`${style.textDescription}`}>{desc.description}</p>
                </div>
            </>
            )}
            
        </div>
    )
}