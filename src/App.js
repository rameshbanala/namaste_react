import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 *
 * Planning for the app
 * food app
 * HEader
 *  - Logo
 *  - Nav items
 *    - Home
 *    - About
 *    - Contact
 *    - Cart
 * Body
 *  - search
 *  - Restaurants container
 *    - Cards container
 * Footer
 *  - Copyright
 *  - License
 *  - Contatus
 * - Social media links
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
