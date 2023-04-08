
import style from "./Apropos.module.scss";



export default function Apropos({colorTheme, updateColor}){

    async function handleClickDownload(){
        const fileGet = await fetch("../cv.pdf", {
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

    console.log(colorTheme)
    return (
        <div className={`${style.apropos}`}>
            <h2 className={colorTheme ? `colorLight`: `colorDark`}> Mon histoire</h2>
            <p className={colorTheme ? `${style.pTitle} colorLight`: `${style.pTitle} colorDark` }>Développeuse Front end React.js & intégratrice web</p>
            <div className={`${style.aproposBlocText}`}>
                <p className={colorTheme ? `${style.pBlocTxt} colorLight`: `${style.pBlocTxt} colorDark` }>Après une reconversion professionnelle ou je travaillais autrefois dans le domaine du dentaire, me voici devenue <span className="colorYellow"><strong> Développeuse front end </strong></span> spécialisée <span className="colorYellow"><strong> Javascript </strong></span> et <span className="colorYellow"><strong> React </strong></span>.
                    J'ai suivi une formation riche et concise avec l'école OpenClassRooms et j'ai également été stagiaire dans plusieurs agences Web et ESN qui m'ont beaucoup appris.</p>
                    <p className={colorTheme ? `${style.pBlocTxt} colorLight`: `${style.pBlocTxt} colorDark text-end` }> Au quotidien, j'aime travailler avec <span className="colorYellow"><strong> React.js </strong></span> côté front et j'aime parfois toucher au backend avec <span className="colorYellow"><strong> Node.js </strong></span> & <span className="colorYellow"><strong> PHP </strong></span>.
                    Je peux réaliser des sites vitrines esthétiques et je peux également réaliser des applications efficaces et réactives.
                    L'écoute de mon client est primordiale et je suis impartiale quand à leur choix de design et de fonctionnalités.
                    Je m'adapte très rapidement aux demandes quelqu'elles soient.
                </p>
                <div className={`${style.aproposImg}`}>
                    <img src="../images/img_corrigée.jpg" alt="" />
                </div>
            </div>
            <div className={`${style.aproposButton}`} onClick={handleClickDownload}><button>Télécharger mon cv</button></div>
        </div>
    )
}