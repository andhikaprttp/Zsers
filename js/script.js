const productsData = [
  {
    "id": 1,
    "category": "coal",
    "title": "Coal",
    "preview": "Coal is a combustible black or brownish-black sedimentary rock",
    "description": "Coal is a combustible black or brownish-black sedimentary rock, formed as rock strata called coal seams. Coal is mostly carbon with variable amounts of other elements, chiefly hydrogen, sulfur, oxygen, and nitrogen.",
    "imageUrl": "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "category": "kopi",
    "title": "Coffee",
    "preview": "A coffee bean is a fruit from the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit. This fruit is often referred to as a coffee cherry, and like the cherry, it is a stone fruit.",
    "description": "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pit inside the red or purple fruit. This fruit is often called a cherry, and like the cherry, it is a stone fruit.",
    "imageUrl": "https://images.unsplash.com/photo-1702430179297-4d9825e4b827?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "category": "briquette",
    "title": "Briquette",
    "preview": "Briquette is a compressed block of coal dust or other combustible biomass material used for fuel and kindling to start a fire.",
    "description": "Briquette is a compressed block of coal dust or other combustible biomass material used for fuel and kindling to start a fire.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Charcoal2.jpg/800px-Charcoal2.jpg"
  }
];

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
  const selectedProduct = productsData.find((product) => product.id === productId);

  const modalBody = document.getElementById("productModalBody");
  modalBody.innerHTML = `
    <img src="${selectedProduct.imageUrl}" class="card-img-top mb-3" alt="${selectedProduct.title}">
    <h5 class="modal-title">${selectedProduct.title}</h5>
    <p>${selectedProduct.description}</p>
  `;

  const productModal = new bootstrap.Modal(document.getElementById('productModal'));
  productModal.show();
}

generateProductCards(productsData);
