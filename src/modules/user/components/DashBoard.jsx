import React, { useState, Suspense, lazy } from "react";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import Header from "../../../shared/components/Header";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import ErrorBoundary from "../../../shared/components/ErrorBoundary";

// add lasy load in component
const UserDataTable = lazy(() => import("./UserDataTable"));

function Dashboard() {
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserData, setEditUserData] = useState();

  const allUsers = useSelector((state) => state.app.users);

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="user">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAddUserModal(true)}
            className="btn"
          >
            Add User
          </Button>
          <span className="total-user">Total Users: {allUsers.length}</span>
        </div>

        <ErrorBoundary>
          <AddUserModal
            open={addUserModal}
            onClose={() => setAddUserModal(false)}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <EditUserModal
            open={editUserModal}
            editUserData={editUserData}
            onClose={() => setEditUserModal(false)}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading UserData Table...</div>}>
            <UserDataTable
              setEditUserModal={setEditUserModal}
              setEditUserData={setEditUserData}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default Dashboard;
