/* List of icons for github, linked in and pdf which contains resime link */
import React from 'react'
import "./IconStack.scss"

import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

function IconStack() {
    return (
        <div className="icon__stack">
        <a href="https://github.com/IronHarambe" target="_blank" rel="noopener noreferrer">    <FaGithub ></FaGithub></a>
        <a href="https://www.linkedin.com/in/samson-jose-5566781b2/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
           <a href="/SamsonJose_Resume.pdf" target="_blank" rel="noopener noreferrer"> <FaFilePdf></FaFilePdf></a> 
           
            
        </div>
    )
}

export default IconStack
