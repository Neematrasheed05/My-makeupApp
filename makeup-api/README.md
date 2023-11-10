# All Things Beauty

Welcome to All Things Beauty, an enchanting world of beauty where every brushstroke unveils a canvas of self-expression. This React-based makeup app allows users to explore featured products, discover a wide range of beauty items, and manage their shopping cart.

## Features

-   **Explore Now:** Dive into the world of beauty with the "Explore Now" button, leading you to a curated list of featured products.
    
-   **Featured Products:** Check out the featured products on the main page, each with a captivating image and brand name.
    
-   **All Products:** Explore the complete collection of beauty products on the "All Products" page, where you can view, add to cart, and manage your purchases.
    
-   **Shopping Cart:** Easily add products to your shopping cart and view them in the "Your Cart" section. Remove items if needed.
    

## Getting Started

Follow these steps to run the All Things Beauty app locally:

1.  Clone the repository:
  
    
    `git clone <repository-url>` 
    
2.  Install dependencies:
    
    
    
    `npm install` 
    
3.  Start the development server:
    
    
    
    `npm start` 
    
    The app will be accessible at `http://localhost:3000` in your web browser.
    

## Technologies Used

-   React
-   React Router
-   Bootstrap
-   JavaScript (ES6+)

## API Used

The app fetches beauty product data from the Makeup API [makeup-api.herokuapp.com](http://makeup-api.herokuapp.com/api/v1/products.json).

## Components

-   **MainComponent:** The main landing page with a welcome message, an "Explore Now" button, and a section for featured products.
    
-   **ProductList:** Fetches and provides the product data to the app. Renders the `DisplayComponent` for displaying products and `PaginationControls` for pagination.
    
-   **DisplayComponent:** Displays a paginated list of beauty products and handles the logic for adding items to the shopping cart.
    
-   **ProductItem:** Renders individual product cards with essential details and an "Add to Cart" button.
    
-   **PaginationControls:** Controls for navigating through paginated product lists.
    
-   **AddToCart:** Displays the user's shopping cart with the ability to remove items.
    
-   **Layout:** The main layout of the app, including navigation links and an outlet for rendering nested routes.
    

## Routes

-   **/list:** Displays all beauty products with pagination controls.
    
-   **/addtocart:** Shows the user's shopping cart.
    

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.



## Acknowledgments

-   Thanks to the Makeup API for providing the beauty product data.

Enjoy exploring the world of beauty with All Things Beauty! 💄🌟