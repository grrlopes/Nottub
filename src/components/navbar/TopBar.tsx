import { MouseEvent, useState } from "react";
import { IconButton, Menu, Typography } from "@mui/material";
import {
  Circle as CircleIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  KeyboardArrowDown as KeyArrowDownIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [drop, setDrop] = useState<null | HTMLElement>(null);

  const open = Boolean(drop);

  const resourceOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setDrop(event.currentTarget);
  };

  const resourceClose = () => {
    setDrop(null);
  };

  const navigation = useNavigate();
  return (
    <S.TopNavBar>
      <S.TopMenu
        onClick={() => {
          navigation("");
        }}
      >
        <IconButton>
          <CircleIcon sx={{ fontSize: "50px", color: "blueviolet" }} />
        </IconButton>
        <Typography variant="h3" color="darkblue" fontWeight="bold">
          nottub
        </Typography>
      </S.TopMenu>

      <S.TopMenu>
        <S.TopMenuText>
          <S.About
            onClick={() => {
              navigation("about");
            }}
            disableRipple
          >
            About
          </S.About>

          <S.Services disableRipple>Services</S.Services>

          <S.Resources
            id="resource_btn"
            aria-controls={open ? "resource_dropdown" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={resourceOpen}
            disableRipple
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
              Btn sample 1
            </S.ListMenu>

            <S.ListMenu onClick={resourceClose}>
              <IconButton>
                <EmailIcon sx={{ color: "white" }} />
              </IconButton>
              Btn sample 2
            </S.ListMenu>
          </Menu>

          <S.Careers
            disableRipple
            onClick={() => {
              navigation("about");
            }}
          >
            Careers
          </S.Careers>
        </S.TopMenuText>

        <IconButton>
          <MenuIcon
            sx={{
              display: {
                lg: "none",
                md: "none",
                xs: "flex",
                sm: "none",
              },
              color: "blue",
              fontSize: "3rem",
            }}
          />
        </IconButton>
      </S.TopMenu>
    </S.TopNavBar>
  );
};

export { Topbar };
