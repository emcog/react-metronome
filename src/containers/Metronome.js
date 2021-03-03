import React from 'react';
import Title from '../components/Title'
import Slider from '../components/Slider'
import PlayPause from '../components/PlayPause'
import BPMdisplay from '../components/BPMdisplay'


const Metronome = () => {

    return (
        <>
        <h1>Metronome container</h1>
        <Title/>
        <Slider/>
        <PlayPause/>
        <BPMdisplay/>
        </>
    )
}


export default Metronome;