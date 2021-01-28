import React, {useState} from 'react';

import Layout from '../components/Layout';

import homeTop from '../assets/images/home-logo-top.png'
import homeBottom from '../assets/images/home-logo-bottom.png'

import checks from '../assets/images/photos/checks.png'
import sleep from '../assets/images/photos/powersleep.jpg'
import brain from '../assets/images/otherlogos/brain_maze.png'

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
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
            <h2 className="major">My Projects</h2>
            <p>
              
            </p>
            <section className="features">
              <article>
                <a href="/#" className="image">
                  <img src={checks} alt="" />
                </a>
                <h3 className="major">ChecksOn.Me</h3>
                <p>
                  This is my current project and is still in the early stages of development. 
                  ChecksOn.Me is an easy to use tableside payment app designed for bars and restaurants that do not
                  have computerized register systems. It does not require any special equipment, minimal training and costs
                  the same as any regular credit card transaction.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={sleep} alt="" />
                </a>
                <h3 className="major">Power Sleep</h3>
                <p>
                  Power Sleep 
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={brain} alt="" />
                </a>
                <h3 className="major">ScavengARescape</h3>
                <p>
                ScavengARescape is an augmented reality escape game experience
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic7} alt="" />
                </a>
                <h3 className="major">Fusce consequat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="/#" className="special">
                  Learn more
                </a>
              </article>
            </section>
            <ul className="actions">
              <li>
                <a href="/#" className="button">
                  Browse All
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/#" className="image">
              <img src={pic1} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Magna arcu feugiat</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/#" className="image">
              <img src={pic2} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Tempus adipiscing</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="/#" className="image">
              <img src={pic3} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Nullam dignissim</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <a href="/#" className="special">
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
