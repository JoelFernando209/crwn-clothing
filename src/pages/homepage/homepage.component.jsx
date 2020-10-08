import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';

import './Homepage.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to CRWN Clothing.</h1>
    <Directory />
  </div>
);

export default HomePage;