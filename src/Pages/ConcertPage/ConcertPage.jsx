import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './ConcertPage.scss'

export function ConcertPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const yearsPhoto = {
        '2014': [{ url: "/Data/Festival/2014/Gala/photo1.jpg" }, { url: "/Data/Festival/2014/Gala/photo2.jpg" }],
        '2015': [{ url: "/Data/Festival/2015/Gala/photo1.jpg" }, { url: "/Data/Festival/2015/Gala/photo2.jpg" }],
        '2016': [{ url: "/Data/Festival/2016/Gala/photo1.jpg" }],
        '2017': [{ url: "/Data/Festival/2017/Gala/photo1.jpg" }, { url: "/Data/Festival/2017/Gala/photo2.jpg" }, { url: "/Data/Festival/2017/Gala/photo3.jpg" }],
        '2019': [{ url: "/Data/Festival/2019/Gala/photo1.jpg" }],
        '2020': [{ url: "/Data/Festival/2020/Gala/photo1.jpg" }, { url: "/Data/Festival/2020/Gala/photo2.jpg" }, { url: "/Data/Festival/2020/Gala/photo3.jpg" }],
        '2021': [{ url: "/Data/Festival/2021/Gala/photo1.jpg" }, { url: "/Data/Festival/2021/Gala/photo2.jpg" }],
        '2022': [{ url: "/Data/Festival/2022/Gala/photo1.jpg" }, { url: "/Data/Festival/2022/Gala/photo2.jpg" }, { url: "/Data/Festival/2022/Gala/photo3.jpg" }, { url: "/Data/Festival/2022/Gala/photo4.jpg" }, { url: "/Data/Festival/2022/Gala/photo5.jpg" }, { url: "/Data/Festival/2022/Gala/photo6.jpg" }, { url: "/Data/Festival/2022/Gala/photo7.jpg" }, { url: "/Data/Festival/2022/Gala/photo8.jpg" }],
        '2023': [{ url: "/Data/Festival/2023/Gala/photo1.jpg" }, { url: "/Data/Festival/2023/Gala/photo2.jpg" }, { url: "/Data/Festival/2023/Gala/photo3.jpg" }, { url: "/Data/Festival/2023/Gala/photo4.jpg" }, { url: "/Data/Festival/2023/Gala/photo5.jpg" }, { url: "/Data/Festival/2023/Gala/photo6.jpg" }, { url: "/Data/Festival/2023/Gala/photo7.jpg" }, { url: "/Data/Festival/2023/Gala/photo8.jpg" }, { url: "/Data/Festival/2023/Gala/photo9.jpg" }, { url: "/Data/Festival/2023/Gala/photo10.jpg" }, { url: "/Data/Festival/2023/Gala/photo11.jpg" }, { url: "/Data/Festival/2023/Gala/photo12.jpg" }, { url: "/Data/Festival/2023/Gala/photo13.jpg" }, { url: "/Data/Festival/2023/Gala/photo14.jpg" }, { url: "/Data/Festival/2023/Gala/photo15.jpg" }, { url: "/Data/Festival/2023/Gala/photo16.jpg" }, { url: "/Data/Festival/2023/Gala/photo17.jpg" }, { url: "/Data/Festival/2023/Gala/photo18.jpg" }, { url: "/Data/Festival/2023/Gala/photo19.jpg" }, { url: "/Data/Festival/2023/Gala/photo20.jpg" }, { url: "/Data/Festival/2023/Gala/photo21.jpg" }, { url: "/Data/Festival/2023/Gala/photo22.jpg" }, { url: "/Data/Festival/2023/Gala/photo23.jpg" }, { url: "/Data/Festival/2023/Gala/photo24.jpg" }, { url: "/Data/Festival/2023/Gala/photo25.jpg" }, { url: "/Data/Festival/2023/Gala/photo26.jpg" }, { url: "/Data/Festival/2023/Gala/photo27.jpg" }, { url: "/Data/Festival/2023/Gala/photo28.jpg" }, { url: "/Data/Festival/2023/Gala/photo29.jpg" }, { url: "/Data/Festival/2023/Gala/photo30.jpg" }, { url: "/Data/Festival/2023/Gala/photo31.jpg" }, { url: "/Data/Festival/2023/Gala/photo32.jpg" }, { url: "/Data/Festival/2023/Gala/photo33.jpg" }, { url: "/Data/Festival/2023/Gala/photo34.jpg" }, { url: "/Data/Festival/2023/Gala/photo35.jpg" }, { url: "/Data/Festival/2023/Gala/photo36.jpg" }, { url: "/Data/Festival/2023/Gala/photo37.jpg" }, { url: "/Data/Festival/2023/Gala/photo38.jpg" }, { url: "/Data/Festival/2023/Gala/photo39.jpg" }, { url: "/Data/Festival/2023/Gala/photo40.jpg" }, { url: "/Data/Festival/2023/Gala/photo41.jpg" }, { url: "/Data/Festival/2023/Gala/photo42.jpg" }, { url: "/Data/Festival/2023/Gala/photo43.jpg" }, { url: "/Data/Festival/2023/Gala/photo44.jpg" }, { url: "/Data/Festival/2023/Gala/photo45.jpg" }, { url: "/Data/Festival/2023/Gala/photo46.jpg" }, { url: "/Data/Festival/2023/Gala/photo47.jpg" }, { url: "/Data/Festival/2023/Gala/photo48.jpg" },],
    }
    async function handleFestivalClick(){
                 navigate("/festival");
             }

    useEffect(() => {

        setImages(yearsPhoto[year])
    }, [year]);
    return (
        <div className="concertPage">
            <Header></Header>
            <div className="concertPage__container">
                <div>
                    <div className="heading">
                    <svg onClick={handleFestivalClick} width="60px" height="60px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">   
                        <path class="st0" d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23    c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7    c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69    c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41    c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39    c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32    c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09    c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63    l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z"/>
                    </svg>

                    <h1 className="concertPage__container__info">Гала-канцэрт</h1>
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
