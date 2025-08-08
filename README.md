# 🍕 Pizza Shop

**Pizza Shop** is a web application for ordering pizzas with a convenient catalog, filtering, pagination, and shopping cart.  
The project showcases a modern frontend stack built with React, TypeScript, and Vite.


<img width="1899" height="1167" alt="image" src="https://github.com/user-attachments/assets/f6e28bf6-1384-491b-a472-0c9ea0babdeb" />

##TRY-LIVE - https://dmitriidrugov.github.io/pizza-shop/

##Known Issue
Currently, the "Home" link in GitHub Pages navigation points to a non-existent route.
Status: A fix is in progress.

Temporary workaround:
After opening the deployed app, click the pizza logo in the top-left corner to return to the home page.
⚠️ Do not refresh the page while on other sections — this may result in a 404 error due to GitHub Pages routing limitations.


---

## 🚀 Features

- 📦 **Pizza list loading** from the server
- 🔎 **Filtering & sorting** (by price, popularity, etc.)
- 📄 **Pagination** for easy catalog browsing
- 🛒 **Shopping cart** with add/remove functionality
- 💰 **Real-time order total calculation**
- 📱 **Responsive design** for mobile devices
- ⚡ Fast build & deployment via GitHub Pages

---

## 🛠 Tech Stack

- **Vite** — fast build tool & dev server
- **React** — UI components
- **TypeScript** — static typing
- **React Router** — page routing
- **Redux Toolkit / Context API** — state management
- **Axios** — API requests
- **CSS Modules / SCSS** — styling
- **gh-pages** — GitHub Pages deployment

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/<your-username>/pizza-shop.git
cd pizza-shop

# Install dependencies
npm install

# Start the development server
npm run dev

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
