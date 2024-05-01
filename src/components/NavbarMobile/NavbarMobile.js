import { Flex, Group, Overlay, Text } from '@mantine/core';

const NavbarMobile = ({ setNavRef }) => {
  return (
    <Flex pos="relative" w="100%" h="100%" direction="column">
      <Flex
        w="80%"
        h="100%"
        direction="column"
        ref={setNavRef}
        bg="#ffff"
        style={{ zIndex: 2 }}
        py="md"
      >
        <Flex flex={1} direction="column"></Flex>

        <Flex direction="column" justify="center" align="center" gap={5}>
          <Group>{/* <Social variant="subtle" size={24} c="#000" /> */}</Group>
          <Text ta="center" c="#ccc" fz={{ base: 10 }}>
            @2024 All Rights Reserved
          </Text>
        </Flex>
      </Flex>
      <Overlay color="#000" backgroundOpacity={0.1} blur={4} pos="absolute" zIndex={0} />
    </Flex>
  );
};

export default NavbarMobile;
