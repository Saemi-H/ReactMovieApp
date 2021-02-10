import React from 'react';
import './App.css';

const Movieapp = ({background,title, overview, language, date, status, img}) => {
    return (
        <div className="bodybg" style={{backgroundImage: `url("${`https://image.tmdb.org/t/p/original/${img}`}")`}} alt='background'>
          <div className="bodyop">
        <h1>{title}</h1>
     <p className="overview">{overview}</p>
      <img className="image" src={`https://image.tmdb.org/t/p/original/${background}`} alt="poster"/>
     
      <div className='details'>
      <div className="language">
        <h2>Langauge</h2>
        <p className="info lang">{language}</p>
      </div>
      <div className="date">
        <h2>Released-Date</h2>
        <p className="info redate">{date}</p>
      </div>
      <div className="status">
        <h2>Status</h2>
        <p className="info stat">{status}</p>
      </div> 
      </div>
     
      </div>
        </div>
    );
};

export default Movieapp;