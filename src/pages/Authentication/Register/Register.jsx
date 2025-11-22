
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
// import { TbUserUp } from "react-icons/tb";

const Register = () => {
    const {createUser} = useAuth();
    const navigate = useNavigate();

    const {register,handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data)=>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            console.log(result.user);
        })

        .catch(error =>{
            console.error(error)
        })

        navigate('/')

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

                                    <label className="label">Email</label>
                                    <input type="email" {...register("email")} className="input" placeholder="Email" />

                                    <label className="label">Password</label>
                                    <input type="password" {...register("password", {required: true, minLength:6})} className="input" placeholder="Password" />
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