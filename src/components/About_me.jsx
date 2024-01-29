import "../CssFile/About_me.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Ashok from "../asserts/ashok.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "../asserts/about_me.jpg";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';






function About_me() {

    const [alignment, setAlignment] = React.useState('experience');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const renderText = () => {
    if (alignment === 'experience') {
      return <p>Fresher</p>;
    } else if (alignment === 'Current education') {
      return <Box>
        <Typography className="text_info_1" variant="p" color="initial">
          St Francis Institute of Technology
        </Typography><br />
        <Typography className="text_info_2" variant="p" color="grey" >
          2021 - 2025
        </Typography><br />
        <Typography className="text_info_3" variant="p" color="initial">
          B.E (Information Technology)
        </Typography>
        
      </Box>
       
    } else {
      return <p></p>;
    }
  };

  return (
    <Box className="main_about_me">
      <Box className="left_about">
        <img src={img1} alt="" className="img_about" />
      </Box>

      <Box className="right_about">
        <Typography className="about_me head_line" variant="h4">About Me</Typography>
        <Typography className="text_info" variant="p">
        &nbsp;&nbsp; &nbsp;&nbsp;Hello,Hello, I'm Ashok Purohit, a third-year student at SFIT College, deeply passionate about frontend web development. Proficient in HTML, CSS, and JavaScript, I excel in crafting responsive and user-friendly websites. My expertise extends to building reusable components with React.js, and I am committed to continuous learning, striving for growth in the dynamic field of web development.
        </Typography>
        <Box className='toggle_info'>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="experience">Experience</ToggleButton>
          <ToggleButton value="Current education">Current Education</ToggleButton>
          
        </ToggleButtonGroup>
        <Box>
            {renderText()}
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default About_me;
