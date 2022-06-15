import React from 'react';

import './sigin-signup.style.style.scss';
import Signin from '../../components/sigin/signin';
import SignUp from '../../components/signup/signup';

const SignUpIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SignUpIn;
