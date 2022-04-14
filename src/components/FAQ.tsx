import React from 'react';
import Input from './Input';
import Button from './Button';
import stamp from '../assets/images/stamp.png';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="fax-text-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faqs">
            <div className="question">
              <h4>Are the call centers verified?</h4>
              <p>
                All call centers in our database are checked by quality
                assurance experts. We also take a look at their data and track
                the key performance indicators. In addition, clients rate call
                centers and share their customer experience.
              </p>
            </div>
            <div className="question">
              <h4>Which inbound services are offered at Snubes?</h4>
              <p>
                Our listed call centers offer a broad spectrum of customer
                services, such as technical support, first-level support,
                helpdesk, overflow/after-hours support, etc.
              </p>
            </div>
            <div className="question">
              <h4>Are there any costs?</h4>
              <p>
                The services of Snubes are free of charge and our call center
                experts advise you independently and personally. Together we
                strive to find the optimal solution.
              </p>
            </div>
          </div>
          <div className="stamp">
            <img src={stamp} alt="Stamp" />
          </div>
        </div>
        <div className="faq-form-area">
          <div className="header">
            <h2>Find inbound call centers</h2>
          </div>
          <div className="faq-form">
            <Input
              classes="input"
              type="text"
              label="Company"
              placeholder="Company"
            />
            <Input
              classes="input"
              type="text"
              label="Name"
              placeholder="Full name"
            />
            <Input
              classes="input"
              type="text"
              phone={true}
              label="Phone"
              placeholder="+49"
            />
            <Input
              classes="input"
              type="text"
              label="E-mail"
              placeholder="name@mail.com"
            />
            <div className="form-action">
              <Button classes="button primary">Get informed</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
