import * as React from "react";
import UserCard from "../components/users-list/UserCard";
import { Typography } from "@mui/material";
import SideButtons from "../components/UI/SideButtons";
import { useSelector } from "react-redux";
import UserTable from "../components/users-list/table/UserTable";
import { useGetTitle } from "../custom-hooks/useGetTitle";

const UserList = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const title = useGetTitle();

  return (
    <>
      {(pageIndex === 1 || pageIndex === 3) && (
        <>
          <Typography
            sx={{ mt: 4, ml: "30px", fontSize: 22 }}
            color="black"
            gutterBottom
          >
            {title}
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
