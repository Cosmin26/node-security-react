import React from "react";
import { ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type,
  variant,
  margin,
  required,
  fullWidth,
  id,
  label,
  autoComplete,
  autoFocus
}) => (
  <>
    <TextField
      type={type}
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      error={
        touched &&
        touched[field.name] &&
        errors &&
        errors[field.name] !== undefined
      }
      {...field}
    />
    {touched[field.name] && !!errors[field.name] && (
      <ErrorMessage name={field.name} component="div" />
    )}
  </>
);

export default Input;
