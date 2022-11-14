import { Button, Card, CardMedia, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

      <S.PlaceWork>
        <S.PlaceWorkTxt>
          <Typography variant="h3" gutterBottom>
            Enim eu turpis egestas pretium.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Justo nec ultrices dui sapien eget mi proin sed. Dictum varius duis
            at Bibendum arcu vitae elementum curabitur vitae. Tellus cras
            adipiscing enim eu turpis egestas pretium aenean pharetra. Auctor
            neque vitae tempus quam pellentesque nec. Eleifend mi in nulla
            posuere sollicitudin aliquam ultrices sagittis. Viverra suspendisse
            potenti nullam ac tortor vitae purus faucibus ornare.
          </Typography>
        </S.PlaceWorkTxt>
      </S.PlaceWork>

      <S.ThinkWork>
        <S.ThinkWorkTxt>
          <Typography variant="h3" gutterBottom>
            Auctor elit sed vulputate mi sit.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Sed velit dignissim sodales ut eu sem integer vitae justo.
          </Typography>
          <Box sx={{ marginTop: "5vh", marginBottom: "8vh" }}>
            <Button variant="contained" size="large" disableElevation>
              Careers
            </Button>
          </Box>
          <Divider sx={{ marginBottom: "5vh" }} variant="middle" />
          <Typography fontSize="1rem" gutterBottom>
            Justo nec ultrices dui sapien eget mi proin sed. Dictum varius duis
            at Bibendum arcu vitae elementum curabitur vitae. Tellus cras
            adipiscing enim eu turpis egestas pretium aenean pharetra. Auctor
            neque vitae tempus quam pellentesque nec. Eleifend mi in nulla
            posuere sollicitudin aliquam ultrices sagittis. Viverra suspendisse
            potenti nullam ac tortor vitae purus faucibus ornare.
          </Typography>
        </S.ThinkWorkTxt>
      </S.ThinkWork>
    </Fragment>
  );
};

export { About };
