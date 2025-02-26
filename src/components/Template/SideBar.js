import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Etem Kocaaslan</h2>
        <p>
          <a href="mailto:kocaaslanetem@gmail.com">kocaaslanetem@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Etem. I am a{' '}
        <a href="https://www.eskisehir.edu.tr/en">Becho, Eskisehir Technical University EEM</a>
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Etem Kocaaslan.
      </p>
    </section>
  </section>
);

export default SideBar;
