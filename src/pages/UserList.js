import * as React from "react";
import UserCard from "../components/UserCard";
import { Typography } from "@mui/material";
import SideButtons from "../components/UI/SideButtons";
import { useSelector } from "react-redux";
import UserTable from "../components/UserTable";

const UserList = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);

  return (
    <>
      {(pageIndex === 1 || pageIndex === 3) && (
        <>
          <Typography
            sx={{ mt: 4, ml: "30px", fontSize: 22 }}
            color="black"
            gutterBottom
          >
            Interviewers list
          </Typography>

          <div className="user-list-container">
            {pageIndex === 1 && <UserCard />}
            {pageIndex === 3 && <UserTable />}
            <SideButtons />
          </div>
        </>
      )}
    </>
  );
};

export default UserList;
