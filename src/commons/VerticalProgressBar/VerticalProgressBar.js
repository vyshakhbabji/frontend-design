import React from "react";
import "./VerticalProgressBar.css";

const VerticalProgressBar = ({progress, totalImages, height = 110}) => {
    return (
        <div className="containerStyles" style={{height: `${height}px`}}>
            {progress.map((value, index) => (

                <React.Fragment key={index}>
                    <div className="dotStyles" style={{opacity: value > 0 ? 1 : 0.3}}/>
                    <div
                        key={index}
                        className="fillerStyles"
                        style={{
                            height: `${160 / totalImages}%`,
                            clipPath: `inset(0 0 ${100 - value}% 0)`
                        }}
                    ></div>

                </React.Fragment>
            ))}

        </div>
    );
};

export default VerticalProgressBar;
