// import React, { useState, useEffect } from "react"
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import iconTel from "../../image/iconTel.png"
import iconEmail from "../../image/iconEmail.png"
import iconHour from "../../image/iconHour.png"
import iconFacebook from "../../image/iconF.png"
import iconInst from "../../image/iconI.png"
import iconTg from "../../image/iconTg.png"

// import logotip from "../../../public/Data/History/historyOfDetai.png"
import './ContactPage.scss'

export function ContactPage() {

    return (
        <div className="contactPage">
            <Header></Header>
            <div className="contactPage__container">
                <div className="contactPage__informationBlock">
                    <div className="contactPage__informationBlock__name">Контакты</div>
                    
                    <div className="contactPage__informationBlock__text"><img src={iconTel}></img>+375 (222) 77-88-99</div>
                    <div className="contactPage__informationBlock__text"><img src={iconEmail}></img> info@aleksandriya-museum.by</div>
                    <div className="contactPage__informationBlock__text"><img src={iconHour}></img>Пн-Пт с 09:00 до 17:00, Сб-Вс с 10:00 до 15:00</div>
                    <div className="contactPage__informationBlock__text"><img src={iconFacebook}></img>fb.com/aleksandriya.museum</div>
                    <div className="contactPage__informationBlock__text"><img src={iconInst}></img>@aleksandriya_museum</div>
                    <div className="contactPage__informationBlock__text"><img src={iconTg}></img>@MuseumAleksandriya</div>
                    <img className="contactPage__informationBlock__img"
                    // src={image_url} alt=""
                    />
                </div>
                <LeftPanel activeButton="contacts"></LeftPanel>

            </div>
            
        </div>
    )
}
