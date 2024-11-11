import React from "react";

import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";

function FormControl({ name, label, type = "text" }) {
  return (
    <div className="form-control">
      <Field
        as={TextField}
        fullWidth
        name={name}
        label={label}
        type={type}
        variant="outlined"
      />
      <ErrorMessage name={name} component="div" className="form-error" />
    </div>
  );
}

export default FormControl;
