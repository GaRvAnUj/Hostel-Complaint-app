import React from 'react';
import ComplaintForm from '../ComplaintForm/ComplaintForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>ROOMEASEE!</h1>
        <p>Helping College Students with Accommodation Complaints</p>
      </header>

      <main>
        <ComplaintForm />
      </main>
    </div>
  );
};

export default Home;