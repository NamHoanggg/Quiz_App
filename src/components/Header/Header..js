import { NavLink as Link } from "react-router-dom";
import { useState } from "react";
import {
  AppShell,
  Burger,
  Container,
  Group,
  Box,
  Image,
  Flex,
  UnstyledButton,
} from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";

import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import SearchMobile from "../NavbarMobile/SearchMobile";

const Header = ({ children }) => {
  const [burgerRef, setBurgerRef] = useState(null);
  const [navRef, setNavRef] = useState(null);
  const [opened, { toggle, close }] = useDisclosure();
  useClickOutside(() => close(), null, [burgerRef, navRef]);

  return (
    <AppShell
      withBorder={false}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        withBorder
        classNames={{
          header: classes.header,
        }}
      >
        <Container mx="auto" size="lg" h="100%">
          <Group h="100%" align="center">
            {/* Mobile */}
            <Box
              style={{
                minWidth: "calc(4rem* var(--mantine-scale))",
              }}
              hiddenFrom="sm"
            >
              <Burger
                opened={opened}
                onClick={toggle}
                size="md"
                ref={setBurgerRef}
              />
            </Box>
            <Flex hiddenFrom="sm" justify="center" flex={1}>
              <UnstyledButton component={Link} to="/">
                <Image
                  src="/assets/images/logo.png"
                  width={200}
                  height={52}
                  alt="logoMobile"
                />
              </UnstyledButton>
            </Flex>
            <Group align="center" hiddenFrom="sm" gap={10}>
              <SearchMobile />
            </Group>

            {/* Desktop */}
            <Group
              h="100%"
              align="center"
              style={{ flex: 1 }}
              justify="flex-start"
              visibleFrom="sm"
            >
              <Box>
                <UnstyledButton component={Link} to="/">
                  <Image
                    src="/assets/images/logo.png"
                    width={200}
                    height={52}
                    alt="logo"
                  />
                </UnstyledButton>
              </Box>
              <Group h="100%" mr="xl" gap={0} visibleFrom="sm" ml={10}>
                <Navigation />
              </Group>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar withBorder p="md">
        <NavbarMobile setNavRef={setNavRef} />
      </AppShell.Navbar>

      <AppShell.Main>
        <section id="content" className={classes.section}>
          <Container
            p={0}
            mx="auto"
            mb={{
              base: 50,
            }}
            mt={{ base: 20 }}
            size="lg"
            h="100%"
          >
            {children}
          </Container>
        </section>
      </AppShell.Main>
    </AppShell>
  );
};

export default Header;
