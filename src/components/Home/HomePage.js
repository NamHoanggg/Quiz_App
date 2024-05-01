import { Stack, Text, Button, Grid } from '@mantine/core';
import videoHomePgae from '../../assets/videos/video-homepage.mp4';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Grid gutter="40">
      <Grid.Col span={6}>
        <video className={classes.video} autoPlay loop muted>
          <source src={videoHomePgae} type="video/mp4" />
        </video>
      </Grid.Col>

      <Grid.Col span={6}>
        <Stack gap={25} mt={40} align="flex-start" w="100%">
          <Stack gap={0}>
            <Text fz={{ base: 60 }} fw={500}>
              Make forms
            </Text>
            <Text fz={{ base: 60 }} fw={500} style={{ marginTop: '-10px' }}>
              worth filling out
            </Text>
          </Stack>

          <Text fz={{ base: 23 }}>
            Get more data—like signups, feedback, and anything <br /> else—with forms designed to be{' '}
            <Text span fw={500} fz={{ base: 23 }}>
              refreshingly different.
            </Text>
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
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default HomePage;
