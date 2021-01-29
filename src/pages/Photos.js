import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'

import Layout from '../components/Layout';
import aliens from '../assets/images/photos/aliens.jpg';
import bernie from '../assets/images/photos/bernie.jpg';
import dirty from '../assets/images/photos/dirty.jpg';
import east from '../assets/images/photos/east.jpg';
import gridmat from '../assets/images/photos/gridmat.jpg';
import hubble from '../assets/images/photos/hubble.jpg';
import north from '../assets/images/photos/north.jpg';
import selfee from '../assets/images/photos/self.jpg';
import selfie from '../assets/images/photos/selfie.jpg';
import skylight from '../assets/images/photos/skylight.jpg';
import south from '../assets/images/photos/south.jpg';
import turtle from '../assets/images/photos/turtlepond.jpg';
import two from '../assets/images/photos/two.jpg';
import west from '../assets/images/photos/west.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={selfee} onDragStart={handleDragStart} className="imagegal" />,
    <img src={turtle} onDragStart={handleDragStart} className="imagegal" />,
    <img src={bernie} onDragStart={handleDragStart} className="imagegal" />,
    <img src={dirty} onDragStart={handleDragStart} className="imagegal" />,
    <img src={east} onDragStart={handleDragStart} className="imagegal" />,
    <img src={gridmat} onDragStart={handleDragStart} className="imagegal" />,
    <img src={north} onDragStart={handleDragStart} className="imagegal" />,
    <img src={selfie} onDragStart={handleDragStart} className="imagegal" />,
    <img src={skylight} onDragStart={handleDragStart} className="imagegal" />,
    <img src={south} onDragStart={handleDragStart} className="imagegal" />,
    <img src={two} onDragStart={handleDragStart} className="imagegal" />,
    <img src={west} onDragStart={handleDragStart} className="imagegal" />,
    <img src={aliens} onDragStart={handleDragStart} className="imagegal" />,
    <img src={hubble} onDragStart={handleDragStart} className="imagegal" />,
]

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>My photography</h2>
          <p>Photography is a hobby of mine, I am by no means professional 
            in any way but I enjoy expressing a bit of how I see the world. 
            All photos were taken with whatever phone I had at the time (except Hubble,
            that one was taken by the Hubble Space Telescope, I just really love it).
            </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <AliceCarousel 
            mouseTracking={true} 
            items={items} 
            autoPlay={true}
            autoPlayInterval={2500}
            infinite={true}

          />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
