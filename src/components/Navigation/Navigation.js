import { Flex, NavLink, Text } from "@mantine/core";
import { NavLink as Link } from "react-router-dom";
import { IconHome2, IconUser, IconUserStar } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Navigation.module.css";

const data = [
  {
    title: "Home",
    href: "/",
    icon: IconHome2,
  },
  {
    title: "User",
    href: "/user",
    icon: IconUser,
  },
  {
    title: "Admin",
    href: "/admin",
    icon: IconUserStar,
  },
];

const Navigation = () => {
  const [active, setActive] = useState(0);
  const navigationItems = data.map((item, index) => (
    <NavLink
      className={classes.navLink}
      component={Link}
      to={item.href}
      key={item.title}
      active={index === active}
      variant="subtle"
      label={
        <Text size="md" fw={500}>
          {item.title}
        </Text>
      }
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));
  return <Flex h="100%">{navigationItems}</Flex>;
};

export default Navigation;
