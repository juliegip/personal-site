import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../components/Contact/ContactIcons";
import SkillTag from "../components/Resume/Skills/SkillTag";
import { skills } from "../data/resume/skills";
import Navigation from "../components/Template/Navigation";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" id="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Julie Gip</h2>
        <p>
          <a href="mailto:julie.gip@gmail.com">julie.gip@gmail.com</a>
        </p>
      </header>
      <ContactIcons />
    </section>

    <section className="blurb">
      <p>
        Hello, I&apos;m Julie, passionate about coding and exploring the web. I
        love creating and learning new things in my own projects.{" "}
      </p>
      <ul className="actions">
        <li>
          <Link to="/contact" className="button">
            Contact me
          </Link>
        </li>
      </ul>
      <Navigation />
    </section>
    <SkillTag tags={skills.map((skill) => skill.title)} />
  </section>
);

export default SideBar;
