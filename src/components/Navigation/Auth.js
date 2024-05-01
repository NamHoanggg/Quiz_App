import { Group, Button } from '@mantine/core';

import classes from './Navigation.module.scss';

const Auth = () => {
  return (
    <Group gap={0}>
      <Button variant="transparent" size="md" c="#191919" className={classes.button}>
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

export default Auth;
