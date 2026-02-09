// import { useQuery } from "@tanstack/react-query";


// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";

// const MyOrders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [], isLoading } = useQuery({
//     queryKey: ["myOrders", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/hires?email=${user.email}`);

//       return res.data;
//     },
//   });






//   if (isLoading) {
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">No Orders Found 😢</h2>
//         <p className="text-gray-500 mt-2">
//           You haven’t hired any rider yet.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-16 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">
//         My Orders
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Rider</th>
//               <th>Experience</th>
//               <th>Age</th>
//               <th>Hire Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order._id}>
//                 <td>{index + 1}</td>

//                 <td className="flex items-center gap-3">
//                   <img
//                     src={order.riderPhoto}
//                     alt={order.riderName}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   {order.riderName}
//                 </td>

//                 <td>{order.riderExperience}</td>

//                 <td>
//                   {/* <span
//                     className={`badge ${order.status === "pending"
//                         ? "badge-warning"
//                         : order.status === "confirmed"
//                           ? "badge-success"
//                           : "badge-error"
//                       }`}
//                   >
//                     {order.riderAge}
//                   </span> */}

//                   {order.riderAge}
//                 </td>

//                 <td>
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;



// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const MyOrders = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [], isLoading } = useQuery({
//     queryKey: ["myOrders"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/hires"); // 🔥 NO email
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">No Orders Found 😢</h2>
//         <p className="text-gray-500 mt-2">
//           You haven’t hired any rider yet.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-16 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Orders</h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Rider</th>
//               <th>Experience</th>
//               <th>Age</th>
//               <th>Hire Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order._id}>
//                 <td>{index + 1}</td>

//                 <td className="flex items-center gap-3">

//                   <img
//                     src={order.riderPhoto}
//                     alt={order.riderName}
//                     className="w-10 h-10 rounded-full"
//                   />

//                   {order.riderName}

//                   </td>
//                 <td>{order.riderExperience}</td>
//                 <td>{order.riderAge}</td>
//                 <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;




// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const MyOrders = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [], isLoading } = useQuery({
//     queryKey: ["myOrders"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/hires");
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">No Orders Found 😢</h2>
//         <p className="text-gray-500 mt-2">
//           You haven’t hired any rider yet.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-16 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Orders</h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Rider</th>
//               <th>Experience</th>
//               <th>Age</th>
//               <th>Hire Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order._id}>
//                 <td>{index + 1}</td>
//                 <td>{order.riderName}</td>
//                 <td>{order.riderExperience}</td>
//                 <td>{order.riderAge}</td>
//                 <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;



// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const MyOrders = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [] } = useQuery({
//   queryKey: ["my-orders"], // 🔥 DIFFERENT KEY
//   queryFn: async () => {
//     const res = await axiosSecure.get("/hires");
//     return res.data;
//   },
// });




//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-5">My Orders</h2>

//       {orders.map((order) => (
//         <div key={order._id} className="border p-4 mb-3">
//           <p>Rider: {order.riderName}</p>
//           <p>Email: {order.userEmail}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrders;




// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";

// const MyOrders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [], isLoading } = useQuery({
//     queryKey: ["my-orders"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/hires");
//       return res.data;
//     },
//   });

//   const filteredOrders = orders.filter(
//     (order) => order.userEmail === user.email
//   );

//   if (isLoading) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <span className="loading loading-dots loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 lg:p-10">
//       <h2 className="text-3xl font-bold mb-6 text-white">My Orders</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {filteredOrders.length === 0 ? (
//           <div className="col-span-full">
//             <div className="card bg-base-200 shadow-lg p-8">
//               <h3 className="text-xl font-semibold">No Orders Found</h3>
//               <p className="text-gray-400 mt-2">
//                 You haven’t placed any order yet.
//               </p>
//             </div>
//           </div>
//         ) : (
//           filteredOrders.map((order) => (
//             <div key={order._id} className="card bg-base-200 shadow-lg">
//               <div className="card-body">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-bold">
//                     Rider: {order.riderName}
//                   </h3>
//                   <span className="badge badge-info">
//                     {order.status || "pending"}
//                   </span>
//                 </div>

//                 <div className="divider my-2" />

//                 <div className="flex items-center gap-4">
//                   <img
//                     src={order.riderPhoto}
//                     alt={order.riderName}
//                     className="w-16 h-16 rounded-lg object-cover border"
//                   />
//                   <div>
//                     <p className="text-sm text-gray-300">
//                       <span className="font-semibold">Name:</span>{" "}
//                       {order.hireName}
//                     </p>
//                     <p className="text-sm text-gray-300">
//                       <span className="font-semibold">Email:</span>{" "}
//                       {order.userEmail}
//                     </p>
//                     <p className="text-sm text-gray-300">
//                       <span className="font-semibold">Contact:</span>{" "}
//                       {order.contact}
//                     </p>
//                     <p className="text-sm text-gray-300">
//                       <span className="font-semibold">Address:</span>{" "}
//                       {order.address}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <button className="btn btn-sm btn-outline btn-primary">
//                     Track Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;




import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // const { data: orders = [], isLoading } = useQuery({
  //   queryKey: ["myOrders", user?.email],
  //   enabled: !!user?.email,
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/hires?email=${user.email}`);
  //     return res.data;
  //   },
  // });

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center py-20">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }

 



  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/hires");
      return res.data;
    },
  });

  const filteredOrders = orders.filter(
    (order) => order.userEmail === user.email
  );

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }


   if (filteredOrders.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">No Orders Found 😢</h2>
        <p className="text-gray-500 mt-2">
          You haven’t hired any rider yet.
        </p>
      </div>
    );
  }

    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Orders
        </h2>

        <div className="  place-items-center ">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="card w-full max-w-2xl bg-base-100 shadow-xl "
            >
              {/* IMAGE */}
              <figure className="overflow-hidden group relative ">
                <img
                  src={order.riderPhoto}
                  alt={order.riderName}
                  className="
                    w-96 h-80 object-cover
                    transform transition duration-500
                    group-hover:scale-125
                  "
                />

                {/* Status badge */}
                {/* <span
                  className={`badge absolute top-3 right-3 ${order.status === "confirmed"
                      ? "badge-success"
                      : order.status === "rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                >
                  {order.status}
                </span> */}
              </figure>

              {/* CONTENT */}
              <div className="card-body text-center">
                <h2 className="card-title lg:text-3xl mx-auto">
                  {order.riderName}
                </h2>

                <div className="space-y-1 text-sm text-white">
                  <p>
                    <span className="font-semibold">Age:</span>{" "}
                    {order.riderAge}
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {order.riderExperience}
                  </p>
                  <p>
                    <span className="font-semibold">Married Status:</span>{" "}
                    {order.marriedStatus || "Not Provided"}
                  </p>
                </div>

                <div className="text-xs text-gray-400 mt-3">
                  Hired on:{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyOrders;
