import { Card, CardMedia, Typography } from "@mui/material";
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
      </S.Mission>

      <S.Story>
        <S.StoryTxt>
          <Typography variant="h3" gutterBottom>
            Nibh venenatis cras sed.
          </Typography>

          <Typography variant="h6" gutterBottom>
            commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat
            scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Typography variant="h6" gutterBottom>
            commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat
            scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas
          </Typography>
        </S.StoryTxt>
        <Card sx={{ maxWidth: 675 }}>
          <CardMedia
            component="img"
            image="https://rlv.zcache.com/template_blank_add_your_image_text_here_classic_round_sticker-r64216cd6594f4f23bdad64fee876a3a1_v9waf_8byvr_512.jpg"
          />
        </Card>
      </S.Story>

      <S.Story>
        <S.StoryTxt>
          <Typography variant="h3" gutterBottom>
            Nibh venenatis cras sed.
          </Typography>

          <Typography variant="h6" gutterBottom>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. commodo
            ullamcorper a lacus vestibulum sed arcu non. Feugiat scelerisque
            varius morbi enim nunc faucibus. Fames ac turpis egestas Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris
          </Typography>
        </S.StoryTxt>
        <Card sx={{ maxWidth: 675 }}>
          <CardMedia
            component="img"
            image="https://rlv.zcache.com/template_blank_add_your_image_text_here_classic_round_sticker-r64216cd6594f4f23bdad64fee876a3a1_v9waf_8byvr_512.jpg"
          />
        </Card>
      </S.Story>
    </Fragment>
  );
};

export { About };
