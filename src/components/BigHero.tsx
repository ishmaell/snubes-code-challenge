import React from 'react';
import Input from './Input';
import Button from './Button';
import useContactForm from '../hooks/ContactForm';

const BigHero: React.FC = () => {
  const { onSubmit, errors, isValid } = useContactForm();

  return (
    <section className="big-hero">
      <div className="container">
        <div className="cta-card">
          <h1>Find inbound call centers for your company</h1>
          <p>Use our AI and Big Data driven call center sourcing solution</p>
          <div className="cta-card-form">
            <form onSubmit={onSubmit}>
              <Input
                error={
                  errors.company && (
                    <span className="error-message">
                      {errors.company.message}
                    </span>
                  )
                }
                // register={register}
                classes="input"
                type="text"
                label="Company"
                placeholder="Company"
                name="company"
              />
              <Input
                error={
                  errors.fullname && (
                    <span className="error-message">
                      {errors.fullname.message}
                    </span>
                  )
                }
                // register={register}
                name="fullname"
                classes="input"
                type="text"
                label="Name"
                placeholder="Full name"
              />
              <Input
                error={
                  errors.phone && (
                    <span className="error-message">
                      {errors.phone.message}
                    </span>
                  )
                }
                // register={register}
                classes="input"
                type="text"
                phone={true}
                label="Phone"
                placeholder="+49"
                name="phone"
              />
              <Input
                error={
                  errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )
                }
                // register={register}
                classes="input"
                type="text"
                label="E-mail"
                placeholder="name@mail.com"
                name="email"
              />
              <div className="form-action">
                <Button
                  disabled={!isValid}
                  type="submit"
                  classes="button primary"
                >
                  Get informed
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="stats">
          <h2 className="stats-header">
            Welcome to Europe's largest call center database
          </h2>
          <div className="stats-info">
            <div className="stats-info-item">
              <h3>
                500+ <span>Tenders</span>
              </h3>
            </div>
            <div className="stats-info-item">
              <h3>
                200+ <span>Callcenter</span>
              </h3>
            </div>
            <div className="stats-info-item">
              <h3>
                375.000 <span>Agents available</span>
              </h3>
            </div>
            <div className="stats-info-item">
              <h3>
                85% <span>Faster sourcing</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigHero;
