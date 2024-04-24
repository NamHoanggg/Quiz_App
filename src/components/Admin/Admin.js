import { Box, Flex } from "@mantine/core";
import SideBar from "./SideBar";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex>
      <SideBar collapsed={collapsed} />
      <Box flex={1}>
        <IconMenu2 onClick={() => setCollapsed(!collapsed)} />
      </Box>
    </Flex>
  );
};
export default Admin;
