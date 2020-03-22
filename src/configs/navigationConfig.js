import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "home",
    title: "Inicio",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "paises",
    title: "Paises",
    type: "item",
    icon: <Icon.Map size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Paises"
  }
];

export default navigationConfig;
