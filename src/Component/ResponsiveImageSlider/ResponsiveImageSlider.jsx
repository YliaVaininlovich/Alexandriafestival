import React, { useEffect, useRef, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./ResponsiveImageSlider.scss";

export function ResponsiveImageSlider(props) {
    const { images, ratio = 450 / 840, ...sliderProps } = props;
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const updateWidth = () => {
            setWidth(element.clientWidth);
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const height = Math.round(width * ratio);

    return (
        <div className="responsiveImageSlider" ref={containerRef}>
            {width > 0 && (
                <SimpleImageSlider
                    width={width}
                    height={height}
                    images={images}
                    {...sliderProps}
                />
            )}
        </div>
    );
}
