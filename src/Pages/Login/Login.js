import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sighUpError , setSighUpError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const {sighIn , googleSighUp} = useContext(AuthContext);
    const [createUserEmail , setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = data =>{
    setSighUpError('')
      console.log(data)
      sighIn(data.email , data.password)
      .then(result =>{
        const user = result.user;
        toast.success('Login SuccessFully')
        console.log(user)
        setCreateUserEmail(data.email)
      })
      .catch(error =>{
        console.error(error)
        setSighUpError(error.message)
        toast.error(error.message)
      })
    }
    const googleSignUp = () =>{
        googleSighUp(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            toast.success('SighUp SuccessFully')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='h-[700px]  flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", {required: "Email Address is required"})} 
                        type="text"  className="input input-bordered  " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input   {...register("password" , 
                        {required: "Email Address is required" , minLength:{value : 6 , message:'Password must be 6 '}})}
                         type="password"  className="input input-bordered  " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <p>Forgot Password?</p>
                    <p className='text-red-600'>{sighUpError}</p>
                    <input className="btn btn-accent w-full my-2 text-white" value={'Login'} type="submit" />
                    <p className='text-center'>New to Doctors Portal? <Link to={'/sighup'} className='text-secondary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={googleSignUp} className='btn btn-outline w-full text-center my-2 rounded-lg'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;