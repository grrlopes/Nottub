import { Box, styled } from "@mui/material";

const AboutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  marginBottom: "15vh",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10vh",
  },
  gap: 10,
}));

const Story = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
});

const StoryTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});

const Mission = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "22vh",
  gap: 20
});

const MissionTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});
export { Mission, MissionTxt, Story, StoryTxt };
