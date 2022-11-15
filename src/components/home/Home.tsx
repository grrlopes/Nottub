import { Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";
import * as S from "./Styles";

const Home = () => {
  return (
    <Fragment>
      <S.Services>
        <S.ServicesTxt>
          <Typography variant="h3" gutterBottom>
            Senectus et netus et malesuada fames ac. Semper eget duis at tellus
            at urna condimentum.
          </Typography>

          <Typography variant="h6" gutterBottom>
            commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat Rutrum
            quisque non tellus orci ac auctor augue mauris augue.
          </Typography>
          <Box sx={{ marginTop: "5vh", marginBottom: "8vh" }}>
            <Button variant="contained" size="large" disableElevation>
              Aliquet nibh
            </Button>
          </Box>
        </S.ServicesTxt>
      </S.Services>
    </Fragment>
  );
};

export { Home };
