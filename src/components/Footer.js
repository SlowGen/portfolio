import React, {useState} from 'react';
import config from '../../config';

export default function Footer() {
  let [isSent, setIsSent] = useState(false);
  function displayThankYou() {
    setIsSent(true)
    setTimeout(function() {
      setIsSent(false)
      document.getElementById("name").value=''
      document.getElementById("email").value=''
      document.getElementById("message").value=''
    }, 5000);
  }
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        {isSent ? 
        <div>
          <h1>Thanks for reaching out!!</h1><br/><br/><br/><br/>
        </div> :
        <p>
          Have a question about one of my projects or looking for someone to help on your own project? Reach out to me here!
        </p>
        }
        <form method="post" onSubmit={() => displayThankYou()} action="https://formspree.io/f/xoqpbajy" target='popup'>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
              
            </li>
          </ul>
        </form>

        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; 2021 Slowgen. All rights reserved.</li>
          <iframe name="popup" title="SlowGen" height={0} width={0}></iframe>
          <li>
          </li>
        </ul>
      </div>
    </section>
  );
}
