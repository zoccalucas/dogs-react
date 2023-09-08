import React from 'react';
import LoginForm from '../Login/LoginForm';
import LoginCreate from '../Login/LoginCreate';
import LoginPasswordLost from '../Login/LoginPasswordLost';
import LoginPasswordReset from '../Login/LoginPasswordReset';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="create" element={<LoginCreate />}/>
        <Route path="lost" element={<LoginPasswordLost />}/>
        <Route path="reset" element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
};

export default Login;
