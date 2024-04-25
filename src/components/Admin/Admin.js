import { Box, Flex } from "@mantine/core";
import SideBar from "./SideBar";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex>
      <SideBar collapsed={collapsed} />
      <Box flex={1}>
        <IconMenu2 onClick={() => setCollapsed(!collapsed)} />
        <Outlet />
      </Box>
    </Flex>
  );
};
export default Admin;
