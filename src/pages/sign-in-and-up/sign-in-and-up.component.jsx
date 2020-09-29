import React from 'react';

import './sign-in-and-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import '../../components/sign-in/sign-in.component.jsx';

const SignInAndUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUpPage;