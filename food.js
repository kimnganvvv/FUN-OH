document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('[name="timkiem"]');
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');
  
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        products.forEach(function(item) {
            if (item.innerText.toLowerCase().includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
  });
  