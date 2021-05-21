import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
const Navbar = ({icon,title}) => {
   
        return (
           <nav style={{backgroundColor:"#dc3545",color:"#fff"}} className="navbar">
               <h1>
                   <i className={icon}/> {title}
               </h1>
               <ul>
                   <li>
                       <Link to="/">Home</Link>
                   </li>
                   <li>
                       <Link to="/about">About</Link>
                   </li>
               </ul>
           </nav>
        )
    }
    export default Navbar;

Navbar.defaultProps = {
    title:"EMI Calculator",
    
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}



