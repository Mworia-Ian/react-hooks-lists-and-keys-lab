import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const navBarLinks = links.map((link, index) => {
    return <a key = {index} href="link"> {link} </a>
  })

  return <nav>
    <a href="#home">home</a> 
    <a href = "#about">about</a>
    <a href="#projects">projects</a>
    </nav>;
}

export default NavBar;
