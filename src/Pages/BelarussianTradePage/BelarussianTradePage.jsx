import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './BelarussianTradePage.scss'

export function BelarussianTradePage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    const yearsPhoto = {
        '2014':[{url: "/Data/Festival/2014/Gandal/photo1.jpg"},{url: "/Data/Festival/2014/Gandal/photo2.jpg"}],
        '2016':[{url: "/Data/Festival/2016/Gandal/photo1.jpg"}],
        '2018':[{url: "/Data/Festival/2018/Gandal/photo1.jpg"}],
        '2022':[{url: "/Data/Festival/2022/Gandal/photo1.jpg"}, {url:"/Data/Festival/2022/Gandal/photo2.jpg"},{url:"/Data/Festival/2022/Gandal/photo3.jpg"}],
        '2023':[{url: "/Data/Festival/2023/Gandal/photo1.jpg"}, {url: "/Data/Festival/2023/Gandal/photo2.jpg"}, {url: "/Data/Festival/2023/Gandal/photo3.jpg"}, {url: "/Data/Festival/2023/Gandal/photo4.jpg"}, {url: "/Data/Festival/2023/Gandal/photo5.jpg"}, {url: "/Data/Festival/2023/Gandal/photo6.jpg"}, {url: "/Data/Festival/2023/Gandal/photo7.jpg"}, {url: "/Data/Festival/2023/Gandal/photo8.jpg"}, {url: "/Data/Festival/2023/Gandal/photo9.jpg"}, {url: "/Data/Festival/2023/Gandal/photo10.jpg"}, {url: "/Data/Festival/2023/Gandal/photo11.jpg"}, {url: "/Data/Festival/2023/Gandal/photo12.jpg"}, {url: "/Data/Festival/2023/Gandal/photo13.jpg"}, {url: "/Data/Festival/2023/Gandal/photo14.jpg"}, {url: "/Data/Festival/2023/Gandal/photo15.jpg"}, {url: "/Data/Festival/2023/Gandal/photo16.jpg"}, {url: "/Data/Festival/2023/Gandal/photo17.jpg"}, {url: "/Data/Festival/2023/Gandal/photo18.jpg"}, {url: "/Data/Festival/2023/Gandal/photo19.jpg"}, {url: "/Data/Festival/2023/Gandal/photo20.jpg"}, {url: "/Data/Festival/2023/Gandal/photo21.jpg"}, {url: "/Data/Festival/2023/Gandal/photo22.jpg"}, {url: "/Data/Festival/2023/Gandal/photo23.jpg"}, {url: "/Data/Festival/2023/Gandal/photo24.jpg"}, {url: "/Data/Festival/2023/Gandal/photo25.jpg"}, {url: "/Data/Festival/2023/Gandal/photo26.jpg"}, {url: "/Data/Festival/2023/Gandal/photo27.jpg"}, {url: "/Data/Festival/2023/Gandal/photo28.jpg"}, {url: "/Data/Festival/2023/Gandal/photo29.jpg"}, {url: "/Data/Festival/2023/Gandal/photo30.jpg"}, {url: "/Data/Festival/2023/Gandal/photo31.jpg"}, {url: "/Data/Festival/2023/Gandal/photo32.jpg"}, {url: "/Data/Festival/2023/Gandal/photo33.jpg"}, {url: "/Data/Festival/2023/Gandal/photo34.jpg"}, {url: "/Data/Festival/2023/Gandal/photo35.jpg"}, {url: "/Data/Festival/2023/Gandal/photo36.jpg"}, {url: "/Data/Festival/2023/Gandal/photo37.jpg"}, {url: "/Data/Festival/2023/Gandal/photo38.jpg"}, {url: "/Data/Festival/2023/Gandal/photo39.jpg"}, {url: "/Data/Festival/2023/Gandal/photo40.jpg"}, {url: "/Data/Festival/2023/Gandal/photo41.jpg"}, {url: "/Data/Festival/2023/Gandal/photo42.jpg"}, {url: "/Data/Festival/2023/Gandal/photo43.jpg"}, {url: "/Data/Festival/2023/Gandal/photo44.jpg"}, {url: "/Data/Festival/2023/Gandal/photo45.jpg"}, {url: "/Data/Festival/2023/Gandal/photo46.jpg"}, {url: "/Data/Festival/2023/Gandal/photo47.jpg"}, {url: "/Data/Festival/2023/Gandal/photo48.jpg"}, {url: "/Data/Festival/2023/Gandal/photo49.jpg"}, {url: "/Data/Festival/2023/Gandal/photo50.jpg"}, {url: "/Data/Festival/2023/Gandal/photo51.jpg"}, {url: "/Data/Festival/2023/Gandal/photo52.jpg"}, {url: "/Data/Festival/2023/Gandal/photo53.jpg"}, {url: "/Data/Festival/2023/Gandal/photo54.jpg"}, {url: "/Data/Festival/2023/Gandal/photo55.jpg"}, {url: "/Data/Festival/2023/Gandal/photo56.jpg"}, {url: "/Data/Festival/2023/Gandal/photo57.jpg"}, {url: "/Data/Festival/2023/Gandal/photo58.jpg"}, {url: "/Data/Festival/2023/Gandal/photo59.jpg"}, {url: "/Data/Festival/2023/Gandal/photo60.jpg"}, {url: "/Data/Festival/2023/Gandal/photo61.jpg"}, {url: "/Data/Festival/2023/Gandal/photo62.jpg"}, {url: "/Data/Festival/2023/Gandal/photo63.jpg"}, {url: "/Data/Festival/2023/Gandal/photo64.jpg"}, {url: "/Data/Festival/2023/Gandal/photo65.jpg"}, {url: "/Data/Festival/2023/Gandal/photo66.jpg"}, {url: "/Data/Festival/2023/Gandal/photo67.jpg"}, {url: "/Data/Festival/2023/Gandal/photo68.jpg"}, {url: "/Data/Festival/2023/Gandal/photo69.jpg"}, {url: "/Data/Festival/2023/Gandal/photo70.jpg"}, {url: "/Data/Festival/2023/Gandal/photo71.jpg"}, {url: "/Data/Festival/2023/Gandal/photo72.jpg"}, {url: "/Data/Festival/2023/Gandal/photo73.jpg"}, {url: "/Data/Festival/2023/Gandal/photo74.jpg"}, {url: "/Data/Festival/2023/Gandal/photo75.jpg"}, {url: "/Data/Festival/2023/Gandal/photo76.jpg"}, {url: "/Data/Festival/2023/Gandal/photo77.jpg"}, {url: "/Data/Festival/2023/Gandal/photo78.jpg"}, {url: "/Data/Festival/2023/Gandal/photo79.jpg"}, {url: "/Data/Festival/2023/Gandal/photo80.jpg"}, {url: "/Data/Festival/2023/Gandal/photo81.jpg"}, {url: "/Data/Festival/2023/Gandal/photo82.jpg"}, {url: "/Data/Festival/2023/Gandal/photo83.jpg"}, {url: "/Data/Festival/2023/Gandal/photo84.jpg"}, {url: "/Data/Festival/2023/Gandal/photo85.jpg"}, {url: "/Data/Festival/2023/Gandal/photo86.jpg"}]

    }

    useEffect(() => {
        // fetch(`http://localhost:4000/api/getGandalPhotoUrlsByYear/${year}`)
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
        <div className="belarussianTradePage">
            <Header></Header>
            <div className="belarussianTradePage__container">
                <div>
                    <h1 className="belarussianTradePage__container__info">Александрыйскi гандаль</h1>
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
                <LeftPanel></LeftPanel>
                {/* {windowWidth > 865 && <LeftPanel activeButton="festival"></LeftPanel>} */}
            </div>
            <Footer></Footer>
        </div>
    );
}

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => setWindowWidth(window.innerWidth);
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);