// import React from 'react';
// import useAuth from '../hooks/useAuth';
// import { Navigate, useLocation } from 'react-router';

// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useAuth();
//     const location = useLocation();
    
//     if (loading) {
//         return <div>
//             <span className="loading loading-bars loading-xs"></span>
//             <span className="loading loading-bars loading-sm"></span>
//             <span className="loading loading-bars loading-md"></span>
//             <span className="loading loading-bars loading-lg"></span>
//             <span className="loading loading-bars loading-xl"></span>
//         </div>
//     }

//     if (!user) {
//         return <Navigate state={{ from: location.pathname }} to={"/login"}></Navigate>
//     }


//     return children;
// };

// export default PrivateRoute;



// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   if (loading) return <p>Loading...</p>;

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return children;
// };

// export default PrivateRoute;



import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location.pathname }} to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;

