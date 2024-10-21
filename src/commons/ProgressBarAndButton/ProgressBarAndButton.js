import VerticalProgressBar from "../../commons/VerticalProgressBar/VerticalProgressBar";
import {PauseIcon, PlayIcon} from "../../commons/PlayPauseButton/PlayPauseIcon";


const ProgressBarAndButton = ({progress, togglePause, isPaused, totalImages}) => {
    return (
        <div className="progress-bar-and-button">
            <VerticalProgressBar progress={progress} totalImages={totalImages}/>
            <button className="play-pause-button" onClick={togglePause}>
                {isPaused ? <PlayIcon/> : <PauseIcon/>}
            </button>
        </div>
    );
};

export default ProgressBarAndButton;
