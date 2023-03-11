import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
export const ProfilePage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <h1>Страница пользователя</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};

// export default ProfilePage;

// https://www.makeuseof.com/redirect-user-after-login-react/
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [authenticated, setauthenticated] = useState(null);
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authenticated");
//     if (loggedInUser) {
//       setauthenticated(loggedInUser);
//     }
//   }, []);

//   if (!authenticated) {
//     // Redirect
//   } else {
//     return (
//       <div>
//                 <p>Welcome to your Dashboard</p>
//
//       </div>
//     );
//   }
// };

// export default Dashboard;
