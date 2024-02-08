import React from "react";
import AddBookBox from "./AddBookBox";
import { BrowserRouter } from "react-router-dom";
import "../../../output.css";

export default {
  title: "Components/utils/addBookBox",
  component: AddBookBox,
};

export const Default = () => (
  <BrowserRouter>
    <AddBookBox />
  </BrowserRouter>
);
