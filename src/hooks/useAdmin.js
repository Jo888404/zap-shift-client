
// import useAuth from "./useAuth";
// import { ADMIN_EMAILS } from "../utils/adminList";

// const useAdmin = () => {
//   const { user } = useAuth();

//   const isAdmin = user && ADMIN_EMAILS.includes(user.email);
//   return isAdmin;
// };

// export default useAdmin;




// import useAuth from "./useAuth";
// import { ADMIN_EMAILS } from "../utils/adminList";

// const useAdmin = () => {
//   const { user, loading } = useAuth();

//   // auth এখনো resolve হয়নি
//   if (loading) {
//     return { isAdmin: false, isAdminLoading: true };
//   }

//   const isAdmin = !!user && ADMIN_EMAILS.includes(user.email);

//   return { isAdmin, isAdminLoading: false };
// };

// export default useAdmin;


// import useAuth from "./useAuth";
// import { ADMIN_EMAILS } from "../utils/adminList";

// const useAdmin = () => {
//   const { user, loading } = useAuth();

//   if (loading) return false;

//   return !!user && ADMIN_EMAILS.includes(user.email);
// };

// export default useAdmin;


import useAuth from "./useAuth";
import { ADMIN_EMAILS } from "../utils/adminList";

const useAdmin = () => {
  const { user, loading } = useAuth();

  if (loading) return false;

  return !!user && ADMIN_EMAILS.includes(user.email);
};

export default useAdmin;


