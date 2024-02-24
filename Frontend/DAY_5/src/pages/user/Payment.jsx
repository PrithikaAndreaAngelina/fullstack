import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ amount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    // In a real scenario, you would integrate a payment processing library and handle the transaction securely on the server side.
    // Here, we'll simulate a successful payment after 2 seconds.
    setTimeout(() => {
      setPaymentSuccessful(true);
      alert("Payment Successful");
      // Redirect to the home page after successful payment
      navigate('/user/services');
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
      {!isPaymentSuccessful && (
        <>
          <div className="mb-4">
            <p className="font-semibold">Payment Details:</p>
            <p className="text-gray-600">Amount: Rs.{amount}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-600">
              Select Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-select mt-1 block w-full rounded-md border-gray-300"
            >
              <option value="" disabled>Select payment method</option>
              <option value="CreditCard">Credit Card</option>
              <option value="DebitCard">Debit Card</option>
              <option value="NetBanking">Net Banking</option>
              {/* Add more payment methods as needed */}
            </select>
          </div>
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            Confirm Payment
          </button>
        </>
      )}
      {isPaymentSuccessful && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          <p className="font-bold">Payment Successful!</p>
          {/* You can add additional information or redirect to a success page here */}
        </div>
      )}
    </div>
  );
};

export default Payment;
