import React from "react";
import "./IndicatorList.css";

const IndicatorList = ({data, currentIdx, onClick}) => {
    return (
        <ul className="carouselClickContainer">
            {data.map((item, index) => (
                <li
                    className={`carouselClickItem ${
                        index === currentIdx ? "active" : ""
                    }`}
                    onClick={() => onClick(index)}
                    key={index}
                >
                    0{index + 1}
                </li>
            ))}
        </ul>
    );
};

export default IndicatorList;
