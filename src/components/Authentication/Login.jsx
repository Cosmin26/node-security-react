import { useMutation } from "@apollo/react-hooks";
import {
  Button,
  Grid,
  Link as MaterialLink,
  makeStyles
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { object, string } from "yup";
import { LOGIN_MUTATION } from "../../graphql/mutations";
import paths from "../../routes/paths";
import Input from "../Form/Input";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const loginSchema = object().shape({
  email: string()
    .email("invalid email format")
    .required("email is required"),
  password: string()
    .min(6, "password needs to be at least 6")
    .required("password is required")
});

const Login = ({ history }) => {
  const classes = useStyles();
  const [loginUser, { data, error, loading }] = useMutation(LOGIN_MUTATION);

  if (data) {
    localStorage.setItem("authenticationToken", data.login.jwtToken);
    localStorage.setItem("refreshToken", data.login.refreshToken);
    history.push(paths.hello);
  }

  const handleLogin = (values, { setSubmitting }) => {
    loginUser({ variables: values });
    setSubmitting(false);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      <Form className={classes.form}>
        <p>{error}</p>
        <Field
          component={Input}
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
        />
        <Field
          component={Input}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <MaterialLink variant="body2">
              <Link to={paths.signup}>Sign up</Link>
            </MaterialLink>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default withRouter(Login);
