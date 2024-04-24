import { Menu, Group, Text, UnstyledButton, Button } from "@mantine/core";
import {
  IconSettings,
  IconChevronDown,
  IconUserCircle,
  IconLogin,
  IconLogout,
} from "@tabler/icons-react";

import classes from "./Navigation.module.css";

const Settings = () => {
  return (
    // <Menu
    //   trigger="hover"
    //   openDelay={150}
    //   closeDelay={300}
    //   transitionProps={{ exitDuration: 0 }}
    //   withinPortal
    //   width={150}
    //   offset={0}
    //   shadow="sm"
    //   position="bottom-start"
    // >
    //   <Menu.Target>
    //     <UnstyledButton size="md" p={10} className={classes.settings}>
    //       <Group gap={5}>
    //         <IconSettings size={16} stroke={1.5} />
    //         <Text fw={500}>Settings</Text>
    //         <IconChevronDown size={16} stroke={1.5} />
    //       </Group>
    //     </UnstyledButton>
    //   </Menu.Target>

    //   <Menu.Dropdown className={classes.dropdown}>
    //     <Menu.Item
    //       className={classes.item}
    //       leftSection={<IconUserCircle size={16} stroke={1.5} />}
    //     >
    //       Profile
    //     </Menu.Item>
    //     <Menu.Item
    //       className={classes.item}
    //       leftSection={<IconLogin size={16} stroke={1.5} />}
    //     >
    //       Login
    //     </Menu.Item>
    //     <Menu.Item
    //       className={classes.item}
    //       leftSection={<IconLogout size={16} stroke={1.5} />}
    //     >
    //       Logout
    //     </Menu.Item>
    //   </Menu.Dropdown>
    // </Menu>

    <Group>
      <Button variant="default" size="md" radius="md">
        Log in
      </Button>
      <Button
        variant="default"
        size="md"
        radius="md"
        bg="#191919"
        c="#fff"
        className={classes.button}
      >
        Sign up
      </Button>
    </Group>
  );
};

export default Settings;
