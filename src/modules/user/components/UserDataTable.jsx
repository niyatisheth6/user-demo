import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteUSer, getUser } from "../../../features/userActions";

function UserDataTable({ setEditUserModal, setEditUserData }) {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  const handleEdit = (id) => {
    const singleUser = users.filter((user) => user.id === id);
    setEditUserData(singleUser[0]);
    setEditUserModal(true);
  };

  const filteredUsers = users.filter((user) => {
    if (searchData.length === 0) {
      return user;
    } else {
      return user.name.toLowerCase().includes(searchData.toLowerCase());
    }
  });

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <TableContainer component={Paper} className="user-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : filteredUsers.length === 0 && searchData.length >= 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No user found
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(user.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => dispatch(deleteUSer(user.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserDataTable;
