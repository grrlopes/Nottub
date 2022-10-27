import { Box, Button, MenuItem, styled } from "@mui/material";

const TopNavBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  marginTop: "8vh",
});

const About = styled(Button)(({ theme }) => ({
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

const Services = styled(Button)(({ theme }) => ({
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

const Resources = styled(Button)(({ theme }) => ({
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

const Careers = styled(Button)(({ theme }) => ({
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

const TopMenuText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingRight: "2.5vw",
  paddingLeft: "5vw",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const TopMenu = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingRight: "2.5vw",
  paddingLeft: "5vw",
});

const ListMenu = styled(MenuItem)({
  color: "white",
  backgroundColor: "blue",
  "&:hover": {
    backgroundColor: "blue",
  },
  marginBottom: "5px",
  paddingTop: "1.15vh",
  paddingBottom: "1.15vh",
  borderRadius: "10px",
});

export {
  About,
  Careers,
  ListMenu,
  Resources,
  Services,
  TopMenu,
  TopMenuText,
  TopNavBar,
};
