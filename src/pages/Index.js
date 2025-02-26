import React from 'react';
import { Link } from 'react-router-dom';
import TypedText from '../components/Home/TypedText';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Etem Kocaaslan's personal website. Turkiye based EEM Graduated from Eskisehir Technical University. "
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
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
      </p>
    </article>
  </Main>
);

export default Index;
