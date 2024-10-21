import {useEffect, useState} from "react";
import "./Slider.css";


import IndicatorList from "../../commons/IndicatorList/IndicatorList";
import ProgressBarAndButton from "../../commons/ProgressBarAndButton/ProgressBarAndButton";
import ImageDisplay from "../../commons/ImageDisplay/ImageDisplay";


const Slider = () => {
    const data = ["/images/1.png", "/images/2.png", "/images/3.png"];
    const totalImages = data.length;
    const [currentIdx, setCurrentIdx] = useState(0);
    const [progress, setProgress] = useState(new Array(totalImages).fill(0));
    const [isPaused, setIsPaused] = useState(false);

    const imageDuration = 4000; // 4 seconds per image
    const updateInterval = 50; // Update progress every 50ms for smoothness

    function togglePause() {
        setIsPaused((prev) => !prev);
    }

    const getMainAndSideImages = () => {
        const mainIndex = currentIdx;
        const sideIndex1 = (currentIdx + 1) % totalImages;
        const sideIndex2 = (currentIdx + 2) % totalImages;
        return {
            main: data[mainIndex],
            side1: data[sideIndex1],
            side2: data[sideIndex2],
        };
    };

    const {main, side1, side2} = getMainAndSideImages();

    const carouselClickHandler = (idx) => {
        setCurrentIdx(idx);
        setProgress((prev) => {
            const newProgress = [...prev];
            for (let i = 0; i < idx; i++) {
                newProgress[i] = 100;
            }
            for (let i = idx; i < totalImages; i++) {
                newProgress[i] = 0;
            }
            return newProgress;
        });
        setIsPaused(false);
    };

    useEffect(() => {
        let progressInterval;
        if (!isPaused) {
            progressInterval = setInterval(() => {
                setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[currentIdx] += 100 / (imageDuration / updateInterval);
                    if (newProgress[currentIdx] >= 100) {
                        const nextIdx = (currentIdx + 1) % totalImages;
                        newProgress[currentIdx] = 0;
                        newProgress[nextIdx] = 0;
                        setCurrentIdx(nextIdx);
                    }
                    return newProgress;
                });
            }, updateInterval);
        }
        return () => clearInterval(progressInterval);
    }, [isPaused, currentIdx, totalImages, imageDuration, updateInterval]);

    return (
        <>
            <ImageDisplay main={main} side1={side1} side2={side2}/>
            <IndicatorList
                data={data}
                currentIdx={currentIdx}
                onClick={carouselClickHandler}
            />
            <ProgressBarAndButton
                progress={progress}
                togglePause={togglePause}
                isPaused={isPaused}
                totalImages={totalImages}
            />
        </>
    );
};

export default Slider;
