import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './KirmashPage.scss'

export function KirmashPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    const yearsPhoto = {
        '2013': [{ url: "/Data/Festival/2013/Kirmash/photo1.jpg" }],
        '2016': [{ url: "/Data/Festival/2016/Kirmash/photo1.jpg" }],
        '2018': [{ url: "/Data/Festival/2018/Kirmash/photo1.jpg" }],
        '2019': [{ url: "/Data/Festival/2019/Kirmash/photo1.jpg" }],
        '2020': [{ url: "/Data/Festival/2020/Kirmash/photo1.jpg" }],
        '2021': [{ url: "/Data/Festival/2021/Kirmash/photo1.jpg" }, { url: "/Data/Festival/2021/Kirmash/photo2.jpg" }],
        '2022': [{ url: "/Data/Festival/2022/Kirmash/photo1.jpg" }, { url: "/Data/Festival/2022/Kirmash/photo2.jpg" }, { url: "/Data/Festival/2022/Kirmash/photo3.jpg" }, { url: "/Data/Festival/2022/Kirmash/photo4.jpg" }, { url: "/Data/Festival/2022/Kirmash/photo5.jpg" }, { url: "/Data/Festival/2022/Kirmash/photo6.jpg" }],
        '2023': [{ url: "/Data/Festival/2023/Kirmash/photo1.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo2.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo3.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo4.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo5.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo6.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo7.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo8.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo9.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo10.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo11.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo12.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo13.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo14.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo15.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo16.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo17.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo18.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo19.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo20.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo21.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo22.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo23.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo24.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo25.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo26.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo27.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo28.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo29.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo30.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo31.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo32.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo33.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo34.jpg" }, { url: "/Data/Festival/2023/Kirmash/photo35.jpg" }]
    }

    useEffect(() => {
        // fetch(`http://localhost:4000/api/getKirmashPhotoUrlsByYear/${year}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (Array.isArray(data)) {
        //             const photoUrls = data;
        //             setImages(photoUrls.map(url => ({ url })));
        //         } else {
        //             console.error('Expected an array of URLs');
        //         }
        //     })
        //     .catch(error => console.error(error));
        setImages(yearsPhoto[year])
    }, [year]);
    return (
        <div className="kirmashPage">
            <Header></Header>
            <div className="kirmashPage__container">
                <div>
                    <h1 className="friendsPage__container__info">Купальскi кiрмаш “Александрыя збiрае сяброў“</h1>
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
