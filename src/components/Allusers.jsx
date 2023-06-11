import React from "react";
import { useGetUsersQuery } from "../features/api/apiSlice";
import { Link } from "react-router-dom";
const Allusers = () => {
  const { data, isLoading } = useGetUsersQuery();
  return (
    <div className="flex mt-3 p-4 shadow-md">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data &&
        data.data.map((user) => {
          return (
            <Link to={`/profile/${user.id}`} key={user.id}>
              <img
                src={user.avatar}
                alt="user"
                className="w-6 h-6 rounded-full"
              />
            </Link>
          );
        })
      )}
      <p className="ml-auto"> to see profile click on images</p>
    </div>
  );
};

export default Allusers;
