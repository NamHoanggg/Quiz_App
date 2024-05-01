import { useForm } from '@mantine/form';
import { useCallback, useState, useRef } from 'react';
import {
  Button,
  Stack,
  TextInput,
  Group,
  PasswordInput,
  Divider,
  Select,
  FileInput,
  Modal,
  Text,
  BackgroundImage,
  Box,
  AspectRatio,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ImageUpload from '../../../assets/images/images-upload.jpg';

const ModalCreateUser = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [tempImage, setTempImage] = useState('');
  const uploadImageRef = useRef(null);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      username: '',
      password: '',
      role: 'USER',
      image: '',
    },

    validate: {
      email: (value) =>
        value === '' || value === null
          ? 'Không được để trống'
          : /^\S+@\S+$/.test(value)
          ? ''
          : 'Email không hợp lệ',
      password: (value) =>
        value === '' || value === null
          ? 'Không được để trống'
          : value.length < 7
          ? 'Mật khẩu phải lớn hơn 7 ký tự.'
          : '',
      comfirmpassword: (value, values) =>
        value !== values.password
          ? 'Không trùng mật khẩu.'
          : value === '' || value === null
          ? 'Không được để trống'
          : '',
    },
  });

  const handleTypeChange = useCallback(
    (data) => {
      form.setFieldValue('role', data?.value);
    },
    [form],
  );

  const handleChangeImageQuiz = useCallback(
    (newValue) => {
      if (newValue) {
        // await uploadQuizImageToStorage(newValue);
        const objectUrl = URL.createObjectURL(newValue);
        setTempImage(objectUrl);
        // form.setFieldValue("image", `media/quizImage/${newValue?.name}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form],
  );

  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        size="lg"
        closeOnClickOutside={false}
        centered
        transitionProps={{
          transition: 'fade',
          duration: 300,
          timingFunction: 'linear',
        }}
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
            <Stack>
              <Divider c="#141414" size="xs" opacity={0.9} />
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Group mb={20}>
                  <TextInput
                    data-autofocus
                    flex={1}
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                  />
                  <PasswordInput
                    flex={1}
                    withAsterisk
                    label="Password"
                    placeholder="********"
                    {...form.getInputProps('password')}
                  />
                </Group>
                <Group mb={20}>
                  <TextInput
                    flex={1}
                    withAsterisk
                    label="Username"
                    placeholder="your username"
                    {...form.getInputProps('username')}
                  />
                  <Select
                    flex={1}
                    withAsterisk
                    label="Role"
                    checkIconPosition="right"
                    data={['USER', 'ADMIN']}
                    value={form.getValues().role ? form.getValues().role : 'USER'}
                    onChange={(_value, option) => handleTypeChange(option)}
                  />
                </Group>
                <Stack gap={5}>
                  <Text fz={14} fw={500}>
                    Upload Image
                  </Text>
                  <Stack gap={0} style={{ border: '1px  dashed #ccc' }}>
                    {/* <Box mx="auto">
                      <BackgroundImage
                        style={{
                          cursor: "pointer",
                        }}
                        mih={150}
                        miw={150}
                        src={tempImage || ImageUpload}
                        radius="sm"
                        onClick={() => uploadImageRef?.current?.click()}
                      >
                        <FileInput
                          display="none"
                          variant="unstyled"
                          accept="image/png,image/jpeg,"
                          ref={uploadImageRef}
                          onChange={(payload) => {
                            handleChangeImageQuiz(payload);
                          }}
                        />
                      </BackgroundImage>
                    </Box> */}
                    <Box w="100%">
                      <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
                        <img
                          style={{
                            cursor: 'pointer',
                            objectFit: 'cover',
                          }}
                          src={tempImage || ImageUpload}
                          alt="Upload"
                          onClick={() => uploadImageRef?.current?.click()}
                        />
                        <FileInput
                          display="none"
                          variant="unstyled"
                          accept="image/png,image/jpeg,"
                          ref={uploadImageRef}
                          onChange={(payload) => {
                            handleChangeImageQuiz(payload);
                          }}
                        />
                      </AspectRatio>
                    </Box>
                  </Stack>
                </Stack>
                <Divider c="#141414" size="xs" my={20} opacity={0.9} />
                <Group justify="flex-end">
                  <Button variant="filled" color="var(--mantine-color-gray-6)" onClick={close}>
                    Close
                  </Button>
                  <Button type="submit">Save</Button>
                </Group>
              </form>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Add new user</Button>
    </>
  );
};

export default ModalCreateUser;
