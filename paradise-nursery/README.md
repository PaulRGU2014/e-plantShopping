
# Paradise Nursery Shopping App

This is the final project for the "Paradise Nursery" shopping application. The app allows users to browse a variety of houseplants, add them to a shopping cart, and adjust quantities before checkout. Built with React, Redux Toolkit, and Vite.

## Features

- **Landing Page:**
	- Background image, company name, about paragraph, and a "Get Started" button.
- **Product Listing Page:**
	- At least six unique houseplants, grouped into three or more categories.
	- Each plant displays a thumbnail, name, price, and Add to Cart button (disables after adding).
- **Shopping Cart Page:**
	- Shows all items in the cart, with thumbnail, name, unit price, quantity controls, and delete button.
	- Displays total number of plants and total cost.
	- Checkout and continue shopping buttons.
- **Header/Navbar:**
	- Appears on product and cart pages, with navigation links and a dynamic cart icon showing total items.

## Project Structure

- `src/components/` — React components (AboutUs, ProductList, CartItem, Header)
- `src/redux/` — Redux slice and store
- `public/images/` — Plant and background images (placeholders included)

## Submission Details

- [AboutUs.jsx](src/components/AboutUs.jsx): Company details and landing page
- [App.css](src/App.css): Implements landing page background image
- [App.jsx](src/App.jsx): Routing and page structure
- [CartSlice.jsx](src/redux/CartSlice.jsx): Redux slice for shopping cart
- [ProductList.jsx](src/components/ProductList.jsx): Product listing page
- [CartItem.jsx](src/components/CartItem.jsx): Shopping cart page

## Deployment

This app is ready for deployment on GitHub Pages. See your course instructions for deployment steps.
