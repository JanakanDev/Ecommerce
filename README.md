# E-Commerce React Project

This is a simple e-commerce website built with React. The website includes a header with navigation, a homepage with a special offer message, and product pages for different categories.

## Features

- **Header**: Contains a logo and navigation links to different categories (`Men`, `Women`, `Electronics`, `Furniture`). Clicking on the logo redirects to the homepage.
- **Dropdowns**: Each category link has a dropdown menu with different items.
- **Product Pages**: Clicking on a dropdown item redirects to a product page with three items for the selected category.
- **Homepage**: Displays a special offer message and a visually appealing sale announcement.

## Project Structure

```plaintext
src/
├── components/
│   ├── Header.js
│   ├── Offer.js
├── css/
│   ├── Home.css
│   ├── MenProducts.css
│   ├── WomenProducts.css
│   ├── ElectronicsProducts.css
│   ├── FurnitureProducts.css
├── pages/
│   ├── Home.js
│   ├── MenProducts.js
│   ├── WomenProducts.js
│   ├── ElectronicsProducts.js
│   ├── FurnitureProducts.js
├── App.js
├── index.css
├── index.js
