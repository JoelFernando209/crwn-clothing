import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${title}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
    
);

export default withRouter(MenuItem);