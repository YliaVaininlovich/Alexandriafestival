import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import './PresidentPage.scss'

export function PresidentPage() {
    const [videoUrl, setVideoUrl] = useState('');
    const { year } = useParams();
    const link = '/Data/Festival/2023/President/presidentVideo.mp4';

    useEffect(() => {

        fetch(`http://backend:4000/api/getVideoUrlByYear/${year}`)
            .then(response => response.text())
            .then(data => {
                setVideoUrl(data);
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="presidentPage">
            <Header></Header>
            <div className="presidentPage_container">
                <div className="presidentPage__container__info">
                    <h1>Выступ Прэзiдэнта Рэспублiкi Беларусь на адкрыццi фестывалю</h1>
                    <iframe src={link} title="President Speech" />
                </div>
                <LeftPanel activeButton="festival"></LeftPanel>
            </div>
            <Footer></Footer>
        </div>
    )
}
