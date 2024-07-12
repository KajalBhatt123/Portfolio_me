import React from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo.jpg";

const Home = () => {
  return (
    <div id="home">
      <section>
        <div>
          <h1>
            Hi, I Am <br /> Kajal Bhatt
          </h1>

          <Typewriter
            options={{
              strings: ["A Developer", "Tech Enthusiast"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:kajalbhatt1110@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>+ 4</p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>kajalbhatt1110@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Kajal" />
      </section>
    </div>
  );
};

export default Home;
