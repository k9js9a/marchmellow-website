import React from "react";
import StaggeredMenu, {
  type StaggeredMenuItem,
  type StaggeredMenuSocialItem,
} from "./staggered-menu";

const menuItems: StaggeredMenuItem[] = [
  { label: "About", ariaLabel: "Navigate to about page", link: "/about" },
  {
    label: "Contacts",
    ariaLabel: "Navigate to contacts page",
    link: "/contacts",
  },
];

const socialItems: StaggeredMenuSocialItem[] = [
  {
    label: "Github",
    link: "#",
  },
  {
    label: "LinkedIn",
    link: "#",
  },
  {
    label: "Fastwork",
    link: "#",
  },
];

export default function Navigation() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      isFixed
    />
  );
}
