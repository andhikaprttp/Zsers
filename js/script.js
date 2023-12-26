function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


// Fungsi untuk menghasilkan kartu produk
function generateProductCards(products) {
    const productCardsContainer = document.getElementById("productCards");
    productCardsContainer.innerHTML = ""; 

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col", "product-card");

        card.innerHTML = `
            <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.preview}</p>
                    <button class="btn btn-dark" onclick="showProductDetails(${product.id})">Detail</button>
                </div>
            </div>
        `;

        productCardsContainer.appendChild(card);
    });
}


function showProductDetails(productId) {
  fetch("/js/data.json")
    .then(response => response.json())
    .then(productsData => {
      const selectedProduct = productsData.find((product) => product.id === productId);

      const modalBody = document.getElementById("productModalBody");
      modalBody.innerHTML = `
        <img src="${selectedProduct.imageUrl}" class="card-img-top mb-3" alt="${selectedProduct.title}">
        <h5 class="modal-title">${selectedProduct.title}</h5>
        <p>${selectedProduct.description}</p>
      `;

      const productModal = new bootstrap.Modal(document.getElementById('productModal'));
      productModal.show();
    });
}


