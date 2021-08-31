import React from 'react'
import {Link} from "react-router-dom"
const Contact = () => {
    return (
       <div>
            <div 
        className="ui rasied very padded text container segment"
        style={{marginTop:"80px"}}
        >
            <Link to="/alex" className="ui header">Contact Alex</Link>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiu amet</p>
        </div>
        <div 
        className="ui rasied very padded text container segment"
        style={{marginTop:"80px"}}
        >
            <Link to="/willma" className="ui header">Contact Willma</Link>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiu amet</p>
        </div>
       </div>
    )
}

export default Contact
