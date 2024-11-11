import React from "react";

import { Field, ErrorMessage } from "formik";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function CommonRadioGroup({ name, label, options }) {
  return (
    <FormControl component="fieldset" className="radio-control">
      <FormLabel component="legend">{label}</FormLabel>
      <Field name={name}>
        {({ field, form }) => (
          <RadioGroup
            row
            {...field}
            name={name}
            value={form.values[name]}
            onChange={(e) => form.setFieldValue(name, e.target.value)}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      </Field>
      <ErrorMessage name={name} component="div" className="form-error" />
    </FormControl>
  );
}

export default CommonRadioGroup;
