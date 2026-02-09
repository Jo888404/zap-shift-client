import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHireList = () => {
  const axiosSecure = useAxiosSecure();


  const [uiStatus, setUiStatus] = useState(() => {
    const saved = localStorage.getItem("hireStatus");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
  localStorage.setItem("hireStatus", JSON.stringify(uiStatus));
}, [uiStatus]);


  const { data: hires = [] } = useQuery({
    queryKey: ["hires"],
    queryFn: async () => {
      const res = await axiosSecure.get("/hires");
      // console.log(res.data)
      return res.data;
      
    },
  });

  // 🔥 UI-only status store
  // const [uiStatus, setUiStatus] = useState({});

  const handlePendingClick = (hire) => {
    // যদি আগেই action নেওয়া হয়ে থাকে → কিছুই করবে না
    if (uiStatus[hire._id]) return;

    Swal.fire({
      title: "Order Decision",
      text: "আপনি কি order টি confirm করতে ইচ্ছুক?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Reject",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setUiStatus((prev) => ({
          ...prev,
          [hire._id]: "confirmed",
        }));

        Swal.fire({
          icon: "success",
          title: "Confirmed!",
          text: "Order successfully confirmed",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setUiStatus((prev) => ({
          ...prev,
          [hire._id]: "rejected",
        }));

        Swal.fire({
          icon: "success",
          title: "Rejected!",
          text: "Order successfully rejected",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">All Orders-({hires.length})</h2>

      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Rider</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {hires.map((hire, index) => {
            const status = uiStatus[hire._id] || "pending";

            return (
              <tr key={hire._id}>
                <td>{index + 1}</td>
                <td>{hire.hireName}</td>
                <td>{hire.contact}</td>
                <td>{hire.address}</td>
                <td>{hire.riderName}</td>

                {/* STATUS BUTTON */}
                <td>
                  <button
                    onClick={() => handlePendingClick(hire)}
                    disabled={status !== "pending"}
                    className={`btn btn-xs ${status === "pending"
                        ? "btn-warning"
                        : status === "confirmed"
                          ? "btn-success"
                          : "btn-error"
                      }`}
                  >
                    {status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHireList;




// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AdminHireList = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: hires = [], isLoading } = useQuery({
//     queryKey: ["admin-hires"], // 🔥 UNIQUE KEY
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/hires"); // 🔥 ADMIN ONLY
//       return res.data;
//     },
//   });

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-5">All Orders (Admin)</h2>

//       {hires.map((hire) => (
//         <div key={hire._id} className="border p-3 mb-2">
//           <p>User Email: {hire.userEmail}</p>
//           <p>Rider: {hire.riderName}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminHireList;




// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AdminHireList = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: hires = [], isLoading } = useQuery({
//     queryKey: ["admin-hires"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/hires");
//       return res.data;
//     },
//   });

//   if (isLoading)
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <span className="loading loading-dots loading-lg"></span>
//       </div>
//     );

//   return (
//     <div className="p-6 lg:p-10">
//       <h2 className="text-3xl font-bold mb-6 text-white">All Orders</h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full bg-base-200 shadow-lg">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User Email</th>
//               <th>Rider</th>
//               <th>Status</th>
//               <th>Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {hires.map((hire, index) => (
//               <tr key={hire._id}>
//                 <td>{index + 1}</td>
//                 <td>{hire.userEmail}</td>
//                 <td>{hire.riderName}</td>
//                 <td>
//                   <span className="badge badge-info">
//                     {hire.status || "pending"}
//                   </span>
//                 </td>
//                 <td>
//                   {new Date(hire.createdAt).toLocaleString("en-US")}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminHireList;
