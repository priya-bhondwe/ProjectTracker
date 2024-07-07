// import React, { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import AuthService from "../services/AuthService";

// const PrivateRoutes = ({ children }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const clearSession = () => {
//     sessionStorage.clear();
//     // dispatch(addUser({}));
//     navigate("/login");
//   };

//   useEffect(() => {
//     // Validate token
//     const token = sessionStorage.getItem("accessToken");
//     console.log("data res:", token);

//     if (token) {
//       AuthService.validateToken(token)
//         .then((data) => {
//           // Token is valid
//           console.log("Token Then:", data);
//         })
//         .catch((error) => {
//           console.log("Error:", error);
//           clearSession();
//         });
//     } else {
//       clearSession();
//     }
//   }, [dispatch]);

//   // const loggedUser = useSelector(selectUser);

//   console.log("loggeduser:", loggedUser);
//   return loggedUser && loggedUser._id ? (
//     <>{children}</>
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default PrivateRoutes;
