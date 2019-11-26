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
import { string, object } from "yup";
import { SIGNUP_MUTATION } from "../../graphql/mutations";
import paths from "../../routes/paths";
import Input from "../Form/Input";

const signupSchema = object().shape({
  name: string().required("email is required"),
  email: string()
    .email("invalid email format")
    .required("email is required"),
  password: string()
    .min(6, "password needs to be at least 6")
    .required("password is required")
});

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Signup = ({ history }) => {
  const classes = useStyles();

  const [signupUser, { data, error, loading }] = useMutation(SIGNUP_MUTATION);

  if (data) {
    history.push(paths.login);
  }

  const handleSignup = (values, { setSubmitting }) => {
    signupUser({ variables: values });
    setSubmitting(false);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={signupSchema}
      onSubmit={handleSignup}
    >
      <Form className={classes.form}>
        <p>{error}</p>
        <Field
          component={Input}
          name="name"
          type="text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
        />
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
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <MaterialLink variant="body2">
              <Link to={paths.login}>Sign in</Link>
            </MaterialLink>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default withRouter(Signup);
