import React from "react";

import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";

import { addUserSchema } from "../validations";
import { addUserinitialValues } from "../initials";
import FormControl from "../../../shared/components/FormControl";
import CommonRadioGroup from "../../../shared/components/CommonRadioGroup";
import { genderOptions } from "../../../shared/utils/data";
import { createUser } from "../../../features/userActions";

function AddUserModal({ open, onClose }) {
  const dispatch = useDispatch();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={addUserinitialValues}
          validationSchema={addUserSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(createUser(values));
            resetForm();
            onClose();
          }}
        >
          {() => (
            <Form>
              <FormControl name="name" label="Name" />
              <FormControl name="email" label="Email" type="email" />
              <FormControl name="phone" label="Phone No" type="tel" />
              <FormControl name="age" label="Age" type="number" />
              <FormControl name="address" label="Address" />
              <CommonRadioGroup
                name="gender"
                label="Gender"
                options={genderOptions}
              />
              <DialogActions>
                <Button onClick={onClose} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Add User
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default AddUserModal;
