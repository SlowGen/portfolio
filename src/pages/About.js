import React from 'react';

import Layout from '../components/Layout';
import zandk from '../assets/images/photos/ziakali.jpg';
import pool from '../assets/images/photos/poolchamps.jpg'

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me!</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Where I started...</h3>
          <p>
          Raised in Oregon, I started my career in
              technology as the webmaster for local band{' '}
              <a
                href="http://dandywarhols.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dandy Warhols
              </a>. After moving to NYC in 2000, I pursued a career in
              hospitality but found myself always drawn back to my love of
              technology.
              <img src={zandk} className="image right" alt=""/>
          </p>

          <p>
            In 2019, I left my successful past behind and jumped
              head-first into coding. After weeks of teaching myself Python and
              data visualization, I sought out guidance from other engineers
              in the area and ultimately settled on applying for the{' '}
              <a
                href="http://gracehopper.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grace Hopper program
              </a>{' '}
              at{' '}
              <a
                href="http://fullstackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fullstack Academy
              </a>{' '}
              where I learned JavaScript and the NERD stack. I graduated in
              September 2020.
          </p>

          <h3 className="major">My personal life...</h3>
          <p>
          <img src={pool} className="image left" alt="" />
            In my pre-Covid free time, I was an avid pool player competing
              in local leagues since 2007, winning several team championships
              and an MVP award. These days, I still keep in touch with my
              pool friends and spend most of my time coding. Otherwise, you can find
              me enjoying life on the Upper West Side in New York City.
          </p>
        <div>
          <section className="features">
            <article>
              <a href="https://www.linkedin.com/in/kali-nfn/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="special">
                LinkedIn
              </a>
            </article>
            <article>
              <a href="https://github.com/SlowGen/" 
                target="_blank"
                rel="noopener noreferrer"
                className="special">
                GitHub
              </a>
            </article>
          </section>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
