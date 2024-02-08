import React from "react";
import AddBookForm from "./AddBookForm";
import { Provider } from "../../context/ProjectContext";
import "../../output.css";


export default {
  title: "Components/addBookForm/AddBookForm",
  component: AddBookForm,
};

export const Default = () => (
  <Provider>
    <AddBookForm />
  </Provider>
);

