
import type {DisplayState } from "./helpers";
import { formatTime} from "./helpers"
import { FaPlay, FaPause, FaUndo} from "react-icons/fa";

interface DisplayProps {
displayState: DisplayState;
reset: () => void;
startStop: () => void;
}

const Display: React.FC<DisplayProps> = ({
    displayState,
    reset,
    startStop,
}) => {
return (
    <div className="display">
         <h2 id="timer-label">{displayState.timeType}</h2>
         <span
        id="time-left"
        style={{ color: `${displayState.timerRunning ? "red" : "white"}` }}
      >
        {formatTime(displayState.time)}
      </span>
<div>
    <button id="start_stop" onClick={startStop}>
        {displayState.timerRunning ? <FaPause /> : <FaPlay />}
    </button>
    <button id="reset" onClick={reset}>
        <FaUndo />
    </button>
</div>
</div>
);
};

export default Display;
