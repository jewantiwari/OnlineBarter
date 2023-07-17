import { moreProducts, bestSellers } from "./productList.js";

// Get references to the elements with IDs "cart", "search", and "login"
const cart = document.getElementById("cart");
const search = document.getElementById("search");
const login = document.getElementById("login");

// Initialize cartCount and alertMessage variables
let cartCount = 0;
let alertMessage = null;

// Function to generate product cards for best sellers
function generateBestSellers() {
  // Get reference to the container element for best sellers
  const bestSellersContainer = document.getElementById("bestSellers");

  // Loop through each product in bestSellers array and create a card
  bestSellers.forEach((product) => {
    const card = createProductCard(product);
    // Append the card to the best sellers container
    bestSellersContainer.appendChild(card);
  });
}

// Function to generate product cards for more products
function generateMoreProducts() {
  // Get reference to the container element for more products
  const moreProductsContainer = document.getElementById("moreProducts");

  // Loop through each product in moreProducts array and create a card
  moreProducts.forEach((product) => {
    const card = createProductCard(product);
    // Append the card to the more products container
    moreProductsContainer.appendChild(card);
  });
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add(
    "col-12",
    "col-md-6",
    "col-lg-4",
    "col-xl-3",
    "pb-3"
  );

  // Define the card's content using template literals
  const cardContent = `
    <div class='card'>
        <img src='${product.image}' class='card-img-top' alt='card-img-top'>
        <div class='card-body d-flex flex-column justify-content-between'>
            <div>
                <h5 class='card-title'>${product.name}</h5>
                <p class='card-text'>${product.description}</p>
            </div>
            <div class="d-flex mt-1 justify-content-between">
                <p class='card-text fs-5 fw-bold'>$ ${product.price}</p>
                <input type="number" class="ps-3" value="1" min="1" max="10">
            </div>
            <div class="d-flex justify-content-between">
                <button type='button' class='btn btn-yellow mt-1'>Add to cart</button>
                <button type='button' class='btn btn-green mt-1'>Buy Now</button>
            </div>
        </div>
    </div>
  `;

  // Set the card's HTML content
  card.innerHTML = cardContent;

  const addToCartButton = card.querySelector(".btn-yellow");
  addToCartButton.addEventListener("click", (e) => {
    e.preventDefault();
    const quantityInput = card.querySelector('input[type="number"]');
    //converts the quantity into integer with base of 10
    const quantity = parseInt(quantityInput.value, 10);

    // Check if quantity is greater than 0
    if (quantity > 0) {
      cartCount += quantity;
      // Update the cart HTML content with the updated cart count
      cart.innerHTML = `
        <div class="d-flex align-items-center">
            <a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
            class="bi bi-cart" viewBox="0 0 16 16">
            <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg> </a>
            <p class="text-center fs-4">+ ${cartCount}</p>
        </div>`;
    } else {
      alertMessage = alert("Please select a quantity greater than 0.");
    }
  });

  const buyNowButton = card.querySelector(".btn-green");
  buyNowButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Add your logic here to add the product to the cart
  });

  return card;
}

// Call the generateBestSellers function to generate the best sellers product cards
generateBestSellers();

// Call the generateMoreProducts function to generate the more products product cards
generateMoreProducts();

// Event listener for the cart element
cart.addEventListener("click", (e) => {
  e.preventDefault();
  // Check if cartCount is 0 and if there's an alertMessage
  if (cartCount === 0 && alertMessage !== null) {
    alertMessage.close(); // Close the alert message
    alertMessage = null; // Reset the alertMessage variable
  }
});

// Event listener for the search element
search.addEventListener("click", (e) => {
  e.preventDefault();
  // Add your logic here for search functionality
});

// Event listener for the login element
login.addEventListener("click", (e) => {
  e.preventDefault();
  // Add your logic here for login functionality
});