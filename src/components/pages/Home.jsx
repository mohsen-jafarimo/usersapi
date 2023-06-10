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
      <div className="w-full text-center">
        <div >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        </div>
      </div>
    )
  } else if (isSuccess) {
    userContent = users.data.map((item) => {
      return <UserCard content={item} key={item.id}/>
    })
  } else if (isError) {
    userContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  } 
  return (
    <div className="flex justify-between sm:justify-start overflow-hidden mt-3 bg-gray-50 p-3">
        {userContent}
    </div>
  );
};

export default Home;
