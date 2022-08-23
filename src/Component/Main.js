import React from 'react'
import '../style.css'
import email from "../icons/email.jpg"
import linkedin from "../icons/linkedin.jpg"


function Main(){
    return(
        <div className='card'>
            <div className='card--color'>
            <p className='main_name'>Laura Smith</p>
            <p className='main_fon'>Frontend Developer</p>
            <p className='main_web'>laurasmith.website</p>
        </div>
            <button className='b--email'><a href='jainananya355@gmail.com' className='a--email'>
            <img src={email} className='a-icon-email'/>
                Email
                
                 </a>
                 </button>
            <button className='b--linkedin'>   
             <a href='https://www.linkedin.com/in/ananya-jain-6b4795217/' className="a--linkedin">
             <img src={linkedin} className='a-icon-email'/>
                LinkedIn
                </a>   
            </button>
                <div className='group'>
            <h4 className='content--head'>About</h4>
            <p className='content--p2'>I am a frontenf developer with a particular interest 
                in making things simple and automated daily
                tasks. I try to keep p wit security and best
                practices, and am always looking forward for new things to
                learn 
            </p>
            <h4 className='content--head'>Interests</h4>
            <p className='content--p2'>
                Food expert, Music scholar, Reader, Internet 
                fanatic, Bacon buff, Enterpreneur, Travel geek, Pop
                culture ninja, Coffee fanatic.   
            </p>
            
        </div> 
                
        </div>
    )
}
export default Main