document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('[name="timkiem"]');
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');
    var flag=0;
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        $(".slideshow").hide()
        $(".products>div>p").hide()
        products.forEach(function(item) {
            if (item.innerText.toLowerCase().includes(searchTerm)) {
                flag=1;
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
           
        }); 
        if (flag==0) alert('không tìm thấy ');
    });
  });
  