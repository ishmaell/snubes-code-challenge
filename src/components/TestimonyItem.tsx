import React from 'react';
import { ITestimony } from '../models/ITestimony';

const TestimonyItem: React.FC<ITestimony> = ({
  id,
  image,
  attestant,
  message,
  position,
}) => {
  return (
    <li key={id}>
      <img className="attestant-image" src={image} alt={attestant} />
      <p className="message">{message}</p>
      <p className="attestant">
        <strong>{attestant},</strong> {position}
      </p>
    </li>
  );
};

export default TestimonyItem;
