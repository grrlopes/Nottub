import { Box, styled } from "@mui/material";

const Services = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "22vh",
  gap: 20,
});

const ServicesTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});

export { Services, ServicesTxt };
