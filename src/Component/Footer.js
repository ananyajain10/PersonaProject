import React from 'react'
import '../style.css'
import twitter from "../icons/twitter.jpg"
import facebook from "../icons/facebook.jpg"
import insta from "../icons/instagrm.jpg"
import github from "../icons/github.jpg"
function Footer(){
    return(
        <footer className='footer'>
           
            <div className='icon'>
                <img src={twitter} className='button-icon'/>
                <img src={facebook} className='button-icon'/>
                <img src={insta} className='button-icon-insta'/>
                <img src={github} className='button-icon'/>
                    </div>  
        </footer>

    )
}
export default Footer 