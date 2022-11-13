import { Box, styled } from "@mui/material";

const FooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent:"space-between",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10vh",
  },
  height: "20vh",
  gap: 10,
}));

const SocialMedia = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
}));

const SocialText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 35,
}));

export { FooterBox, SocialMedia, SocialText };
