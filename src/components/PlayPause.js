import React, {useRef} from 'react';

import tink from '../assets/tink.wav'; // Tell webpack this JS file uses this image

// a function to start the set interval function

// if play state is true tigger the 

const PlayPause = () => {

    const audioRef = useRef();
    let intervalId;
        
    const audioLoop = () => { window.setInterval(console.log("bananas"), 500)}
    const playTink = () => {  intervalId = window.setInterval(playTinkyWink, 1000)}
    const stopAudioLoop = () => { window.clearInterval(intervalId)}

    function playTinkyWink() {
        audioRef.current.play();
    }


    return (
        <>
            <p>This is Play Pause</p>
                     
            <button onMouseDown={playTink}>Play</button>
            <button onMouseDown={stopAudioLoop}>Stop</button>

            <audio ref={audioRef}>
                <source src={tink} type="audio/wav"/>
            </audio>

        </>
    )
}

export default PlayPause;