import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching user data...", user);
    // simulate fetch
    setTimeout(() => {
      setUser({ name: "Jolivet", role: "Frontend Dev" });
    }, 2000);
  }, []);
  return (
    <div className="p-4">
      {user ? (
        <p>
          Welcome, {user.name} ({user.role})
        </p>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Profile;
