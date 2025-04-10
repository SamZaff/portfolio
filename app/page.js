"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  FaGithub,
  FaPhoneAlt,
  FaLightbulb,
  FaShoePrints,
} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMail, GoDeviceDesktop } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
import { GiBookCover, GiThink, GiRingedPlanet, GiStack } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import React, { useState } from "react";
import "bootstrap/scss/bootstrap.scss";

export default function Home() {
  const [pageNumber, changePageNumber] = useState(0);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Open+Sans"
      />
      <div className="sunBanner">
        <div id="nav">
          <a href="#jump1">About</a>
          <a href="#jump2">Experience</a>
          <a href="#jump3">Projects</a>
        </div>
        <img src={"Resources/SunBanner.gif"} alt="sun" />
        <p>GIF created using Blender</p>
      </div>
      <div className="section-jump" id="jump1"></div>
      <div className="page" id="section1">
        <div id="me">
          <img src={"Resources/MeSquared3.png"} alt="Me" />
          <p>
            Hey there, my name is{" "}
            <b>
              <u>Sam Zaffanella</u>
            </b>{" "}
            and I am a 2020 graduate of San Francisco State University with a
            Bachelor of Science degree in Computer Science. I am currently
            positioned as a Fullstack Software Engineer at Edduus, though I am
            always seeking more web development as well as AI/machine learning
            opportunities. I am a team player looking to work in a dynamic, fast
            paced environment.
          </p>
        </div>
        <div id="info">
          <ul>
            <li>
              <FaGithub />{" "}
              <a
                href="https://github.com/SamZaff"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <AiFillLinkedin color="#0072b1" />{" "}
              <a
                href="https://www.linkedin.com/in/sam-zaffanella-239190109/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FaPhoneAlt color="#32CD32" /> (+1)925-451-0918
            </li>
            <li>
              <GoMail color="red" />{" "}
              <a href="mailto:samuel.zaffanella@gmail.com">
                samuel.zaffanella@gmail.com
              </a>
            </li>
            <li>
              <IoIosPaper color="grey" />{" "}
              <a
                href={"Resources/Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume.pdf
              </a>
            </li>
            {/* <li><GiCardRandom color="Purple" /> <a href="https://briscolacardgame.herokuapp.com/" target="_blank" rel="noopener noreferrer">Briscola Card Game</a></li> */}
          </ul>
        </div>
      </div>
      <div className="section-jump" id="jump2"></div>
      <div className="page" id="section2">
        <div className="experience" id="skills">
          <h2>
            <FaLightbulb color="#CCCC00" />
            Skills
          </h2>
          <h4>Programming</h4>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
          <h4>Other Skills</h4>
          <ul>
            <li>Amazon Web Services (AWS)</li>
            <li>Windows, Mac, LinuxOS</li>
            <li>Blender 3D software</li>
            <li>Wordpress w/ Elementor &amp; Divi</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="experience" id="education">
          <h2>
            <GiBookCover color="purple" />
            Education
          </h2>
          <h5>
            San Francisco <br /> State University
          </h5>
          <br />
          <div className="school-icon">
            <img src={"Resources/SFSU logo.png"} alt="sfsu logo.png" />
            <ul>
              <li>2015 - 2019 (fall)</li>
              <li>BS in Computer Science</li>
            </ul>
          </div>
          <h5>Courses</h5>
          <ul>
            <li>Machine Learning</li>
            <li>Databases</li>
            <li>Internet App. Design</li>
            <li>iOS Development</li>
            <li>Analysis of Algorithms</li>
            <li>Software Development</li>
            <li>Machine Structure</li>
            <li>Data Structure</li>
            <li>Software Engineering</li>
          </ul>
        </div>
        <div className="experience" id="xp">
          <h2>
            <MdWork color="red" />
            Experience
          </h2>
          <br />
          <img
            src={"Resources/edduus logo.jpeg"}
            id="slice-of-life"
            alt="Slice-of-life-icon.png"
          />
          <ul>
            <li>
              <u>September 2021 - Present</u>: Software Engineer of for{" "}
              <a href="https://edduus.io/">Edduus</a>
            </li>
            <li>
              Build responsive and elegant web applications with multi-language
              support
            </li>
            <li>
              Work across all levels of the stack and solve complex problems
              using elegant and scalable solutions
            </li>
          </ul>
          <hr />
          <img src={"Resources/NCAPDA.png"} id="ncapda" alt="ncapda.png" />
          <ul>
            <li>
              <u>January 2020 - December 2020</u>: Website Support Manager for{" "}
              <a href="https://ncapda.org/">https://ncapda.org</a>
            </li>
          </ul>
          <hr />
          <img
            src={"Resources/intellext-logo.png"}
            id="IntelleXt"
            alt="intellext-logo.png"
          />
          <ul>
            <li>
              <u>February 2021 - August 2021</u>: Frontend Developer at{" "}
              <a href="https://intellext.ai/">IntelleXt</a>
            </li>
          </ul>
        </div>
        <div className="experience" id="traits">
          <h2>
            <GiThink color="blue" />
            Traits
          </h2>
          <h4>Soft Skills</h4>
          <ul>
            <li>Teamwork</li>
            <li>Flexibility</li>
            <li>Communications</li>
            <li>Growth Mindset</li>
          </ul>
          <h4>Work Style</h4>
          <p>
            It is important to keep equality within the workspace and to work as
            a team. Teams who can put their minds together will always be able
            to work more creatively and efficiently
          </p>
          <h4>Hobbies</h4>
          <ul
            style={{ listStyle: "none", marginLeft: "6%", paddingLeft: "0px" }}
          >
            <li>
              <FaShoePrints color="brown" /> Hiking
            </li>
            <li>
              <GoDeviceDesktop /> Deconstructing older hardware
            </li>
            <li>
              <GiRingedPlanet color="blue" /> Astronomy
            </li>
          </ul>
        </div>
      </div>
      <div className="section-jump" id="jump3"></div>
      <div className="page" id="section3">
        <div id="pager-nav">
          <button
            onClick={() =>
              changePageNumber(pageNumber <= 0 ? 7 : pageNumber - 1)
            }
          >
            {" "}
            &laquo;{" "}
          </button>
          {pageNumber + 1}/8
          <button
            onClick={() => {
              changePageNumber(pageNumber >= 7 ? 0 : pageNumber + 1);
            }}
          >
            {" "}
            &raquo;{" "}
          </button>
        </div>
        <div className="project">
          <div style={{ display: pageNumber === 0 ? "block" : "none" }}>
            <img src={"Resources/Briscola.PNG"} alt="Briscola.PNG" />
            <h2>
              <b>Briscola</b>
            </h2>
            <p>
              A popular, often competitively played, Italian card game that
              consists of 2-4 players. The objective of the game is to score as
              many points as possible, which is done through winning certain
              cards that are worth varying amounts of points each. This was a
              project made during Covid-19 to give my family a way to play one
              of our favorite card games without having to be in person.
            </p>
          </div>

          <div style={{ display: pageNumber === 1 ? "block" : "none" }}>
            <img src={"Resources/Zephyr.PNG"} alt="Zephyr.PNG" />
            <h2>
              <b>Zephyr</b>
            </h2>
            <p>
              Zephyr is a pseudo-apartment rental website created as part of an
              all-semester long project for the Software Engineering website at
              SFSU. This project was meant to emulate a teamworking environment,
              with each student being assigned a position within a team. The
              site encorporates various components commonly used in already
              existing real-estate websites such as an account system, uploading
              and reviewing posts, and a messaging system.
            </p>
          </div>
          <div style={{ display: pageNumber === 2 ? "block" : "none" }}>
            <img src={"Resources/Pacman.PNG"} alt="Me" />
            <h2>
              <b>Pacman</b>
            </h2>
            <p>
              This project is based off a UC Berkeley project that is meant to
              teach foundational AI concepts, including search algorithms,
              Markov Decision Process(MDP), bayes net, and machine learning. The
              linked repo has Pacman searching through various sized mazes in an
              attempt to find the pellet.
            </p>
          </div>
          <div style={{ display: pageNumber === 3 ? "block" : "none" }}>
            <img src={"Resources/Restapi.PNG"} alt="Restapi.PNG" />
            <h2>
              <b>REST API</b>
            </h2>
            <p>
              A project meant to practice Representational state transfer, or
              RESTful API which uses HTTP requests to get, put, post, and delete
              data. I will soon be converting this into an API for one of my old
              projects
            </p>
          </div>
          <div style={{ display: pageNumber === 4 ? "block" : "none" }}>
            <img src={"Resources/Bubble-Trouble.PNG"} alt="Me" />
            <h2>
              <b>Bubble Trouble</b>
            </h2>
            <p>
              A game made using java's JPanel container class. In this game,
              balls bounce all around the screen, and the goal is to pop all of
              them in order to advance to the next level without getting hit by
              them. The project was created for an open ended assignment and is
              based off a Flash game with the same name.
            </p>
          </div>
          <div style={{ display: pageNumber === 5 ? "block" : "none" }}>
            <img src={"Resources/Help.PNG"} alt="Me" />
            <h2>
              <b>Help!</b>
            </h2>
            <p>
              Similar to Zephyr, Help! is a pseudo-website for posting and
              reviewing information on local restaurants. The original vision
              was to make a website that shared the pet policies of restaurants,
              so people who had a desire or dependency on taking their dog to
              said restaurants would know whether they were allowed to. The idea
              slowly evolved into making a simple parody website of the popular
              website Yelp.
            </p>
          </div>
          <div style={{ display: pageNumber === 6 ? "block" : "none" }}>
            <img src={"Resources/Tank-Game.PNG"} alt="Me" />
            <h2>
              <b>Tank Game</b>
            </h2>
            <p>
              Another game made using java's JPanel container class. This game
              pins 2 players against each other in a classic game of Tank; each
              player has a set of 3 lives and who ever can shoot down the other
              player first wins the game.
            </p>
          </div>
          <div style={{ display: pageNumber === 7 ? "block" : "none" }}>
            <img src={"Resources/Mine-Sweeper.PNG"} alt="Me" />
            <h2>
              <b>Mine Sweeper</b>
            </h2>
            <p>
              As the name implies, this is a recreation of the classic game
              "Mine Sweeper", with some extra controls to improve the playing
              experience. I was disappointed that windows 10 isn't packaged with
              the game, so I made my own version!
            </p>
          </div>
        </div>
        <div className="project-cont">
          <div style={{ display: pageNumber === 0 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />:{" "}
              <b>Node.js, React.js, MongoDB, Express, Socket.IO</b>
            </p>
            <p>
              <b>Position:</b> FullStack{" "}
            </p>
            <p>
              <b>Origin:</b> Personal
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Briscola"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Briscola
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 1 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />:{" "}
              <b>Express, Passport, Sequelize, EJS, JavaScript</b>
            </p>
            <p>
              <b>Position:</b> Frontend{" "}
            </p>
            <p>
              <b>Origin:</b> School Project
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Zephyr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Zephyr
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 2 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />: <b>Python</b>
            </p>
            <p>
              <b>Position:</b> Individual{" "}
            </p>
            <p>
              <b>Origin:</b> School Project
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Pacman-Search"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Pacman-Search
              </a>
            </p>
            <p>
              <b>More info:</b>{" "}
              <a
                href="https://inst.eecs.berkeley.edu/~cs188/sp19/projects.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://inst.eecs.berkeley.edu/~cs188/sp19/projects.html
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 3 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />: <b>Go</b>
            </p>
            <p>
              <b>Position:</b> Individual{" "}
            </p>
            <p>
              <b>Origin:</b> Personal
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/RestAPI"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/RestAPI
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 4 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />: <b>Java</b>
            </p>
            <p>
              <b>Position:</b> Individual{" "}
            </p>
            <p>
              <b>Origin:</b> Personal/School Project
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Bubble-Trouble"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Bubble-Trouble
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 5 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />:{" "}
              <b>Node.js, React.js, MongoDB, Websocket, Express</b>
            </p>
            <p>
              <b>Position:</b> Frontend{" "}
            </p>
            <p>
              <b>Origin:</b> School Project{" "}
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/CSC667-Final-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/CSC667-Final-Project
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 6 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />: <b>Java</b>
            </p>
            <p>
              <b>Position:</b> Individual{" "}
            </p>
            <p>
              <b>Origin:</b> School Project{" "}
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Tank-Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Tank-Game
              </a>
            </p>
          </div>
          <div style={{ display: pageNumber === 7 ? "block" : "none" }}>
            <p>
              <GiStack color="#46b842" />: <b>Java</b>
            </p>
            <p>
              <b>Position:</b> Individual{" "}
            </p>
            <p>
              <b>Origin:</b> Personal{" "}
            </p>
            <p>
              <b>Repo:</b>{" "}
              <a
                href="https://github.com/SamZaff/Mine-Sweeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SamZaff/Mine-Sweeper
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
