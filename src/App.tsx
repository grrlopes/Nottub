import { Box, CssBaseline, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Topbar } from "./components/navbar/TopBar";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Stack
        direction="column"
        spacing={12}
        padding="0 5vw 0 5vw"
        marginTop="5vh"
      >
        <Topbar />
        <Outlet />
      </Stack>
    </Box>
  );
}

export { App };
