import React from 'react';

const Slider = () => {
    return (
        <>
        <p>This is the slider</p>
        <input type="range" id="bpm" name="bpm" min="0" max="1000"/>
        <label></label>
        </>
    )
}


export default Slider;