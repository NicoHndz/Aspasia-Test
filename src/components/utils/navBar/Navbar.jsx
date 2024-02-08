import {
  AppBar,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-center gap-x-[3em] bg-[#C9D7DD]">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              color: isActive && "#F37422",
            };
          }}
          className={"font-semibold"}
        >
          HOME
        </NavLink>
        <NavLink
          to={"/favoritos"}
          style={({ isActive }) => {
            return {
              color: isActive && "#F37422",
            };
          }}
          className={"font-semibold"}
        >
          FAVORITOS
        </NavLink>
        <NavLink
          to={"/agregar"}
          style={({ isActive }) => {
            return {
              color: isActive && "#F37422",
            };
          }}
          className={"font-semibold"}
        >
          AGREGA UN LIBRO
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
