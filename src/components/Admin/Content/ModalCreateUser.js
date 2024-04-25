import { useForm } from "@mantine/form";
import { useCallback } from "react";
import {
  Button,
  Stack,
  TextInput,
  Group,
  PasswordInput,
  Divider,
  Select,
  FileInput,
} from "@mantine/core";

const ModalCreateUser = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      username: "",
      password: "",
      role: "USER",
    },

    validate: {
      email: (value) =>
        value === "" || value === null
          ? "Không được để trống"
          : /^\S+@\S+$/.test(value)
          ? ""
          : "Email không hợp lệ",
      password: (value) =>
        value === "" || value === null
          ? "Không được để trống"
          : value.length < 7
          ? "Mật khẩu phải lớn hơn 7 ký tự."
          : "",
      comfirmpassword: (value, values) =>
        value !== values.password
          ? "Không trùng mật khẩu."
          : value === "" || value === null
          ? "Không được để trống"
          : "",
    },
  });

  const handleTypeChange = useCallback(
    (data) => {
      form.setFieldValue("type", data?.value);
    },
    [form]
  );
  return (
    <Stack>
      <Divider c="#141414" size="xs" opacity={0.9} />
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Group mb={20}>
          <TextInput
            flex={1}
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            flex={1}
            withAsterisk
            label="Password"
            placeholder="********"
            {...form.getInputProps("password")}
          />
        </Group>

        <Group mb={20}>
          <TextInput
            flex={1}
            withAsterisk
            label="Username"
            placeholder="your username"
            {...form.getInputProps("username")}
          />
          <Select
            flex={1}
            withAsterisk
            label="Role"
            checkIconPosition="right"
            data={["USER", "ADMIN"]}
            value={form.getValues().type ? form.getValues().type : "USER"}
            onChange={(_value, option) => handleTypeChange(option)}
          />
        </Group>

        <Group>
          <FileInput
            flex={1}
            variant="filled"
            label="Image"
            placeholder="Upload image"
          />
        </Group>

        <Divider c="#141414" size="xs" my={20} opacity={0.9} />

        <Group justify="flex-end">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Stack>
  );
};

export default ModalCreateUser;
