import style from "./Qualites.module.scss";

export default function Qualites(){
    return (
        <div className={`${style.blocQualites}`}>
            <h2 className={`${style.blocQualitesTitle}`}>Soft Skills</h2>
            <div className={`${style.blocQualitesBloc}`}>
                <div className={`${style.blocQualitesCard}`}>
                    <div className={`${style.blocQualitesCardTxt}`}>
                        <h3>Capacité d'écoute</h3>
                        <img src="/images/ecoute.svg" alt="" />
                    </div>
                </div>
                <div className={`${style.blocQualitesCard}`}>
                    <div className={`${style.blocQualitesCardTxt}`}>
                        <h3>Capacité d'adaptation</h3>
                        <img src="/images/travail.svg" alt="" />
                    </div>
                </div>
                <div className={`${style.blocQualitesCard}`}>
                    <div className={`${style.blocQualitesCardTxt}`}>
                        <h3>Ouverture d'esprit</h3>
                        <img src="/images/planete.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}