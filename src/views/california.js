import React from "react";
import {Link} from "react-router-dom"
import yosemiteweather from "../images/yosemiteweather.jpg"
import yosemitemap from "../images/yosemitemap.jpg"
import yosemite from "../images/yosemite.jpg"
import "../styles.css"

function California(){
    return (<div> 
        <Link to="/">Back</Link>
        <h1 id="center">Welcome to California!</h1>
        <img className="mainPhoto" src={yosemite} id="center" />
        <img className="thumbPhoto" src={yosemiteweather} id="left" /> <img className="thumbPhoto" src={yosemitemap} id="right"/>
        </div>)
}
export default California