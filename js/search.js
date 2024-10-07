document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const locationFilter = document.getElementById('location-filter').value;
    const priceFilter = document.getElementById('price-filter').value;

    const hotels = document.querySelectorAll('.hotel-card');

    hotels.forEach(hotel => {
        const hotelDescription = hotel.getAttribute('data-description').toLowerCase();
        const hotelLocation = hotel.getAttribute('data-location');
        const hotelPrice = hotel.getAttribute('data-price');

        // Convert price range filter into numerical comparison
        let priceRange = hotelPrice.split('-').map(price => parseInt(price));
        let priceMin = priceRange[0];
        let priceMax = priceRange[1];

        let selectedMinPrice = parseInt(priceFilter.split('-')[0]) || 0;
        let selectedMaxPrice = parseInt(priceFilter.split('-')[1]) || Infinity;

        // Check if hotel matches the filters
        const matchesSearch = hotelDescription.includes(searchInput);
        const matchesLocation = locationFilter === "" || hotelLocation === locationFilter;
        const matchesPrice = priceFilter === "" || (priceMin >= selectedMinPrice && priceMax <= selectedMaxPrice);

        // Show or hide hotel based on the filter match
        if (matchesSearch && matchesLocation && matchesPrice) {
            hotel.style.display = 'block';
        } else {
            hotel.style.display = 'none';
        }
    });
});
