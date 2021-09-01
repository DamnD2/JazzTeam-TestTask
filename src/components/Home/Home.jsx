import React from 'react';
import './Home.css';
import JazzTeam from './JazzTeam.png';

const Home = () => (
  <div className='home'>
    <img className='home__img' alt='JazzTeam' src={JazzTeam} />
  </div>
);

export default Home;
