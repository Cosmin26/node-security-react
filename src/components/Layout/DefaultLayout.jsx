import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  card: {
    width: "300px",
    height: "400px",
    padding: "1rem"
  }
}));

const DefaultLayout = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="main" maxWidth="xl">
      <CssBaseline />
      <Grid>
        <div className={classes.paper}>
          <Card className={classes.card}>
            <CardHeader title={title} />

            <CardContent>{children}</CardContent>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default DefaultLayout;
