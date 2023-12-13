import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../components/Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Contact = () => (

    <article className="post" id="contact">
      <Link to="/" id="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        <p>Back to profile</p>
      </Link>
      <div> 
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p><a href="mailto:julie.gip@gmail.com">julie.gip@gmail.com</a></p>
      </div>
      <ContactIcons />
      </div>
    </article>
);

export default Contact;
