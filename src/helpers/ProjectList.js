import React from 'react'
import Proj1 from '../assets/quiz-temp.PNG'
import Proj2 from '../assets/ecommerce-temp.PNG'
import Proj3 from '../assets/weather-temp.PNG'
import Proj4 from '../assets/movie-temp.PNG'
import Proj5 from '../assets/extension-temp.PNG'
import Proj6 from '../assets/blogger.PNG'
import Proj7 from '../assets/crypto.PNG'
import Proj8 from '../assets/zipper.PNG'
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiJava, DiVisualstudio, DiMongodb, DiNodejs, DiBootstrap } from "react-icons/di"
import { SiExpress } from "react-icons/si"

const ProjectList = [
    {
        name: "Notes App",
        Img: Proj8,
        Link: "https://zipper-mern.herokuapp.com/",
        Icons: [
            <DiReact style={{color:"#61DBFB"}}/>,
            <DiBootstrap style={{color:'purple'}}/>,
            <DiNodejs style={{color:"#8bc500"}}/>,
            <SiExpress style={{color:'white'}}/>,
            <DiMongodb style={{color:"#57aa50"}}/>
        ],
        description: "This is my first fullstack application, I have also used redux for state managenment and bootstrap for UI. Full user authentication was achieved using JWT and bcrypt to encrypt the passwords."
    },
    {
        name: "Crypto App",
        Img: Proj7,
        Link: "https://crypto-coinmarket.netlify.app",
        Icons: [
            <DiReact style={{color:"#61DBFB"}}/>,
            <DiHtml5 style={{color:"#e54c21"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "The is my take on the coin maketcap clone, crypto data was obtained using the coin gecko API"
    },
    {
        name: "Blogger.io",
        Img: Proj6,
        Link: "https://github.com/JayPatel2728/Blogger.io",
        Icons: [
            <DiNodejs style={{color:"#8bc500"}}/>,
            <DiMongodb style={{color:"#57aa50"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "A simple Node Blogs application using mongo db atlas as the cloud database, the user would be allowed to create, read, update and delete any blogs"
    },
    {
        name: "Quiz App",
        Img: Proj1,
        Link: "https://quizz-app-jp.netlify.app",
        Icons: [
            <DiReact style={{color:"#61DBFB"}}/>,
            <DiHtml5 style={{color:"#e54c21"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "This is a Quiz App that calls the OpenTriva Database API and creates a quiz of 5 questions"
    },
    {
        name: "Movie Search App",
        Img: Proj4,
        Link: "https://movieland-search-app.netlify.app",
        Icons: [
            <DiReact style={{color:"#61DBFB"}}/>,
            <DiHtml5 style={{color:"#e54c21"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "This is a basic movie app clone which grabs movies from an API and showcases them when the user searches from them"
    },
    {
        name: "Weather App",
        Img: Proj3,
        Link: "https://weather-app-jp.netlify.app",
        Icons: [
            <DiJsBadge style={{color:"#f7e018"}}/>,
            <DiHtml5 style={{color:"#e54c21"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "A simple weather app which uses the user's geolocation data and calls the OpenWeather API for information showcased"
    },
    {
        name: "Ecommerce System",
        Img: Proj2,
        Link: "https://github.com/JayPatel2728/OOP-Java-Eccomerce-Store",
        Icons: [
            <DiJava style={{color:"#ec1f25"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "This program is an OOP using Java which works as an eccomerece system, the customer can buy, order and ship the items available"
    },
    {
        name: "Chrome Link Saver",
        Img: Proj5,
        Link: "https://github.com/JayPatel2728/URL-Save-Chrome-Extension",
        Icons: [
            <DiJsBadge style={{color:"#f7e018"}}/>,
            <DiHtml5 style={{color:"#e54c21"}}/>,
            <DiCss3 style={{color:"#264de4"}}/>,
            <DiVisualstudio style={{color:"#37a9f2"}}/>
        ],
        description: "Chrome extension to save URL links, uses chrome API to get current tabs URL, can be used for saving links you would visit most often"
    }
]

export default ProjectList