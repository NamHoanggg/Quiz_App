import { Group, Menu, rem, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Navigation.module.scss';

const NavLinkCustom = ({ title, href, subItems, Icon }) => {
  return subItems ? (
    <Menu
      trigger="hover"
      transitionProps={{ exitDuration: 0 }}
      withinPortal
      width={200}
      offset={0}
      shadow="sm"
      position="bottom-start"
    >
      <Menu.Target>
        <UnstyledButton component={Link} to={href} className={classes.navHomePage}>
          <Group gap={2} justify="center">
            {Icon && <Icon size={18} stroke={1.5} />}
            <span>{title}</span>
            <IconChevronDown size="0.9rem" stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {subItems.map((item) => (
          <Menu.Item
            my={rem(12.5)}
            key={item.title}
            component={Link}
            to={item.href}
            leftSection={item.Icon ? <item.Icon size={18} stroke={1.5} /> : undefined}
          >
            {item.title}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ) : (
    <UnstyledButton component={Link} to={href} className={classes.navHomePage}>
      <Group gap={5} justify="center">
        {Icon && <Icon size={18} stroke={1.5} />}
        <span>{title}</span>
      </Group>
    </UnstyledButton>
  );
};

export default NavLinkCustom;
