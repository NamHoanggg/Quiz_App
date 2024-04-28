import NavLinkCustom from "./NavLinkCustom";

import { IconHome2, IconUser, IconUserStar } from "@tabler/icons-react";

const Navigation = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      Icon: IconHome2,
    },
    {
      title: "User",
      href: "/user",
      Icon: IconUser,
    },
    {
      title: "Admin",
      href: "/admin",
      Icon: IconUserStar,
    },
  ];

  return navigationItems.map((item) => (
    <NavLinkCustom key={item.title} {...item} />
  ));
};
export default Navigation;
