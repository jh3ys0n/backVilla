// CommonPage.js
import React from "react";
import Navbar from "./componets/navbar/Navbar";
import FooterHome from "./componets/HomePages/FooterHome";

function CommonPage({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    <FooterHome></FooterHome>
    </div>
  );
}

export default CommonPage;
