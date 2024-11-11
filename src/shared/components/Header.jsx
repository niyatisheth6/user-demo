import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { InputBase } from "@mui/material";
import { searchUser } from "../../features/userDetailsSlice";

function Header() {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]);

  return (
    <div className="header">
      <h1>My Users</h1>
      <InputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        className="search"
        onChange={(e) => setSearchData(e.target.value)}
      />
    </div>
  );
}

export default Header;
