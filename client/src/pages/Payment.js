import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: '',
  });
  const [loading, setLoading] = useState(false);

  const bookingDetails = {
    service: 'Premium Plumbing Service',
    provider: 'Raj Kumar',
    date: '31 Mar 2026',
    time: '2:00 PM',
    basePrice: 500,
    gst: 90,
    discount: 50,
    total: 540,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Payment successful! Your booking is confirmed.');
      navigate('/bookings');
    }, 2000);
  };

  return (
    <div className="payment-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="payment-container">
        {/* Booking Summary */}
        <div className="booking-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Service</span>
            <span>{bookingDetails.service}</span>
          </div>
          <div className="summary-item">
            <span>Provider</span>
            <span>{bookingDetails.provider}</span>
          </div>
          <div className="summary-item">
            <span>Date & Time</span>
            <span>{bookingDetails.date} at {bookingDetails.time}</span>
          </div>
          <hr />
          <div className="summary-item">
            <span>Base Price</span>
            <span>₹{bookingDetails.basePrice}</span>
          </div>
          <div className="summary-item">
            <span>GST (18%)</span>
            <span>₹{bookingDetails.gst}</span>
          </div>
          <div className="summary-item discount">
            <span>Discount</span>
            <span>- ₹{bookingDetails.discount}</span>
          </div>
          <hr />
          <div className="summary-item total">
            <span>Total Amount</span>
            <span>₹{bookingDetails.total}</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="payment-form-section">
          <h2>Payment Method</h2>

          {/* Payment Method Tabs */}
          <div className="payment-methods">
            <button
              className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              💳 Credit/Debit Card
            </button>
            <button
              className={`method-btn ${paymentMethod === 'wallet' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('wallet')}
            >
              👛 Digital Wallet
            </button>
            <button
              className={`method-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              📱 UPI
            </button>
            <button
              className={`method-btn ${paymentMethod === 'bank' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('bank')}
            >
              🏦 Bank Transfer
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <form onSubmit={handlePayment} className="payment-form">
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength="19"
                />
              </div>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cardCVV"
                    placeholder="123"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    required
                    maxLength="4"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="pay-btn"
                disabled={loading}
              >
                {loading ? '⏳ Processing...' : `💰 Pay ₹${bookingDetails.total}`}
              </button>
            </form>
          )}

          {/* Other Payment Methods */}
          {paymentMethod !== 'card' && (
            <div className="other-payment">
              <p>Select your preferred {paymentMethod === 'wallet' ? 'digital wallet' : paymentMethod === 'upi' ? 'UPI app' : 'bank'}</p>
              <button
                className="pay-btn"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    alert('Redirecting to payment gateway...');
                    navigate('/bookings');
                  }, 2000);
                }}
              >
                Continue
              </button>
            </div>
          )}

          {/* Security Info */}
          <div className="security-info">
            <p>🔒 Your payment is secure and encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
