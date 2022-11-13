import { Icon, Typography } from "@mui/material";
import {
  Circle as CircleIcon,
  LinkedIn as LinkedIcon,
  Twitter as TwitterIcon,
  YouTube as YoutubeIcon,
} from "@mui/icons-material";

import { Box } from "@mui/system";
import * as S from "./Styles";

const Footer = () => {
  return (
    <S.FooterBox>
      <S.SocialMedia>
        <Icon>
          <CircleIcon />
        </Icon>
        <Typography variant="h3" color="darkblue" fontWeight="bold">
          nottub
        </Typography>
        <Box>
          <Icon sx={{ width: "3rem", height: "3rem" }}>
            <LinkedIcon sx={{ fontSize: "3rem" }} />
          </Icon>
          <Icon sx={{ width: "3rem", height: "3rem" }}>
            <YoutubeIcon sx={{ fontSize: "3rem" }} />
          </Icon>
          <Icon sx={{ width: "3rem", height: "3rem" }}>
            <TwitterIcon sx={{ fontSize: "3rem" }} />
          </Icon>
        </Box>
      </S.SocialMedia>
      <S.SocialText>
        <Typography>
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography>Privacy Policy.</Typography>
      </S.SocialText>
    </S.FooterBox>
  );
};

export { Footer };
