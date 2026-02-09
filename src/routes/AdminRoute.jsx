
// import { Navigate } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

// const AdminRoute = ({ children }) => {
//   const isAdmin = useAdmin();

//   if (!isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default AdminRoute;



// import { Navigate } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

// const AdminRoute = ({ children }) => {
//   const { isAdmin, isAdminLoading } = useAdmin();

//   if (isAdminLoading) return <p>Loading...</p>;
//   if (!isAdmin) return <Navigate to="/" replace />;

//   return children;
// };

// export default AdminRoute;


// import { Navigate } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

// const AdminRoute = ({ children }) => {
//   const isAdmin = useAdmin();

//   if (!isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default AdminRoute;


import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const isAdmin = useAdmin();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;


