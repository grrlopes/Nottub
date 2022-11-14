import { Box, styled } from "@mui/material";

const Story = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
});

const StoryTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
  gap: 25,
});

const Mission = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "22vh",
  gap: 20,
});

const MissionTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});

const PlaceWork = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "22vh",
  gap: 20,
});

const PlaceWorkTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});

const ThinkWork = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "22vh",
  gap: 20,
});

const ThinkWorkTxt = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "60vw",
});

export {
  Mission,
  MissionTxt,
  PlaceWork,
  PlaceWorkTxt,
  Story,
  StoryTxt,
  ThinkWork,
  ThinkWorkTxt,
};
