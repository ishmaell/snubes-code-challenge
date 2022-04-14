import React, { useState } from 'react';
import { ITestimony } from '../models/ITestimony';
import TestimonyItem from './TestimonyItem';
import clientOne from '../assets/images/client-1.png';
import partners from '../assets/images/partners.png';

const Testimonies: React.FC = () => {
  const [testimonies, setTestimonies] = useState<ITestimony[]>([
    {
      id: 1,
      image: clientOne,
      message:
        'Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.',
      attestant: 'Jan Brenneke',
      position: 'VP Operations',
    },
  ]);
  return (
    <div className="testimonies">
      <div className="container">
        <div className="testimony-content">
          <ul>
            {testimonies.map((testimony) => (
              <TestimonyItem
                id={testimony.id}
                image={testimony.image}
                message={testimony.message}
                attestant={testimony.attestant}
                position={testimony.position}
              />
            ))}
          </ul>
        </div>
        <div className="partners">
          <img src={partners} alt="Partners" />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
