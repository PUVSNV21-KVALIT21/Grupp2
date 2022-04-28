import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
      <h1>About/News/Contact/Whatever</h1>
      <h2>Random info about Hakims Livs</h2>
    </div>
  );
}

export default About;
