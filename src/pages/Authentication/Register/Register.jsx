
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
// import { TbUserUp } from "react-icons/tb";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState('');
    const axiosInstance = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(async(result) => {
                console.log(result.user);

                // update userinfo in database
                const userInfo ={
                    email: data.email,
                    role: 'user', 
                    // photoURL: profilePic,
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString()
                }

                const userRes = await axiosInstance.post('/users', userInfo)
                console.log(userRes.data); 
            
                // update user profile in firebase
                const userProfile = {
                    displayName: data.name,
                    photoURL: profilePic
                }

                updateUserProfile(userProfile)
                .then(()=>{
                    console.log('profile updated')
                })

                .catch(error =>{
                    console.log(error)
                })


            })

            .catch(error => {
                console.error(error)
            })

        navigate('/')

    }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        console.log(image);
        const formData = new FormData;
        formData.append('image', image);
        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`

        const res = await axios.post(imageUploadUrl, formData);

        setProfilePic(res.data.data.url)


    }



    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">

                <div className="card-body">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create an Account</h1>
                        <p className="py-6">
                            Register with Profast
                        </p>
                    </div>
                    {/* <TbUserUp  className='p-8  rounded-full text-white bg-black '/> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">

                            {/* Name field */}
                            <label className="label">Name</label>
                            <input type="text" {...register("name")} className="input" placeholder="Your name" />


                            {/* image field */}
                            <label className="label">Profile</label>
                            <input onChange={handleImageUpload} type="file" className="input" placeholder="Your profile picture" />

                            {/* Email field */}
                            <label className="label">Email</label>
                            <input type="email" {...register("email")} className="input" placeholder="Email" />

                            {/* Password field */}
                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                            }

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 w-80 hover:bg-primary">Register</button>
                        </fieldset>
                    </form>
                    <p>Already have an account? <Link to={"/login"} className='font-bold text-accent'>Login</Link></p>
                    <h1 className='text-center mb-2 lg:-ml-20 text-xl'>Or</h1>
                    <SocialLogin></SocialLogin>

                </div>

            </div>




        </div>
    );
};

export default Register;