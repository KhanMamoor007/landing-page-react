import React from "react";

import Divider from "../UI/Divider";

import Navbar from "../Nav/Navbar";
import Header from "../Header/Header";
import Clients from "../Clients/Clients";
import Features from "../Features/Features";
import Content from "../Content/Content";
import Metrix from "../Metrix/Metrix";
import Context from "../Context/Context";
import Frames from "../Frames/Frames";
import Product from "../Product/Product";
import SimpleCard from "../Card/Card";
import Footer from "../Footer/Footer";

export function Base() {
  return (
    <div>
      <Navbar />
      <Divider />

      <Header />
      <Divider />

      <Clients />
      <Divider />

      <Features />
      <Divider />

      <Content />
      <Divider />

      <Metrix />
      <Divider />

      <Context />
      <Divider />

      <Frames />
      <Divider />

      <Product />
      <Divider />

      <SimpleCard />
      <Divider />

      <Footer />
      <Divider />
    </div>
  );
}
