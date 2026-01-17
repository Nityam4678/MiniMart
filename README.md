# 🛒 Ecomzy – Frontend E-Commerce UI
Ecomzy is a modern **dark-themed, glassmorphic e-commerce frontend** built using **React, Redux, Tailwind CSS, and custom CSS**.

This is a **frontend-only project**. No backend, payment gateway, or API is implemented.

 ![Main Page](public/MainPage.png)

## Features

-  Dark UI with modern gradients  
-  Glassmorphism design (blurred cards & navbar)  
-  Smooth animations & transitions  
-  Product listing UI  
-  Cart functionality using Redux  
-  Cart summary page  
-  Fully responsive layout  


## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- Custom CSS
- JavaScript (ES6+)


## 📁 Project Structure

src/
│── components/ # Reusable UI components
│── pages/ # Pages (Home, Cart)
│── redux/
│ ├── store.js # Redux store
│ └── cartSlice.js # Cart logic
│── data/ # Static product data
│── styles/ # Custom CSS & animations
│── App.jsx
│── main.jsx

##  Cart & Checkout Behavior


- Cart state is managed using **Redux**
- Users can:
  - Add items to cart
  - Remove items from cart
  - View total items and total price

  ## 🛠️ Installation & Run

```bash
git clone https://github.com/your-username/MiniMart.git
cd ecomzy
npm install
npm run dev