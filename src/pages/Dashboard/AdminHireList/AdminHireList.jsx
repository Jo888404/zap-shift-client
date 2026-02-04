import { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHireList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: hires = [] } = useQuery({
    queryKey: ["hires"],
    queryFn: async () => {
      const res = await axiosSecure.get("/hires");
      return res.data;
    },
  });

  // 🔥 UI-only status store
  const [uiStatus, setUiStatus] = useState({});

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
      <h2 className="text-2xl font-bold mb-6">Hire Requests</h2>

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
                <td>{hire.userName}</td>
                <td>{hire.contact}</td>
                <td>{hire.address}</td>
                <td>{hire.riderName}</td>

                {/* STATUS BUTTON */}
                <td>
                  <button
                    onClick={() => handlePendingClick(hire)}
                    disabled={status !== "pending"}
                    className={`btn btn-xs ${
                      status === "pending"
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
