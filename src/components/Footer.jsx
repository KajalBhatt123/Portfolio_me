import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"; 
import { AiOutlineArrowUp } from "react-icons/ai"; 

import logo from "../assets/logo.jpg";
import leetcodeIcon from "../assets/leetcode.svg"; 

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Founder"
        />

        <h2>Kajal Bhatt</h2>
        <p>Fall seven times, stand up eight.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://leetcode.com/u/KajalBhatt/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="LeetCode" height={25} width={25} /> 
          </a>
          <a href="https://linkedin.com/in/kajal-bhatt-531809284/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/KajalBhatt123" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
