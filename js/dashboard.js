document.addEventListener("DOMContentLoaded", function() {
  const menuBar = document.querySelector(".menu-bar");
  const menuLinks = document.querySelectorAll(".menu-bar a");

  menuLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          menuLinks.forEach(item => item.classList.remove("active"));
          this.classList.add("active");
      });
  });

  // Toggle menu on small screens
  document.querySelector(".menu-toggle").addEventListener("click", function() {
      menuBar.classList.toggle("open");
  });

  // Search functionality (example)
  const searchBox = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");

  searchButton.addEventListener("click", function() {
      const query = searchBox.value.toLowerCase();
      alert("You searched for: " + query);
  });
});
