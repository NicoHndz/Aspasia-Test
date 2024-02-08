import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import "../../../output.css";

export default {
  title: "Components/utils/Navbar",
  component: Navbar,
};

export const Default = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);
