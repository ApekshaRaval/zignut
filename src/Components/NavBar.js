import React from 'react';
import "./Navbar.css";
import {FaFacebookSquare,FaYoutubeSquare,FaInstagramSquare} from "react-icons/fa"
const NavBar = () => {
  return (
    <>
     <nav> 
     <div>
        <h2>
            <span>R</span>aval
            <span>A</span>peksha
        </h2>
     </div>
     <div>
        <ul>
            <li>
            <a> Apeksha</a>
            </li>
            <li>
            <a>Signup</a>
            </li>
            <li>
            <a>Login</a>
            </li>
        </ul>
     </div>
     <div>
        <ul>
     <li>
     <a href='' target="_self"> <FaFacebookSquare/></a>
    </li>
    <li>
     <a href='' target="_self"> <FaYoutubeSquare/></a>
    </li>
    <li>
     <a href='' target="_self"> <FaInstagramSquare/></a>
    </li>
     </ul>
     </div>
     </nav>
     <section>
        <p>Welcome to home page</p>
     </section>
     </>
     
    
  )
}

export default NavBar


