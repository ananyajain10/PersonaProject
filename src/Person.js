import React from 'react' 
import image from './image.png'
import "./style.css"
function Person(){
    return(
        <img src={image}
        className="image-style"
        alt="this is a photo"/>
    )
}
export default Person