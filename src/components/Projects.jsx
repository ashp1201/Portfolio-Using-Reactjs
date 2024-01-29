import "../CssFile/Project.css";
import React, { useEffect, useState } from "react";
import Cards from './Cards'
import Typography from "@mui/material/Typography";
import '../CssFile/Project.css'
import Button from '@mui/material/Button';



import { Box } from "@mui/material";
import b1 from '../asserts/cospace.jpg'
import b2 from '../asserts/todolist.jpg'
import b3 from '../asserts/stopwatch.jpg'
import b4 from '../asserts/calculator.jpg'
import b5 from '../asserts/weather.jpg'
import b6 from '../asserts/tic_tac_toe.jpg'


function Projects() {



  return (
    <Box className=''>
        <Box className='head'>
            <Typography className="head_line" variant="h4" color="initial">Projects</Typography>
        </Box>
        <Box className='margin_flex'>
        <Cards  img={b1} title='Cospace' project_name='Cospace' proj_det='Cospace offers virtual office solutions, providing flexible and efficient workspace rentals for remote teams and professionals' github_link='https://github.com/ashp1201/Cospace_Mern' project_link='https://cospacess.netlify.app/'/>
        <Cards img={b2} title='To Do List' project_name='To Do List' proj_det='To-do list is a simple too made for organizing tasks, allowing users to jot down, manage, and track items they need to accomplish or remember' github_link='https://ashp1201.github.io/Todo.github.io/' project_link='https://ashp1201.github.io/Todo.github.io/'/>
        <Cards img={b3} title='Stopwatch' project_name='Stopwatch' proj_det='Build a stopwatch by combining HTML for structure, CSS for design, and JavaScript for functionality and User can Start Stop Reset and Lap.' github_link='https://github.com/ashp1201/Stopwatch-using-html-css-and-javascript' project_link='https://ashp1201.github.io/Stopwatch-using-html-css-and-javascript/'/>
        <Cards img={b4} title='Calculator' project_name='Calculator' proj_det='Made Calculator to designed for performing mathematical calculations, including addition, subtraction, multiplication, and division' github_link='https://github.com/ashp1201/Calculator' project_link='https://ashp1201.github.io/Calculator/'/>
        <Cards img={b5} title='Weather App' project_name='Weather App' proj_det='Create a weather app using HTML for structure, CSS for styling, and JavaScript for fetching and displaying weather data, providing users with real-time weather information.' github_link='https://github.com/ashp1201/Weather-App' project_link='https://ashp1201.github.io/Weather-App/'/>
        <Cards img={b6} title='Tic Tac Toe' project_name='Tic Tac Toe' proj_det='Develop a Tic Tac Toe game using HTML for structure, CSS for styling, and JavaScript for implementing game logic, allowing users to play the classic game on a web page.' github_link='https://github.com/ashp1201/Tic-Tac-Toe-Game' project_link='https://ashp1201.github.io/Tic-Tac-Toe-Game/'/>

        </Box>
        <Box className='btn_box'>
          <Button  variant="secondary" className="btn">More</Button>
        </Box>
        

    </Box>
  )
}

export default Projects