import React from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../features/api/apiSlice";
const Profile = () => {
  const { data: users } = useGetUsersQuery();
  const { id } = useParams();
  const userObject = users.data.filter((user) => user.id == id);
  const { email, avatar, first_name, last_name } = userObject[0];
  return (
    <div className="flex justify-center h-full w-full mt-14">
      <div className="flex flex-col justify-center items-center p-12 shadow-md">
        <img src={avatar} alt="user" className="w-24 h-24 rounded-full" />
        <div className="flex space-x-4 mt-4">
          <h2 className="text-2xl">{first_name}</h2>
          <h2 className="text-2xl">{last_name}</h2>
        </div>
        <h3 className="mt-4">{email}</h3>
        <div className="flex space-x-4 mt-4">
          <button className="p-3 bg-blue-400 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </button>
          <button className="p-3 bg-red-400 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
