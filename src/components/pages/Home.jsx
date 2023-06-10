import React from "react";
import { useGetUsersQuery } from "../../features/api/apiSlice";
import UserCard from "../userCard";

const Home = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let userContent
  if (isLoading) {
    userContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    userContent = users.data.map((item) => {
      return <UserCard content={item}/>
    })
  } else if (isError) {
    userContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  } 
  return (
    <div className="flex flex-col">
        {userContent}
    </div>
  );
};

export default Home;
