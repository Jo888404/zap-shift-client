import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RiderService = ({ item }) => {
    const { name, age, photo, description, experience } = item;
    const axiosSecure = useAxiosSecure();


    const handleHire = () => {
        // STEP 1: Confirmation alert
        Swal.fire({
            title: "Confirm Hire",
            text: "আপনি কি আমাকে hire করতে ইচ্ছুক? তাহলে confirm বাটনে click করে নিশ্চিত করুন।",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Confirm",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#16a34a",
            cancelButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                // STEP 2: Small form alert
                Swal.fire({
                    title: "Hire Rider Form",
                    html: `
            <input id="hire-name" class="swal2-input" placeholder="আপনার নাম" />
            <input id="hire-contact" class="swal2-input" placeholder="Contact Number" />
            <textarea id="hire-address" class="swal2-textarea" placeholder="Address"></textarea>
          `,
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: "Confirm Hire",
                    cancelButtonText: "Cancel",
                    preConfirm: () => {
                        const hireName = document.getElementById("hire-name").value;
                        const contact = document.getElementById("hire-contact").value;
                        const address = document.getElementById("hire-address").value;

                        if (!hireName || !contact || !address) {
                            Swal.showValidationMessage(
                                "অনুগ্রহ করে সবগুলো তথ্য পূরণ করুন"
                            );
                            return false;
                        }

                        return { hireName, contact, address };
                    },
                }).then((formResult) => {
                    if (formResult.isConfirmed) {
                        // STEP 3: Final success message
                        Swal.fire({
                            icon: "success",
                            title: "Hire Confirmed 🎉",
                            text: "আপনি সফলভাবে rider hire করেছেন 🚀, খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে। Hire করার জন্য আপনাকে অসংখ্য ধন্যবাদ।",
                            confirmButtonColor: "#16a34a",
                        });

                        // 🔜 Future (optional)
                        // axiosSecure.post("/hire", {
                        //   riderId: item._id,
                        //   ...formResult.value,
                        // });


                        axiosSecure.post("/hires", {
                            riderId: item._id,
                            riderName: item.name,
                            userName: formResult.value.hireName,
                            contact: formResult.value.contact,
                            address: formResult.value.address,
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-40">
                <img
                    src={photo || "https://i.ibb.co/2kR7KQb/user.png"}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body text-center">
                <h2 className="font-bold">Name:- {name}</h2>


                <p className="text-sm text-gray-500">
                    Age:-{age || "Professional delivery rider"}
                </p>
                <p className="text-sm text-gray-500">
                    {description || "Professional delivery rider"}
                </p>
                <p className="text-sm text-gray-500">
                    Experience:- {experience || "Professional delivery rider"}
                </p>

                <button onClick={handleHire} className="btn btn-primary btn-sm mt-2">
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default RiderService;
