import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-5">
        <h2 className="text-xl mb-4">Welcome to Laser Cut Service</h2>
        <Login />
      </main>
    </div>
  );
};

export default Home;