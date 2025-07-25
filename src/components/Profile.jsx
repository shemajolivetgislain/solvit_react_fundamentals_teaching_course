import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export const Profile = () => {
  //   const [count, setCount] = useState(0);
  //   const [user, setUser] = useState(null);

  const { user } = useUser();
  console.log("returned provided information", user);

  //   useEffect(() => {
  //     // console.log(count);
  //     setTimeout(() => {
  //       setUser({
  //         name: "Jolivet",
  //         role: "Frontend Developer",
  //         Company: "SOLVIT AFRICA",
  //       });
  //     }, 6000);
  //     // setCount(100);
  //   }, []);
  return (
    <div className="flex gap-2 items-center">
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.role}</h2>
          <h3>{user.company}</h3>
        </div>
      ) : (
        <div>
          <p>Loading user information</p>
        </div>
      )}
    </div>
  );
};
