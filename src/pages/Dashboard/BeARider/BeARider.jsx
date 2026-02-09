

import { useForm } from "react-hook-form";
import rider from "../../../assets/big-deliveryman.png"
// import useAuth from "../../../hooks/useAuth";
// import { useLoaderData } from "react-router";
// import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BeARider = () => {
    // const { user } = useAuth();


    const {
        register,
        // reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const axiosSecure = useAxiosSecure();



    // const onSubmit = async (data) => {
    //     console.log("Rider Data:", data);
    //     const riderData = {
    //         ...data,
    //         name: user?.email || "",
    //         status: "pending",
    //         created_at: new Date().toISOString(),
    //     };

    //     console.log("Rider Application:", riderData);
    //     axiosSecure.post('/riders', riderData)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 Swal.fire({
    //                     icon: "success",
    //                     title: "Application Submitted!",
    //                     text: "Your application is pending approval",
    //                 });
    //             }

    //         })



    //     reset()
    // };


const imageHostingKey = import.meta.env.VITE_image_upload_key;

const onSubmit = async (data) => {
  try {
    // 1️⃣ Image upload to imgbb
    const imageFile = data.photo[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    const imgRes = await fetch(
      `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const imgData = await imgRes.json();

    if (!imgData.success) {
      throw new Error("Image upload failed");
    }

    // 2️⃣ Rider data with photo URL
    const riderData = {
      name: data.name,
      age: data.age,
      bloodGroup: data.bloodGroup,
      marriedStatus: data.marriedStatus,
      childStatus: data.childStatus,
      siblings: data.siblings,
      experience: data.experience,
      workingArea: data.workingArea,
      license: data.license,
      email: data.email,
      region: data.region,
      nid: data.nid,
      contact: data.contact,
      warehouse: data.warehouse,
      photo: imgData.data.display_url, // ✅ PHOTO URL
      created_at: new Date().toISOString(),
    };

    // 3️⃣ Save to DB
    const res = await axiosSecure.post("/riders", riderData);

    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "You are now a rider 🎉",
      });
    //   reset();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Failed",
      text: error.message || "Something went wrong",
    });
  }
};



    return (
        <div className=" bg-base-200 flex items-center justify-center p-6">
            <div className="card w-full max-w-6xl bg-white shadow-xl rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">

                    {/* LEFT FORM */}
                    <div>
                        <h1 className="text-3xl font-bold text-black mb-2">
                            Be a Rider
                        </h1>
                        <p className="text-sm text-gray-500 mb-6">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        </p>

                        <h2 className="text-lg font-semibold mb-4 text-black">
                            Tell us about yourself
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                            {/* Name & Age */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="label text-black">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && (
                                        <p className="text-error text-xs mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="label text-black">Your Age</label>
                                    <input
                                        type="number"
                                        placeholder="Your Age"
                                        className="input input-bordered w-full"
                                        {...register("age", { required: "Age is required" })}
                                    />
                                </div>
                            </div>


                            {/* RIDER PHOTO */}
                            <div>
                                <label className="label text-black">Your Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="file-input file-input-bordered w-full"
                                    {...register("photo", { required: "Photo is required" })}
                                />
                            </div>







                            {/* BLOOD GROUP */}
                            <div>
                                <label className="label text-black">Blood Group</label>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("bloodGroup", {
                                        required: "Blood group is required",
                                    })}
                                >
                                    <option value="">Select blood group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>Ab-</option>
                                </select>
                            </div>


                            {/* MARRIED STATUS */}
                            <div>
                                <label className="label text-black">Married Status</label>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("marriedStatus", { required: true })}
                                >
                                    <option value="">Select status</option>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                </select>
                            </div>

                            {/* CHILD STATUS */}
                            <div>
                                <label className="label text-black">Child Status</label>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("childStatus", { required: true })}
                                >
                                    <option value="">Do you have children?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            {/* BROTHER / SISTER */}
                            <div>
                                <label className="label text-black">
                                    Number of Brother / Sister
                                </label>
                                <input
                                    type="number"
                                    placeholder="e.g. 2"
                                    className="input input-bordered w-full"
                                    {...register("siblings", {
                                        required: true,
                                        min: 0,
                                    })}
                                />
                            </div>

                            {/* EXPERIENCE YEAR */}
                            <div>
                                <label className="label text-black">Driving Experience</label>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("experience", { required: true })}
                                >
                                    <option value="">Select experience</option>
                                    <option value="private_car_2">
                                        Private Car – 2 Years
                                    </option>
                                    <option value="pickup_4_3">
                                        Pickup (4 Chaka) – 3 Years
                                    </option>
                                    <option value="pickup_6_1">
                                        Pickup (6 Chaka) – 1 Year
                                    </option>
                                    <option value="truck_running">
                                        Truck Running
                                    </option>
                                </select>
                            </div>

                            {/* Driving license  */}

                            <div>
                                <label className="label text-black">
                                    Lincense
                                </label>
                                <input
                                    type="text"
                                    placeholder="License No"
                                    className="input input-bordered w-full"
                                    {...register("workingArea", {
                                        required: "Working area is required",
                                    })}
                                />
                            </div>

                            {/* INTERESTED WORKING AREA */}
                            <div>
                                <label className="label text-black">
                                    Interested Area for Working
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Dhaka, Chattogram"
                                    className="input input-bordered w-full"
                                    {...register("workingArea", {
                                        required: "Working area is required",
                                    })}
                                />
                            </div>













                            {/* Email & Region */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    {...register("email", { required: true })}
                                />

                                <select
                                    className="select select-bordered w-full"
                                    {...register("region", { required: true })}
                                >
                                    <option value="">Select your region</option>
                                    <option>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Khulna</option>
                                </select>
                            </div>

                            {/* NID & Contact */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="NID No"
                                    className="input input-bordered w-full"
                                    {...register("nid", { required: true })}
                                />

                                <input
                                    type="text"
                                    placeholder="Contact"
                                    className="input input-bordered w-full"
                                    {...register("contact", { required: true })}
                                />
                            </div>

                            {/* Warehouse */}
                            <select
                                className="select select-bordered w-full"
                                {...register("warehouse", { required: true })}
                            >
                                <option value="">Which warehouse you want to work?</option>
                                <option>Warehouse A</option>
                                <option>Warehouse B</option>
                                <option>Warehouse C</option>
                            </select>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-success w-full text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hidden md:flex items-center justify-center">
                        <img
                            src={rider}
                            alt="Rider Illustration"
                            className="max-h-[400px]"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BeARider;











