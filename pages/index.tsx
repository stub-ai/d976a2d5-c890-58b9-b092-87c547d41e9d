import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import TodoList from '../components/TodoList';

const Home = () => {
  // Replace with actual authentication state
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    );
  }

  return <TodoList />;
};

export default Home;