import { Container, Stack, Text, Button, Group } from "@mantine/core";
import videoHomePgae from "../../assets/videos/video-homepage2.mp4";
import classes from "./HomePage.module.css";
import { IconCheck } from "@tabler/icons-react";

const HomePage = () => {
  return (
    <Container fluid>
      <video className={classes.video} autoPlay loop muted>
        <source src={videoHomePgae} type="video/mp4" />
      </video>
      <Stack gap={30} mt={120} align="flex-start" w="100%">
        <Text fz={{ base: 50 }} fw={500}>
          There's a better way to ask
        </Text>

        <Text fz={{ base: 23 }} opacity={0.8}>
          You don't want to make a boring form. And your <br />
          audience won't answer one. Create a typeform <br />
          instead and make everyone happy.
        </Text>

        <Button
          className={classes.button}
          variant="default"
          size="lg"
          radius="md"
          bg="#191919"
          c="#fff"
        >
          Get's started. It's free
        </Button>

        <Stack gap={0} opacity={0.8}>
          <Group>
            <IconCheck stroke={1.5} />
            <Text fz={{ base: 14 }}>No credit card required</Text>
          </Group>
          <Group>
            <IconCheck stroke={1.5} />
            <Text fz={{ base: 14 }}>No time limit on Free plan</Text>
          </Group>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomePage;
