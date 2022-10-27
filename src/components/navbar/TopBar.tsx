import { IconButton, Menu, Typography } from "@mui/material";
import {
  Circle as CircleIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  KeyboardArrowDown as KeyArrowDownIcon,
} from "@mui/icons-material";
import * as S from "./Styles";
import { MouseEvent, useState } from "react";

const Topbar = () => {
  const [drop, setDrop] = useState<null | HTMLElement>(null);

  const open = Boolean(drop);

  const resourceOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setDrop(event.currentTarget);
  };

  const resourceClose = () => {
    setDrop(null);
  };

  return (
    <S.TopNavBar>
      <S.TopMenuIcon>
        <IconButton>
          <CircleIcon sx={{ fontSize: "50px", color: "blueviolet" }} />
        </IconButton>
        <Typography variant="h3" color="darkblue" fontWeight="bold">
          nottub
        </Typography>
      </S.TopMenuIcon>

      <S.TopMenuIcon sx={{ gap: "60px" }}>
        <S.About>About</S.About>

        <S.Services>Services</S.Services>

        <S.Resources
          id="resource_btn"
          aria-controls={open ? "resource_dropdown" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={resourceOpen}
        >
          Resource
          <KeyArrowDownIcon />
        </S.Resources>
        <Menu
          id="resource_dropdown"
          anchorEl={drop}
          open={open}
          onClose={resourceClose}
          MenuListProps={{
            "aria-labelledby": "resource_btn",
          }}
          elevation={0}
        >
          <S.ListMenu onClick={resourceClose}>
            <IconButton>
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            Button Blog
          </S.ListMenu>

          <S.ListMenu onClick={resourceClose}>
            <IconButton>
              <EmailIcon sx={{ color: "white" }} />
            </IconButton>
            Button Insight
          </S.ListMenu>
        </Menu>

        <S.Careers>Careers</S.Careers>
      </S.TopMenuIcon>
    </S.TopNavBar>
  );
};

export { Topbar };
