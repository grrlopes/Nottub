import { Box, CssBaseline, Divider, Stack } from "@mui/material";
import { Topbar } from "./components/navbar/TopBar";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Topbar />
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      ></Stack>
    </Box>
  );
}

export { App };
