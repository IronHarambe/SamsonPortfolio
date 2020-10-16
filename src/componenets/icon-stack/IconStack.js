import React from 'react'
import "./IconStack.scss"

import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

function IconStack() {
    return (
        <div className="icon__stack">
            <FaGithub></FaGithub>
            <FaLinkedin></FaLinkedin>
            <FaFilePdf></FaFilePdf>
        </div>
    )
}

export default IconStack
