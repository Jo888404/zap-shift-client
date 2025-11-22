import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['my_parcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }

  })

  console.log(parcels);


 const handleDelete = async(id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This parcel will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel"
  }).then(async (result) => {
    if (result.isConfirmed) {


        axiosSecure.delete(`/parcels/${id}`)
      .then(res =>{
        if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Parcel deleted successfully.", "success", 1500);
        // refetch && refetch();
        
      }
      refetch();
      })

   

      
    }
  });
};




      return (
        <div className="w-full">

          {/* ---------- Mobile/Card View ---------- */}
          <div className="grid gap-4 md:hidden">
            {parcels.map((parcel, index) => (
              <div
                key={parcel._id}
                className="card bg-base-100 shadow p-4 space-y-2 text-center border-amber-300 border-2 m-4"
              >
                <h2 className="text-lg font-semibold">Parcel No:- {index + 1}</h2>
                <h2 className="text-lg font-semibold">{parcel.parcelName}</h2>

                <p>
                  <span className="font-semibold">Type:</span> {parcel.parcelType}
                </p>
                <p>
                  <span className="font-semibold">Sender:</span>{" "}
                  {parcel.senderName || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Weight:</span>{" "}
                  {parcel.parcelWeight} g
                </p>

                <div className=" pt-2 space-y-2">
                  <button className="btn btn-sm btn-info w-52">Details</button>
                  <button className="btn btn-sm btn-error w-52">Delete</button>
                  <button className="btn btn-sm btn-success w-52">Pay</button>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Desktop/Table View ---------- */}
          <div className="overflow-x-auto hidden md:block">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Parcel Type</th>
                  <th>Sender</th>
                  <th>Weight</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {parcels.map((parcel, index) => (
                  <tr key={parcel._id}>
                    <td>{index + 1}</td>
                    <td>{parcel.parcelName}</td>
                    <td>{parcel.parcelType}</td>
                    <td>{parcel.senderName || "N/A"}</td>
                    <td>{parcel.parcelWeight} g</td>

                    <td className="flex gap-2">
                      <button className="btn btn-sm btn-info">Details</button>
                      <button onClick={() => handleDelete(parcel._id)} className="btn btn-sm btn-error">Delete</button>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      );
    };

    export default MyParcels;