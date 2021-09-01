import React from 'react';
import './Info.css';

const Info = () => (
  <div className='info'>
    <h1 className='info__title'>History of company creation</h1>
    <p className='info__text'>
      JazzTeam company was founded in 2011 by
      <a className='founder' target='blank' href='https://www.linkedin.com/in/dzmitryharachka/'> Dzmitry Harachka </a>.
      He is an experienced Java developer and architect, Master of Engineering
      Sciences, committer of several Open Source projects, a frequent speaker of various
      IT conferences, including Eclipse India Days, SCJP/SCWCD, XP/Scrum expert. Dzmitry has extensive experience as an
      Agile consultant. His work in private companies and consultative practice gave the insight into the necessity to
      create an Agile Java Development Company in Belarus.
    </p>
    <h1 className='info__title'>Mission</h1>
    <p className='info__text'>
      <span className='bold'>Improving the world around us by providing our customers with professional services </span>
      for reliable, technological
      and transparent software development. Assistance to the digital transformation of our clients’ businesses
      through the principles of proactivity, empathy, openness.
    </p>
    <h1 className='info__title'>The company’s goal</h1>
    <p className='info__text'>
      <span className='bold'>Make a substantial contribution to the happiness of our customers, employees and partners. </span>
      To achieve this, we
      strive to always complete projects on time and properly, create added value through a proactive approach and
      serious level of engineering; to be a company whose employees are proud of their work and are happy to be a part
      of JazzTeam.
    </p>
    <p className='info__text'>
      In 2018 JazzTeam became a member of Belarus Hi-Tech Park, one of the leading organization among innovative IT
      clusters in Central and Eastern Europe today.
    </p>
    <p className='info__text'>The advantages of work with JazzTeam as an HTP resident:</p>
    <ul className='info__list'>
      <li className='info__list-item'>stable financial development indicators, the company’s stability;</li>
      <li className='info__list-item'>strategic plans of the company for the next 5 years;</li>
      <li className='info__list-item'>recognized role of the company in the IT community.</li>
    </ul>
    <p className='info__text'>
      Today our successful JazzTeam company is pleased to offer a lot of professional services. Our qualified
      developers, engineers with extensive experience will help your business to succeed!
    </p>
  </div>
);

export default Info;
