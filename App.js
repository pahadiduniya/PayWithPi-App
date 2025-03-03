import React, { useState } from "react";
import { PiNetwork } from "pi-sdk"; // Ensure you have the Pi SDK installed

const PayWithPi = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    try {
      const payment = await PiNetwork.pay({
        amount: 1, // Amount in Pi Coins
        memo: "Payment for services",
        metadata: { orderId: "12345" }
      });

      if (payment.success) {
        setPaymentStatus("Payment Successful!");
      } else {
        setPaymentStatus("Payment Failed: " + payment.error);
      }
    } catch (error) {
      setPaymentStatus("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Pay with Pi</h1>
      <button
        onClick={handlePayment}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600"
      >
        Pay 1 Pi Coin
      </button>
      {paymentStatus && <p className="mt-4 text-lg text-green-600">{paymentStatus}</p>}
    </div>
  );
};

export default PayWithPi;
  
