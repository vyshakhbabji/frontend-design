import React from "react";
import Image from "../../commons/Image/Image";
import "./ImageDisplay.css";

const ImageDisplay = ({main, side1, side2}) => {
    return (
        <div className="carouselContainer">
            <div className="main-image-wrapper">
                <Image src={main} side1={side2} side2={side1} className="carouselImage"/>
            </div>
        </div>
    );
};

export default ImageDisplay;
