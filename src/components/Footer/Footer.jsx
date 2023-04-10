import style from "./Footer.module.scss";

export default function Footer(){
    return(
        <div className={`${style.footer}`}>
            <img className={`${style.footerBackground}`}src="/images/silas-baisch-f4bfvVXKZP8-unsplash.jpg" alt="" />
            <div class={`${style.overlay}`}></div>
            <div className={`${style.footerText}`}>
                <h2 className={`${style.footerTitle}`}>N'attendez plus et contactez moi</h2>
                <p className={`${style.footerPara}`}><strong>Solène LEMA</strong><br />Developpeuse FrontEnd</p>
                <p className={`${style.footerCopyright}`}>Solène LEMA Web Dev Copyright © 2023 Tous droits réservés</p>
            </div>
        </div>
    )
}