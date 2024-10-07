document.querySelector('.payment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Assuming payment is successful for this example
  const paymentSuccessful = true;

  if (paymentSuccessful) {
      alert('Thank you for your patronage!');
      window.location.href = '/thankyou.html';
  } else {
      alert('Payment failed. Please try again.');
  }
});
