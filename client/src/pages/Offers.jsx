import React from 'react';
import '../styles/Offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Welcome Bonus',
      code: 'WELCOME50',
      discount: '50% OFF',
      description: 'Get 50% off on your first service',
      validTill: '31 Dec 2026',
      image: '🎁',
    },
    {
      id: 2,
      title: 'Referral Program',
      code: 'REFER100',
      discount: '₹100 OFF',
      description: 'Refer a friend and get ₹100 credit',
      validTill: '31 Dec 2026',
      image: '👥',
    },
    {
      id: 3,
      title: 'Spring Cleaning Special',
      code: 'SPRING30',
      discount: '30% OFF',
      description: 'Special offer on all cleaning services',
      validTill: '30 Apr 2026',
      image: '🧹',
    },
    {
      id: 4,
      title: 'Plumbing Pack',
      code: 'PLUMB25',
      discount: '25% OFF',
      description: 'Save on multiple plumbing services',
      validTill: '15 Apr 2026',
      image: '🔧',
    },
    {
      id: 5,
      title: 'Loyalty Rewards',
      code: 'LOYAL20',
      discount: '20% OFF',
      description: 'Extra discount for returning customers',
      validTill: '31 Dec 2026',
      image: '🏆',
    },
    {
      id: 6,
      title: 'Flash Sale',
      code: 'FLASH40',
      discount: '40% OFF',
      description: 'Limited time offer on select services',
      validTill: '31 Mar 2026',
      image: '⚡',
    },
  ];

  return (
    <div className="offers-page">
      <div className="offers-hero">
        <h1>Special Offers & Deals</h1>
        <p>Save more on your favorite services</p>
      </div>

      <div className="offers-container">
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image">{offer.image}</div>
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p className="description">{offer.description}</p>
                <div className="offer-code">
                  <span className="code-label">Code:</span>
                  <span className="code-value">{offer.code}</span>
                  <button className="copy-btn">📋 Copy</button>
                </div>
                <p className="valid-till">Valid till: {offer.validTill}</p>
              </div>
              <div className="offer-discount">{offer.discount}</div>
              <button className="apply-btn">Apply</button>
            </div>
          ))}
        </div>
      </div>

      {/* Terms Section */}
      <section className="terms-section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Offers valid for new and existing users</li>
          <li>One offer per booking</li>
          <li>Minimum booking value may apply</li>
          <li>Cannot be combined with other offers</li>
          <li>Valid only for the specified duration</li>
        </ul>
      </section>
    </div>
  );
};

export default Offers;
