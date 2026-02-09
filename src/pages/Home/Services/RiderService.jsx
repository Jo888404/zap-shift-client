

// import Swal from "sweetalert2";
// import { useNavigate, useLocation } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";

// const RiderService = ({ item }) => {

//       const { name, age, photo, description, experience } = item;


//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const startHireProcess = () => {
//     Swal.fire({
//       title: "Confirm Hire",
//       text: "আপনি কি আমাকে hire করতে ইচ্ছুক?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Confirm",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Hire Rider Form",
//           html: `
//             <input id="hire-name" class="swal2-input" placeholder="আপনার নাম" />
//             <input id="hire-contact" class="swal2-input" placeholder="Contact Number" />
//             <textarea id="hire-address" class="swal2-textarea" placeholder="Address"></textarea>
//           `,
//           showCancelButton: true,
//           preConfirm: () => {
//             const hireName = document.getElementById("hire-name").value;
//             const contact = document.getElementById("hire-contact").value;
//             const address = document.getElementById("hire-address").value;

//             if (!hireName || !contact || !address) {
//               Swal.showValidationMessage("সব তথ্য পূরণ করুন");
//               return false;
//             }
//             return { hireName, contact, address };
//           },
//         }).then((formResult) => {
//           if (formResult.isConfirmed) {
//             axiosSecure.post("/hires", {
//               riderId: item._id,
//               riderName: item.name,
//               ...formResult.value,
//             });

//             Swal.fire(
//               "Success 🎉",
//               "আপনি সফলভাবে rider hire করেছেন",
//               "success"
//             );
//             navigate("/my-orders")
//           }
//         });
//       }
//     });
//   };

//   const handleHire = () => {
//     if (!user) {
//       localStorage.setItem(
//         "pendingHire",
//         JSON.stringify(item)
//       );

//       Swal.fire({
//         icon: "warning",
//         title: "Login Required",
//         text: "Hire করতে হলে login করতে হবে",
//         confirmButtonText: "Go to Login",
//       }).then(() => {
//         navigate("/login", {
//           state: { from: location.pathname },
          
//         });
//       });
//       return;
//     }

//     startHireProcess();
//   };

//   axiosSecure.post("/hires", {
//   riderId: item._id,
//   riderName: item.name,
//   riderPhoto: item.photo,
//   riderExperience: item.experience,
//   userEmail: user?.email,   // 🔥 MUST

//   status: "pending",
// });


//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <figure className="h-40">
//         <img
//           src={photo || "https://i.ibb.co/2kR7KQb/user.png"}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//       </figure>

//       <div className="card-body text-center">
//         <h2 className="font-bold">Name:- {name}</h2>

//         <p className="text-sm text-gray-500">Age:- {age}</p>
//         <p className="text-sm text-gray-500">{description}</p>
//         <p className="text-sm text-gray-500">
//           Experience:- {experience}
//         </p>

//         <button
//           onClick={handleHire}
//           className="btn btn-primary btn-sm mt-2"
//         >
//           Hire Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RiderService;






// import Swal from "sweetalert2";
// import { useNavigate, useLocation } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";

// const RiderService = ({ item }) => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleHire = async () => {
//     if (!user) {
//       Swal.fire({
//         icon: "warning",
//         title: "Login Required",
//         text: "Hire করতে হলে login করতে হবে",
//         confirmButtonText: "Go to Login",
//       }).then(() => {
//         navigate("/login", {
//           state: { from: location.pathname },
//         });
//       });
//       return;
//     }

//     const confirm = await Swal.fire({
//       title: "Confirm Hire",
//       text: "আপনি কি আমাকে hire করতে চান?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Confirm",
//     });

//     if (!confirm.isConfirmed) return;

//     const form = await Swal.fire({
//       title: "Hire Rider Form",
//       html: `
//         <input id="hire-name" class="swal2-input" placeholder="আপনার নাম" />
//         <input id="hire-contact" class="swal2-input" placeholder="Contact Number" />
//         <textarea id="hire-address" class="swal2-textarea" placeholder="Address"></textarea>
//       `,
//       showCancelButton: true,
//       preConfirm: () => {
//         const hireName = document.getElementById("hire-name").value;
//         const contact = document.getElementById("hire-contact").value;
//         const address = document.getElementById("hire-address").value;

