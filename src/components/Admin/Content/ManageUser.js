import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text } from "@mantine/core";
import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        size="lg"
        closeOnClickOutside={false}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <Text fz={18} fw={500}>
                Add new user
              </Text>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body>
            <ModalCreateUser onClose={close} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Add new user</Button>
    </>
  );
};

export default ManageUser;
