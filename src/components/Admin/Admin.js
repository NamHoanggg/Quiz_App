import { Box, Flex } from "@mantine/core";
import SideBar from "./SideBar";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
};
export default Admin;
