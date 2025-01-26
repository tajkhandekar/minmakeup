document.getElementById("add-product").addEventListener("click", function() {
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;

    if (productName && productPrice) {
        // Get existing products from localStorage, or create an empty array if none exists
        const products = JSON.parse(localStorage.getItem("products")) || [];

        // Add new product to the array
        products.push({ name: productName, price: productPrice });

        // Save updated products array back to localStorage
        localStorage.setItem("products", JSON.stringify(products));

        // Clear input fields
        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";

        // Optionally, redirect to product history page
        window.location.href = "history.html";
    }
});

function openDropDown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
