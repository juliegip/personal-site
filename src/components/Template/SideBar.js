import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import SkillTag from '../Resume/Skills/SkillTag';
import { skills } from '../../data/resume/skills';
import Navigation from './Navigation';


const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage


const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Julie Gip</h2>
        <p><a href="mailto:julie.gip@gmail.com">julie.gip@gmail.com</a></p>
      </header>
      <ContactIcons />
      <Navigation />
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I&apos;m Julie. I&apos;m a Web developer in transition. </p>
      {/* <p>Hi, I&apos;m Julie. I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p> */}
      <ul className="actions">
        <li>
          <Link to="/contact" className="button">Contact me</Link>
        </li>
      </ul>
    </section>
    <SkillTag className="skilltag" tags={skills.map((skill) => skill.title)} />

  </section>
);

export default SideBar;
