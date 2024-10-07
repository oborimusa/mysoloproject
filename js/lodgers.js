document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lodgerForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Generate a random room number (for example, between 100 and 999)
        const roomNumber = Math.floor(100 + Math.random() * 900);

        // Display the room number in an alert with an additional message
        alert('Your room number is: ' + roomNumber + ' block C. Kindly make your payment.');

        // Redirect to the payment page
        window.location.href = "payment.html";
    });
});
