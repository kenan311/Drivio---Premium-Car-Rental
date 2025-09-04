import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

export default function PaymentModal({ open, onClose, car, booking, onSuccess, lang = 'en' }) {
  const [step, setStep] = useState(1); // 1: Payment, 2: Processing, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);

  const content = {
    en: {
      title: 'Complete Payment',
      paymentMethod: 'Payment Method',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      cardholderName: 'Cardholder Name',
      total: 'Total Amount',
      payNow: 'Pay Now',
      processing: 'Processing Payment...',
      success: 'Payment Successful!',
      bookingConfirmed: 'Your booking has been confirmed.',
      close: 'Close',
      card: 'Credit/Debit Card',
      paypal: 'PayPal',
      apple: 'Apple Pay',
      google: 'Google Pay'
    },
    sq: {
      title: 'Përfundo Pagesën',
      paymentMethod: 'Mënyra e Pagesës',
      cardNumber: 'Numri i Kartës',
      expiryDate: 'Data e Skadimit',
      cvv: 'CVV',
      cardholderName: 'Emri i Mbajtësit të Kartës',
      total: 'Shuma Totale',
      payNow: 'Paguaj Tani',
      processing: 'Duke përpunuar pagesën...',
      success: 'Pagesa u Krye!',
      bookingConfirmed: 'Rezervimi juaj u konfirmua.',
      close: 'Mbyll',
      card: 'Kartë Krediti/Debiti',
      paypal: 'PayPal',
      apple: 'Apple Pay',
      google: 'Google Pay'
    }
  };
  const t = content[lang] || content.en;

  const handlePayment = async () => {
    setLoading(true);
    setStep(2);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setStep(3);
    setLoading(false);
    
    // Call success callback after a delay
    setTimeout(() => {
      onSuccess && onSuccess();
      onClose();
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value) => {
    return value.replace(/\D/g, '').replace(/(.{2})/, '$1/').slice(0, 5);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          {step === 1 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold font-display">{t.title}</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              {/* Car Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900">{car?.brand} {car?.model}</h4>
                <p className="text-sm text-gray-600">
                  {booking?.pickup} - {booking?.dropoff} ({booking?.days} days)
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">{t.total}</span>
                  <span className="text-lg font-bold text-slate-900">€{booking?.total}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t.paymentMethod}
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'card', label: t.card, icon: '💳' },
                    { id: 'paypal', label: t.paypal, icon: '🅿️' },
                    { id: 'apple', label: t.apple, icon: '🍎' },
                    { id: 'google', label: t.google, icon: 'G' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        paymentMethod === method.id
                          ? 'border-slate-900 bg-slate-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{method.icon}</span>
                      <span className="font-medium">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Details */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.cardNumber}
                    </label>
                    <input
                      type="text"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: formatCardNumber(e.target.value)})}
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.expiryDate}
                      </label>
                      <input
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: formatExpiry(e.target.value)})}
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.cvv}
                      </label>
                      <input
                        type="text"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                        placeholder="123"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.cardholderName}
                    </label>
                    <input
                      type="text"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handlePayment}
                disabled={paymentMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name)}
                className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t.payNow}
              </button>
            </>
          )}

          {step === 2 && (
            <div className="text-center py-8">
              <LoadingSpinner size="lg" text={t.processing} />
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-3xl text-green-600">✓</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.success}</h3>
              <p className="text-gray-600 mb-6">{t.bookingConfirmed}</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                {t.close}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

