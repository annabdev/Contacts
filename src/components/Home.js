import React from 'react';
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      Hi from Home
      <br />
      <Link to="/form">Form</Link>
      <br />
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}

export default Home;
