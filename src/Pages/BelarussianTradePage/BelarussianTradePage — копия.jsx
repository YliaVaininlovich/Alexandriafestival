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
        '2014':[{url: "/Data/Festival/2014/Gandal/photo1.jpg"},{url: "/Data/Festival/2014/Gandal/photo2.jpg"}]
    }

    useEffect(() => {
        fetch(`http://localhost:4000/api/getGandalPhotoUrlsByYear/${year}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const photoUrls = data;
                    setImages(photoUrls.map(url => ({ url })));
                } else {
                    console.error('Expected an array of URLs');
                }
            })
            .catch(error => console.error(error));
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