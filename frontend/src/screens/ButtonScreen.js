import React from "react";
import {Button, Stack} from "react-bootstrap";

const ButtonScreen = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </>
  );
};

export default ButtonScreen;
