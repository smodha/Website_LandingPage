const shopButton = document.getElementById('shop-button');

shopButton.addEventListener('click', () => {
  // Send an HTTP GET request to the server when the button is clicked
  fetch('/products', { method: 'GET' })
    .then(response => {
      if (response.ok) {
        // If the response is successful, navigate to the "products.html" page
        window.location.href = 'products.html';
      } else {
        console.error('Error loading products page');
      }
    })
    .catch(error => {
      console.error('Network error: ', error);
    });
});