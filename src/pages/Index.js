import React from 'react';
import { Link } from 'react-router-dom';
import TypedText from '../components/Home/TypedText';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Etem Kocaaslan's personal website. Electrical and Electronics Engineer with a passion for machine learning, robotics, and software development."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About me</Link>
          </h2>
          <TypedText />
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>.{' '}
      </p>
    </article>
  </Main>
);

export default Index;
