# JavaScript Frameworks

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e672636-d299-4101-a131-4a5962f5158e/deploy-status)](https://app.netlify.com/sites/javascript-frameworks-ca/deploys)

## Goal

To apply knowledge of React to build an eCom store.
See brief below.

## Description

"Shop is a mock e-commerce store with cart capabilities and simulated checkout. For the cart it uses context and reducer. It also has settings to adjust the theme colors and borders that persists in local storage.
I also added a Cart page before the Checkout, Sales and Categories Routes - extra steps in regards to the Brief."

## Deployment

https://javascript-frameworks-ca.netlify.com

## Built With

- Vite
- React
- React-Router-DOM
- Styled-Components
- Fontawesome

## Getting Started

For installation

```
npm i
```

For building Vite project

```
npm run build
```

For development mode

```
npm run dev
```

For development mode on network

```
npm run network
```

For running eslint

```
npm run lint
```

## Brief

The API you are using for this brief is: https://api.noroff.dev/api/v1/online-shop

You can find individual items by appending a product ID at the end of the API URL e.g. https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435

You are tasked with build out the following pages for an eCom store:

- Homepage
- Individual product page
- Cart page
- Checkout success page
  The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

- Full name (Minimum number of characters is 3, required)
- Subject (Minimum number of characters is 3, required)
- Email (Must be a valid email address, required)
- Body (Minimum number of characters is 3, required)
- You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Contact

[email](mailto:daniel.vier@gmail.com)
