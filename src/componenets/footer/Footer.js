/* The Footer for the website, which containes personal information and links */

import React from 'react'
import IconStack from '../icon-stack/IconStack'
import "./Footer.scss"

function Footer() {
    return (
       <div className="footer">
           <div className="content">
               <h2>Samson Jose</h2>
               <h4>samsonjose555@gmail.com</h4>
               <h4>0470217130</h4>
               <div className="icons">
                   <IconStack></IconStack>
               </div>
           </div>


       </div>
    )
}

export default Footer
