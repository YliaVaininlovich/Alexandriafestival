import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './ProgramPage.scss'

export function ProgramPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    const yearsPhoto = {
        '2012':[{url: "/Data/Festival/2012/Program/photo1.jpg"}],
        '2015':[{url: "/Data/Festival/2015/Program/photo1.jpg"}],
        '2016':[{url: "/Data/Festival/2016/Program/photo1.jpg"}],
        '2018':[{url: "/Data/Festival/2018/Program/photo1.jpg"}],
        '2019':[{url: "/Data/Festival/2019/Program/photo1.jpg"}],
        '2020':[{url: "/Data/Festival/2020/Program/photo1.jpg"}, {url: "/Data/Festival/2020/Program/photo2.jpg"}, {url: "/Data/Festival/2020/Program/photo3.jpg"},
        {url: "/Data/Festival/2020/Program/photo4.jpg"},
        {url: "/Data/Festival/2020/Program/photo5.jpg"},
        {url: "/Data/Festival/2020/Program/photo6.jpg"}],
'2021':[{url: "/Data/Festival/2021/Program/photo1.jpg"},
        {url: "/Data/Festival/2021/Program/photo2.jpg"},
        {url: "/Data/Festival/2021/Program/photo3.jpg"},
        {url: "/Data/Festival/2021/Program/photo4.jpg"}],
'2022':[{url: "/Data/Festival/2022/Program/photo1.jpg"},
        {url: "/Data/Festival/2022/Program/photo2.jpg"}],
'2023':[{url: "/Data/Festival/2023/Program/photo1.jpg"},
        {url: "/Data/Festival/2023/Program/photo2.jpg"},
        {url: "/Data/Festival/2023/Program/photo3.jpg"},
        {url: "/Data/Festival/2023/Program/photo4.jpg"},
        {url: "/Data/Festival/2023/Program/photo5.jpg"},
        {url: "/Data/Festival/2023/Program/photo6.jpg"},
        {url: "/Data/Festival/2023/Program/photo7.jpg"},
        {url: "/Data/Festival/2023/Program/photo8.jpg"},
        {url: "/Data/Festival/2023/Program/photo9.jpg"},
        {url: "/Data/Festival/2023/Program/photo10.jpg"},
        {url: "/Data/Festival/2023/Program/photo11.jpg"},
        {url: "/Data/Festival/2023/Program/photo12.jpg"},
        {url: "/Data/Festival/2023/Program/photo13.jpg"},
        {url: "/Data/Festival/2023/Program/photo14.jpg"},
        {url: "/Data/Festival/2023/Program/photo15.jpg"},
        {url: "/Data/Festival/2023/Program/photo16.jpg"},
        {url: "/Data/Festival/2023/Program/photo17.jpg"},
        {url: "/Data/Festival/2023/Program/photo18.jpg"},
        {url: "/Data/Festival/2023/Program/photo19.jpg"},
        {url: "/Data/Festival/2023/Program/photo20.jpg"},
        {url: "/Data/Festival/2023/Program/photo21.jpg"},
        {url: "/Data/Festival/2023/Program/photo22.jpg"},
        {url: "/Data/Festival/2023/Program/photo23.jpg"},
        {url: "/Data/Festival/2023/Program/photo24.jpg"},
        {url: "/Data/Festival/2023/Program/photo25.jpg"},
        {url: "/Data/Festival/2023/Program/photo26.jpg"},
        {url: "/Data/Festival/2023/Program/photo27.jpg"},
        {url: "/Data/Festival/2023/Program/photo28.jpg"},
        {url: "/Data/Festival/2023/Program/photo29.jpg"},
        {url: "/Data/Festival/2023/Program/photo30.jpg"},
        {url: "/Data/Festival/2023/Program/photo31.jpg"},
        {url: "/Data/Festival/2023/Program/photo32.jpg"},
        {url: "/Data/Festival/2023/Program/photo33.jpg"},
        {url: "/Data/Festival/2023/Program/photo34.jpg"},
        {url: "/Data/Festival/2023/Program/photo35.jpg"},
        {url: "/Data/Festival/2023/Program/photo36.jpg"},
        {url: "/Data/Festival/2023/Program/photo37.jpg"},
        {url: "/Data/Festival/2023/Program/photo38.jpg"},
        {url: "/Data/Festival/2023/Program/photo39.jpg"},
        {url: "/Data/Festival/2023/Program/photo40.jpg"},
        {url: "/Data/Festival/2023/Program/photo41.jpg"}]

    }
    useEffect(() => {
        // fetch(`http://backend:4000/api/getProgramPhotoUrlsByYear/${year}`)
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
        <div className="programPage">
            <Header></Header>
            <div className="programPage__container">
            <div>
                <h1 className="friendsPage__container__info">Гульнявая забаўляная праграма</h1>
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
