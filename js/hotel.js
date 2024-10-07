// Hotel array
const hotels = [
    { name: "Golden Sands Hotel", rooms: ["101", "102", "103", "104", "105"] },
    { name: "Princess Luxury Hotels", rooms: ["201", "202", "203", "204", "205"] },
    { name: "Rotana Hotel", rooms: ["301", "302", "303", "304", "305"] },
    { name: "Agbonna Lodge and Suite", rooms: ["401", "402", "403", "404", "405"] },
    { name: "Calm City Hotel", rooms: ["501", "502", "503", "504", "505"] }
];

// Function to confirm booking
function confirmBooking() {
    const hotelSelect = document.getElementById("hotel");
    const hotel = hotelSelect.value;
    const roomNumber = getRandomRoom(hotel);
    
    if (roomNumber) {
        alert(`Welcome to ${hotel} Kindly Book Your Stay by filling the Guest Form.`);
    } else {
        alert(`Error: Unable to find rooms for the selected hotel: ${hotel}`);
    }
}

// Function to get a random room number based on the selected hotel
function getRandomRoom(hotel) {
    const hotelObj = hotels.find(h => h.name === hotel);
    
    if (hotelObj) {
        const roomNumber = hotelObj.rooms[Math.floor(Math.random() * hotelObj.rooms.length)];
        return roomNumber;
    } else {
        return null;
    }
}

// Function to make payment
function makePayment() {
    window.location.href = "payment.html"; // Redirect to payment page
}
