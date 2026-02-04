
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(from);
            })
            .catch(error => {
                console.error(error)
            })
           
    }



    return (
        <div className=''>
            <h1 className='text-4xl  font-extrabold mb-6'>Welcome Back</h1>
            <p className=''>Login with Profast</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input " placeholder="Email" />
                    {errors.email && <span className='text-red-500'>This field is required</span>}


                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6 })} className="input " placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    {/* <button className="btn btn-neutral mt-4">Login</button> */}
                    <input className="btn btn-neutral mt-2 w-80 hover:bg-primary border-none" type="submit" value="Login" />
                </fieldset>
                <p>Don’t have any account?  <Link to={"/register"} className='font-bold text-accent'>Register</Link></p>

            </form>
            <h1 className=' ml-36 mb-2  text-xl mt-2'>Or</h1>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;