//         if (!hireName || !contact || !address) {
//           Swal.showValidationMessage("সব তথ্য পূরণ করুন");
//           return false;
//         }

//         return { hireName, contact, address };
//       },
//     });

//     if (!form.isConfirmed) return;

//     try {
//       await axiosSecure.post("/hires", {
//         riderId: item._id,
//         riderName: item.name,
//         riderPhoto: item.photo,
//         riderExperience: item.experience,
//         userEmail: user.email,
//         hireName: form.value.hireName,
//         contact: form.value.contact,
//         address: form.value.address,
//       });

//       Swal.fire(
//         "Success 🎉",
//         "আপনি সফলভাবে rider hire করেছেন",
//         "success"
//       );

//       navigate("/my-orders");
//     } catch (error) {
//       Swal.fire("Error", "Something went wrong", error);
//     }
//   };

//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <figure className="h-40">
//         <img
//           src={item.photo || "https://i.ibb.co/2kR7KQb/user.png"}
//           alt={item.name}
//           className="w-full h-full object-cover"
//         />
//       </figure>

//       <div className="card-body text-center">
//         <h2 className="font-bold">Name:- {item.name}</h2>
//         <p className="text-sm text-gray-500">Age:- {item.age}</p>
//         <p className="text-sm text-gray-500">
//           Experience:- {item.experience}
//         </p>

//         <button
//           onClick={handleHire}
//           className="btn btn-primary btn-sm mt-2"
//         >
//           Hire Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RiderService;





import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const RiderService = ({ item }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleHire = async () => {
    // 🔐 যদি login না থাকে
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Hire করতে হলে login করতে হবে",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login", {
          state: { from: location.pathname },
        });
      });
      return;
    }

    // ✅ Confirm popup
    const confirm = await Swal.fire({
      title: "Confirm Hire",
      text: "আপনি কি আমাকে hire করতে চান?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm",
    });

    if (!confirm.isConfirmed) return;

    // ✅ Form popup
    const form = await Swal.fire({
      title: "Hire Rider Form",
      html: `
        <input id="hire-name" class="swal2-input" placeholder="আপনার নাম" />
        <input id="hire-contact" class="swal2-input" placeholder="Contact Number" />
        <textarea id="hire-address" class="swal2-textarea" placeholder="Address"></textarea>
      `,
      showCancelButton: true,
      preConfirm: () => {
        const hireName = document.getElementById("hire-name").value;
        const contact = document.getElementById("hire-contact").value;
        const address = document.getElementById("hire-address").value;

        if (!hireName || !contact || !address) {
          Swal.showValidationMessage("সব তথ্য পূরণ করুন");
          return false;
        }

        return { hireName, contact, address };
      },
    });

    if (!form.isConfirmed) return;

    try {
      // 🔥 এখানে সব গুরুত্বপূর্ণ field বসানো হয়েছে
      await axiosSecure.post("/hires", {
        riderId: item._id,
        riderName: item.name,
        riderAge: item.age,
        riderPhoto: item.photo,
        riderExperience: item.experience,

        userEmail: user?.email,   // ✅ MUST
        createdAt: new Date(),    // ✅ MUST
        status: "pending",        // ✅ MUST

        hireName: form.value.hireName,
        contact: form.value.contact,
        address: form.value.address,
      });

      Swal.fire(
        "Success 🎉",
        "আপনি সফলভাবে rider hire করেছেন",
        "success"
      );

      navigate("/my-orders");
    } catch (error) {
      Swal.fire("Error", "Something went wrong", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-40">
        <img
          src={item.photo || "https://i.ibb.co/2kR7KQb/user.png"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="font-bold">Name:- {item.name}</h2>
        <p className="text-sm text-gray-500">Age:- {item.age}</p>
        <p className="text-sm text-gray-500">
          Experience:- {item.experience}
        </p>

        <button
          onClick={handleHire}
          className="btn btn-primary btn-sm mt-2"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default RiderService;


