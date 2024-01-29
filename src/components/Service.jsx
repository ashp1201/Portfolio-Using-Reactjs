import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../CssFile/Service.css";
import Scard from "./Scard";
import img1 from "../asserts/react-js-icon.png";
import img2 from "../asserts/js.png";
import img3 from "../asserts/ts.png";
import img4 from "../asserts/html.png";
import img5 from "../asserts/css.png";
import img6 from "../asserts/nodejs.png";
import img7 from "../asserts/java.png";
import img8 from '../asserts/c.png'

import { Box } from "@mui/material";
import Cer_cards from './Cer_cards';
import '../CssFile/Project.css';
import cer_img1 from '../asserts/skillup.png';
import cer_img2 from '../asserts/mlsa_cert.png';
import cer_img3 from '../asserts/python_cert.png';
import cer_img4 from '../asserts/hackathon_cert.png';



function Service() {
  return (
    <div>
      <Box className="head">
        <Typography className="head_line" variant="h4" color="initial">
          Skills{" "}
        </Typography>
      </Box>
      <h4 className="skills_header">Development Skills</h4>
      <marquee id="scroll_news" behavior="" direction="">
        <Box
          onMouseOver={() => document.getElementById("scroll_news").stop()}
          onMouseOut={() => document.getElementById("scroll_news").start()}
          className="whole_box"
        >
          <Scard img={img1} text="React" />
          <Scard img={img2} text="Javascript" />
          <Scard img={img3} text="Typescript" />
          <Scard img={img4} text="Html" />
          <Scard img={img5} text="Css" />
          <Scard img={img6} text="Node.js" />
        
        </Box>
      </marquee>
      <h4 className="skills_header">Programming Skills</h4>
      <marquee id="scroll_new" behavior="" direction="">
        <Box
          onMouseOver={() => document.getElementById("scroll_new").stop()}
          onMouseOut={() => document.getElementById("scroll_new").start()}
          className="whole_box"
        >
          <Scard img={img7} text="Java" />
          <Scard img={img2} text="Javascript" />
          <Scard img={img8} text="   C   " />

        </Box>
      </marquee>
      <h4 className="skills_header">Certification</h4>
      <Box className='margin_flex'>
        <Cer_cards name="Introduction to Front End Development" link="https://drive.google.com/file/d/1U4Cn9R33tjpoW-KDg9fDcDNA7HYOAHcS/view?usp=drive_link" desc={["• Html","• Css","• Javascript","• React","• Nodejs","• Mongodb","• Express"]} img={cer_img1} />
        <Cer_cards name="Frontend Web Development with Git and GitHub Skills" link="https://drive.google.com/file/d/1Ke20JVOmFUxLhy3eTcZT7rX32Ikz6XjH/view?usp=drive_link" desc={["• Html","• Css","• Javascript","• React","• Git","•GitHub"]} img={cer_img2} />
        <Cer_cards name="Python Certification" link="https://drive.google.com/file/d/1sfdGZwVI6zOQlgXMNI8YnqkF72R1UnEK/view?usp=drive_link" desc={["• Python","• VsCode Tool"]} img={cer_img3} />
        <Cer_cards name="CodeCrush 1.0 Hackathon" link="https://drive.google.com/file/d/1O2f7IMfjS-FUAifkSQUAahRu3fDfwYql/view?usp=drive_link" desc={["• Javascript","• MySql","• Django"]} img={cer_img4} />
      </Box>
    </div>
  );
}

export default Service;
