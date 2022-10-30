import { Box, CssBaseline, Divider, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
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
        alignItems="center"
      >
        <Outlet />
      </Stack>
    </Box>
  );
}

export { App };
