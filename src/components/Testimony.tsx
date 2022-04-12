import React from 'react';
import icon1 from '../assets/images/icon-1.svg';
import icon2 from '../assets/images/icon-2.svg';
import icon3 from '../assets/images/icon-3.svg';

const Testimony: React.FC = () => {
  return (
    <div className="testimony">
      <div className="container">
        <div className="quick-info">
          <img src={icon1} alt="Icon 1" />
          <h3>Sign up for free</h3>
          <p>
            Signing up and setting up your project takes less than 5 minutes
          </p>
        </div>
        <div className="quick-info">
          <img src={icon2} alt="Icon 2" />
          <h3>Source smarter</h3>
          <p>
            Our data-based AI and our experts will help you find exactly what
            you are looking for
          </p>
        </div>
        <div className="quick-info">
          <img src={icon3} alt="Icon 3" />
          <h3>Receive offers</h3>
          <p>
            With our insights you always receive high-quality proposals at the
            best price
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
