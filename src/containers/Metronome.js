import React, { useState } from 'react';
import Title from '../components/Title'
import Slider from '../components/Slider'
import PlayPause from '../components/PlayPause'
import BPMdisplay from '../components/BPMdisplay'


const Metronome = () => {

    const [miliseconds, setMilliseconds] = useState(1000);

    
    const handleSlider = (sliderValue) => { setMilliseconds(sliderValue) } 
    
    



    return (
        <>
        <h1>Metronome container</h1>
        <Title/>
        <Slider handleSlider={handleSlider}/>
        <PlayPause miliseconds={miliseconds}/>
        <BPMdisplay/>
        </>
    )
}


export default Metronome;