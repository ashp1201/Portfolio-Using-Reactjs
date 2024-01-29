import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Ashok from '../asserts/ashok.png'
import Typography from '@mui/material/Typography';
import  '../CssFile/Starter.css'
import Button from '@mui/material/Button'
import {FileDownloadOutlined} from '@mui/icons-material';
import {Download} from '@mui/icons-material';

function Starter() {
  const resumeLink = 'https://drive.google.com/file/d/1SI90_213UjIeIAVar-_QITvEvb_O1jrs/view?usp=sharing';


    const [words] = useState(['Frontend Web Developer']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const speed = 70;
  
    useEffect(() => {
      let timeout;
      
      if (isTyping) {
        timeout = setTimeout(() => {
          if (offset < words[currentIndex].length) {
            setOffset((prevOffset) => prevOffset + 1);
          } else {
            setOffset(0);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }, speed);
      }
      return () => clearTimeout(timeout);
    }, [offset, isTyping, currentIndex, words]);
  
    useEffect(() => {
      if (currentIndex === words.length - 1 && offset === words[currentIndex].length) {
        // After typing the last word, stop typing
        setIsTyping(false);
      }
    }, [currentIndex, offset, words]);


  return (
    <div>
            <Box className='main' sx={{backgroundColor:'#ffffff'}}>
                {/* ECF9FF,FFFFE8,FAF8F1 */}
                <Box className='left' sx={{height:1}}>
                    <img className='img_ash' src={Ashok} alt="ASHOK PUROHIT" aria-label='User Profile Photo' />
                    <Box className='left_down'>
                    <Button  className='starter_btn' href={resumeLink} target="_blank"   aria-label='Download User Resume' variant='contained' color="success" endIcon={<Download/>   }>Resume</Button>
                    <Button className='starter_btn' href={resumeLink} target="_blank" aria-label='Download User CV' variant="contained" color="secondary" endIcon={<FileDownloadOutlined/>}  >Cv</Button>
                    </Box>
                </Box>
                
                <Box className='right'>
                    <Typography variant="h4" color="initial">
                        Hi I'm <span className='name'>Ashok Purohit</span> 
                    </Typography>
                    <Typography className='word' variant="h6" color="initial">
                    {words[currentIndex].substr(0, offset)}

                    </Typography>
                </Box>

            </Box>
    </div>
  )
}

export default Starter