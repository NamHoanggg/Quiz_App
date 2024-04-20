import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      classNamesPrefix="quiz"
      defaultColorScheme="light"
    >
      {children}
    </MantineProvider>
  );
};
