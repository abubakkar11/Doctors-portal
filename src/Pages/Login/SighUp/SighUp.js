import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../../hooks/useToken';


const SighUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sighUpError , setSighUpError] = useState('')
    const {sighup ,updateUserProfile , googleSighUp} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const [createEmail , setCreateEmail] = useState('');
    const [token] = useToken(createEmail);
    const navigate = useNavigate()
    if(token){
        navigate('/')
    }
    const handleLogin = data =>{
      console.log(data)
      setSighUpError('')
      sighup(data.email , data.password)
      .then(result => {
        const user = result.user;
        handleUpdateUser(data.name)
        toast.success('Login SuccessFully')
        saveUser(data.name , data.email)
        console.log(user)
      })
      .catch(error =>{ 
        console.error(error)
        setSighUpError(error.message)
        
    })
    const handleUpdateUser= (name) =>{
        const profile = {
            displayName : name
          }
          updateUserProfile(profile)
          .then(() =>{})
          .catch(err => {
            console.error(err)
            
        })
    }
    }
    
    const googleSignUp = () =>{
        googleSighUp(googleProvider)
        .then(result =>{
            const user = result.user;
            toast.success('SighUp SuccessFully')
            console.log(user)
        })
        .catch(err => console.error(err))
    }
    const saveUser = (name , email) =>{
        const user = {name , email}
        fetch('http://localhost:5000/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCreateEmail(email)
        })
        console.log(name)
    }
   
    return (
        <div className='h-[700px]  flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input  {...register("name", {required: "Name is required"})} 
                        type="text"  className="input input-bordered  " />
                       {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    </div>
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
                    <p className='text-red-600'>{sighUpError}</p>
                    <input className="btn btn-accent w-full my-2 text-white" value={'Login'} type="submit" />
                    <p className='text-center'>Already have a account? <Link to={'/login'} className='text-secondary'>Pleace Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={googleSignUp} className='btn btn-outline w-full text-center my-2 rounded-lg'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SighUp;