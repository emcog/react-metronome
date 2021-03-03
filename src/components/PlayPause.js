import React from 'react';

import tink from '../assets/tink.wav'; // Tell webpack this JS file uses this image

// a function to start the set interval function

// if play state is true tigger the 

const PlayPause = () => {
    return (
        <>
            <p>This is Play Pause</p>
            <audio controls>
                <source src={tink} type="audio/wav"/>
            </audio> 

            {/* <audio controls src={tink} type="audio/wav"/> */}
        </>
    )
}

export default PlayPause;