import React, {useRef} from 'react';

import tink from '../assets/tink.wav'; // Tell webpack this JS file uses this image

// a function to start the set interval function

// if play state is true tigger the 

const PlayPause = () => {

    const audioRef = useRef();



    // const audioLoop = window.setInterval(tink.play, 500)
        
    const audioLoop = () => { window.setInterval(console.log("bananas"), 500)}
    const playTink = () => {  window.setInterval(playTinkyWink, 1000)}

    function playTinkyWink() {
        audioRef.current.play();
    }
    // window.setInterval(console.log("bananas"), 500)



    


    return (
        <>
            <p>This is Play Pause</p>
                     <button onMouseDown={audioLoop}>audioLoop</button>
                     <button onMouseDown={playTink}>Play Tink</button>
                     

            <audio controls ref={audioRef}>
                <source src={tink} type="audio/wav"/>
            </audio>

        </>
    )
}

export default PlayPause;