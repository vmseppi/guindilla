import React, { useState } from 'react';
import { Slider, Box } from '@mui/material';

function MySlider() {
    const [value, setValue] = useState(0);
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box maxWidth="500px" mx="auto">
            <img src={images[value]} alt="Slider" style={{ width: '100%', height: 'auto' }} />
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={images.length - 1}
                step={1}
                marks
                valueLabelDisplay="auto"
            />
        </Box>
    );
}

export default MySlider;
