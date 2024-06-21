import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './ConcertPage.scss'

export function ConcertPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
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
    useEffect(() => {

        setImages(yearsPhoto[year])
    }, [year]);
    return (
        <div className="concertPage">
            <Header></Header>
            <div className="concertPage__container">
                <div>
                    <h1 className="concertPage__container__info">Гала-канцэрт</h1>
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
