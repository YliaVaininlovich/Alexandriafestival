import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './ProgramPage.scss'

export function ProgramPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const yearsPhotoCount = {
        '2012': 1,
        '2013': 2,
        '2014': 10,
        '2015': 12,
        '2016': 15,
        '2017': 16,
        '2018': 1,
        '2019': 12,
        '2020': 37,
        '2021': 20,
        '2022': 13,
        '2023': 46,
    }

    async function handleFestivalClick() {
        navigate("/festival");
    }

    useEffect(() => {
        let yearsPhoto = [];
        for (let i = 1; i <= yearsPhotoCount[year]; i++)
            yearsPhoto.push({ url: `/Data/Festival/` + year + `/Program/photo` + i + `.jpg` });
        console.log(yearsPhoto);
        setImages(yearsPhoto)
    }, [year]);
    return (
        <div className="programPage">
            <Header></Header>
            <div className="programPage__container">
                <div>
                    <div className="heading">
                        <svg onClick={handleFestivalClick} width="60px" height="60px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path class="st0" d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23    c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7    c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69    c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41    c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39    c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32    c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09    c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63    l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z" />
                        </svg>
                        <h1 className="friendsPage__container__info">Гульнявая забаўляная праграма</h1>
                    </div>

                    <div className="slider_size">
                        {images.length > 0 && (
                            <SimpleImageSlider
                                images={images}
                                showBullets={true}
                                showNavs={true}
                                loop={true}
                                autoPlay={true}
                                autoPlayDelay={2.0}
                            />
                        )}
                    </div>
                </div>
                <LeftPanel activeButton="festival"></LeftPanel>
            </div>
            <Footer></Footer>
        </div>
    )
}
