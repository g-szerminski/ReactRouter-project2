import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img404 from "../images/404.png";

const Header = () => {
  // const images = [img1, img2, img3];
  // const index = Math.floor(Math.random() * 3);
  // const img = images[index];
  return (
    <>
      {/* <img src={img} alt="header" /> */}
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={img1} alt="obrazek 1" />}
        />
        <Route
          path="/products"
          render={() => <img src={img2} alt="obrazek 2" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="obrazek 3" />}
        />
        <Route
          path="/admin"
          render={() => <img src={img1} alt="obrazek 4" />}
        />
        <Route render={() => <img src={img404} alt="obrazek błąd" />} />
      </Switch>
    </>
  );
};

export default Header;
