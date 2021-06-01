import React, {useState} from 'react';

import Layout from '../components/Layout';

import homeTop from '../assets/images/home-logo-top.png'
import homeBottom from '../assets/images/home-logo-bottom.png'

import checks from '../assets/images/photos/checks.png'
import sleep from '../assets/images/photos/powersleep.jpg'
import brain from '../assets/images/otherlogos/brain_maze.png'
import pool from '../assets/images/otherlogos/splash.png'
import emo from '../assets/images/otherlogos/emorocks.jpg'
import dandy from '../assets/images/otherlogos/dandysplash.jpg'

import turtle from '../assets/images/photos/turtlepond.jpg';
import contact from '../assets/images/photos/contactless.png';
import profile from '../assets/images/photos/profile.jpg';

const IndexPage = () => {
  const [logoTile, setLogoTile] = useState(homeTop)
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
          </div>
          <img src={logoTile} classname="image" sizes={30}
          onMouseEnter={() => setLogoTile(homeBottom)}
          onMouseLeave={() => setLogoTile(homeTop)}

           />
        </div>
      </section>
      <section id="wrapper">
        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major" id="work">My Projects</h2>
            <p>
              
            </p>
            <section className="features">
              <article>
                <img src={checks} className="image" alt="" />
                <h3 className="major">ChecksOn.Me</h3>
                <p>
                  This is my current project and is still in the early stages of development. 
                  ChecksOn.Me is an easy to use tableside payment app designed for bars and restaurants that do not
                  have computerized register systems. It does not require any special equipment, minimal training and costs
                  the same as any regular credit card transaction.
                </p>
                <a href="http://www.checkson.me" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                  See mock-up
                </a>
              </article>
              <article>
                <img src={sleep} className="image" alt="" />
                <h3 className="major">Power Sleep</h3>
                <p>
                Power Sleep is an app developed as a submission for the{' '}
                <a
                  href="https://www.spaceappschallenge.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2020 Space Apps Challenge
                </a>{' '}
                hosted by NASA. Our app utilizes Google Calendar and Oauth2 to
                find windows in a busy user's schedule and create sleep events. As
                part of a three person team, I was responsible for front end
                development and dev ops. Power Sleep was built using React in less
                than 48 hours.
                </p>
                <a href="https://www.youtube.com/watch?v=E6GZZHmnJvU" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                  Watch demo
                </a>
              </article>
              <article>
                <img src={brain} className="image" alt="" />
                <h3 className="major">ScavengARescape</h3>
                <p>
                An augmented reality adventure game built using Viro Media and
                React Native. This app was my final presentation project at Grace
                Hopper. As part of a team of 4 developers, I developed each portal
                / level of the game, as well as customized the positioning and
                scale of the 3D graphics to provide for an immersive experience.
                </p>
                <a href="https://www.youtube.com/embed/VGoNcz_78Ns" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                  Watch presentation
                </a>
                <a href="https://github.com/Capstone-E/ScavengAR-Escape" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                  See GitHub repo
                </a>
              </article>
              <article>
                <img src={pool} className="image" alt="" />
                <h3 className="major">Pool House</h3>
                <p>
                  PoolHouse is a light-weight mobile app that helps servers and
                  bartenders calculate the distribution of tips amongst themselves.
                  This was built as part of the Grace Hopper program's Stackathon over
                  the course of a weekend. This app was my first exposure to mobile
                  development and was built using React Native. I'm currently rebuilding 
                  the app using Flutter.
                </p>
                <a href="https://github.com/SlowGen/PoolHouse" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                    See GitHub repo (React Native)
                </a>
                <a href="https://github.com/SlowGen/PoolHouse-Flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special">
                    See GitHub repo (Flutter)
                  </a>
              </article>
              <article>
                <img src={emo} className="image" alt="" />
                <h3 className="major">EmoRocks</h3>
                <p>
                  EmoRocks is a mock e-commerce site developed as a first project in
                  the final phase of boot camp. As a member of a team of four, we
                  accomplished building this site in just over a week using React,
                  React Hooks, Redux and PostgreSQL. I built the user and admin
                  fuctionality into the site and contributed to the database design.
                </p>
                <a href="http://emorocks.herokuapp.com/" className="special">
                  View deployed site
                </a>
              </article>
              <article>
                <img src={dandy} className="image" alt="" />
                <h3 className="major">The Dandy Warhols</h3>
                <p>
                  This site originated as a fan site created by myself and a fellow
                  fan. After nearly two years of hosting the site on a university
                  student server, we were asked to become the "official" site by the
                  band. Ater procurring the domain, our first commercial site was
                  born. Thanks to the Wayback Machine, the origins of my path to
                  development live on.
                </p>
                <a href="https://web.archive.org/web/19990504204259/http://www.dandywarhols.com/welcome2.html"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="special">
                  Go waaaay back
                </a>
              </article>
            </section>
            <ul className="actions">
              <li>
                {/* <a href="/#" className="button">
                  Browse All
                </a> */}
              </li>
            </ul>
          </div>
        </section>

        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/Photos" className="image">
              <img src={turtle} alt="" />
            </a>
            <div className="content">
              <h2 className="major">My Photography</h2>
              <p>
                A little bit of how I see the world
              </p>
              <a href="/Photos" className="special">
                View Gallery
              </a>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/Writing" className="image">
              <img src={contact} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Writing Sample</h2>
              <p>
                I wrote a little article about how I view "contactless" payments and where 
                I see the future of the technology.
              </p>
              <a href="/Writing" className="special">
                Read Article
              </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="/About" className="image">
              <img src={profile} alt="" />
            </a>
            <div className="content">
              <h2 className="major">About Me</h2>
              <p>
                A little about me and my journey to coding.
              </p>
              <a href="/About" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

      </section>
    </Layout>
  );
};
export default IndexPage;
