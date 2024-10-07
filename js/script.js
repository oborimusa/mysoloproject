// Available Hotels
const hotels = [
    "Princess Luxury Hotel",
    "Whitefield Hotels",
    "Golden Sand Hotel",
    "Agbonna Lodge and Suite",
    "Rotana Hotel",
    "Millennium Hotel",
    "Intercontinental Harmony Hotel",
    "Dubai Hotel",
];

// Lodger Signup Form
function showLodgerForm() {
    document.getElementById('signupModal').style.display = 'none';
    document.getElementById('booking').style.display = 'block';
}

document.getElementById('lodgerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let fullName = document.getElementById('fullName').value;
    let idCard = document.getElementById('idCard').files[0];
    
    // Validate and Submit the form
    if (fullName && idCard) {
        // Submit Form (You can implement AJAX or other methods here)
        alert('Form Submitted Successfully!');
    } else {
        alert('Please fill all the fields!');
    }
});

// Existing Code ...

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function toggleHotelDropdown() {
    let dropdownContent = document.getElementById("hotelDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
        populateHotelDropdown();
    }
}

function populateHotelDropdown() {
    let dropdownContent = document.getElementById("hotelDropdown");
    dropdownContent.innerHTML = ''; // Clear previous items
    
    hotels.forEach(hotel => {
        let hotelLink = document.createElement('a');
        hotelLink.textContent = hotel;
        hotelLink.href = '#'; // Add hotel link functionality if needed
        dropdownContent.appendChild(hotelLink);
    });
}
