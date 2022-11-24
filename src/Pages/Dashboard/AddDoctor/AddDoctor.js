import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_Key;
    console.log(imageHostKey)
    const handleAddDoctors = (data) => {
        const formData = new FormData();
        const image = (data.img[0]);
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}` , {
            method : "POST",
            body : formData
        })
        .then(res => res.json())
        .then(imageData => {
            console.log(imageData)
            if(imageData.success){
                console.log(imageData.data.url)
            }
        })
    }
    const { data: specialtes = [] } = useQuery({
        queryKey: ['specialtes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='h-[700px] '>
            <div className='w-96'>
                <h2 className='text-xl text-center'>Add Doctor</h2>
                <form onSubmit={handleSubmit(handleAddDoctors)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input  {...register("name", { required: "Name is required" })}
                            type="text" className="input input-bordered  " />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: "Email Address is required" })}
                            type="text" className="input input-bordered  " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <select {...register('specialty')} className="select select-bordered w-full ">
                            {
                                specialtes?.map(specialty => <option 
                                key={specialty._id}
                                value ={specialty.name}
                                >{specialty.name}</option>)
                            }
                            
                        </select>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input  {...register("img", { required: "Photo is required" })}
                            type="file" className="input input-bordered p-2 " />
                        {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}

                    </div>
                    <input className="btn btn-accent w-full my-2 text-white" value={'Add Doctor'} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;