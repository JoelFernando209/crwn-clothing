import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted,...otherProps }) => (
  <button
  type='submit'
  className={`${isGoogleSignIn ? 'google-sign-in':''} ${inverted ? 'inverted':''}  custom-button`} {...otherProps }
  >
    {children}
  </button>
);

export default CustomButton;