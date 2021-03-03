import React, {useState} from 'react';

const Slider = ({handleSlider}) => {
    
    const [newValue, setNewValue] = useState(1000);

    const handleNewSliderValue = (event) => {
        setNewValue(event.target.value)

        handleSlider(newValue)
    }
    
    return (
        <>
          <label for="bpm"> Set the miliseconds, and refactor to BPM </label><br/>
            <input onChange={handleNewSliderValue}  value={newValue}  type="range" id="bpm" name="bpm" min="1" max="2000"/>
        </>
    )
}


export default Slider;


/*

<script>

    const inputs = document.querySelectorAll('.controls input');
    
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  </script>

*/