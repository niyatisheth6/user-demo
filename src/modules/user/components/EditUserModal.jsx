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

import { editUserSchema } from "../validations";
import { editUserinitialValues } from "../initials";
import FormControl from "../../../shared/components/FormControl";
import CommonRadioGroup from "../../../shared/components/CommonRadioGroup";
import { genderOptions } from "../../../shared/utils/data";
import { updateUser } from "../../../features/userActions";

function EditUserModal({ open, onClose, editUserData }) {
  const dispatch = useDispatch();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={editUserData || editUserinitialValues}
          validationSchema={editUserSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(updateUser(values));
            resetForm();
            onClose();
          }}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <FormControl name="name" label="Name" />
              <FormControl name="email" label="Email" type="email" />
              <FormControl name="phone" label="Phone No" />
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
                  Edit User
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserModal;
