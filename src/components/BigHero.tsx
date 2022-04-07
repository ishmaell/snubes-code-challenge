import React from 'react';

const BigHero: React.FC = () => {
  return (
    <section className="big-hero">
      <div className="container">
        <div className="cta-card">
          <h1>Find inbound call centers for your company</h1>
          <p>Use our AI and Big Data driven call center sourcing solution</p>
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
