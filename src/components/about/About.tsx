import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import * as S from "./Styles";

const About = () => {
  return (
    <Fragment>
      <S.Mission>
        <S.MissionTxt>
          <Typography variant="h3" gutterBottom>
            Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tempor
            scelerisque varius morbi enim nunc faucibus.
          </Typography>

          <Typography variant="h6" gutterBottom>
            commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat
          </Typography>
        </S.MissionTxt>
        <Box></Box>
      </S.Mission>
      <S.Story>
        <S.StoryTxt>
          <Typography variant="h4" gutterBottom>
            Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tempor
            scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas
            sed tempus urna et
          </Typography>

          <Typography variant="h6" gutterBottom>
            commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat
            scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas
          </Typography>
        </S.StoryTxt>
        <Box>
          <Typography>dfsdfsd</Typography>
        </Box>
      </S.Story>
    </Fragment>
  );
};

export { About };
