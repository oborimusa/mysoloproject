
  // JavaScript code to show an alert when the home page opens
  window.onload = function() {
      alert("Welcome to IrinAjo! Please sign in to access all features.");
  }
  


function closeBanner() {
    var banner = document.getElementById('signInBanner');
    banner.style.display = 'none';
}

      document.getElementById("searchForm").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
  
          const searchInput = document.getElementById("searchInput").value.toLowerCase();
          const hotels = [
              { name: "Golden Sand", link: "#", image: "/image/hotel.jpeg" },
              { name: "Agura Hotel", link: "/Hotel/hotel.html", image: "/image/Hotel4 (1).jpeg" },
              { name: "Dubai Hotel", link: "/Hotel/hotel.web", image: "/image/Dubai.webp" },
              { name: "Golden Palace", link: "/Hotel/hotel.html", image: "/image/h2.jpeg" },
              { name: "Rotana Hotel", link: "/Hotel/hotel.html", image: "/Image/Rotana.PNG" }
          ];
  
          const result = hotels.find(hotel => hotel.name.toLowerCase().includes(searchInput));
  
          const resultContainer = document.getElementById("searchResult");
          resultContainer.innerHTML = ""; // Clear previous results
  
          if (result) {
              resultContainer.innerHTML = `
                  <div>
                      <img src="${result.image}" class="card-img-top" alt="${result.name}" style="max-height: 1000px; width: 70rem; height: 60vh; object-fit: cover;">
                      <div class="card-body">
                          <h5 class="card-title">${result.name}</h5>
                          <a href="${result.link}" class="btn btn-primary" style="color: white;">Visit Hotel</a>
                      </div>
                  </div>
              `;
          } else {
              resultContainer.innerHTML = "<p>No hotels found matching your search.</p>";
          }
      });
  

