import React from "react";

import { Provider } from "../../../context/ProjectContext";
import FavButton from "./FavButton";

export default {
  title: "Components/utils/FavButton",
  component: FavButton,
};

export const Default = () => (
  <Provider>
    <FavButton />
  </Provider>
);

export const withBadIsbn = () => (
    <Provider>
      <FavButton isbn="BAD-ISBN"/>
    </Provider>
  );