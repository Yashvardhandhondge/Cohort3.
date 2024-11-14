
import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='min-h-screen flex flex-col justify-center  items-center bg-gradient-to-br from-zinc-950  via-purple-900 to-zinc-900 '>
            <h2 className='text-2xl font-serif'>Signup</h2>
            <form>
                <div className=' flex flex-col '>
                    <input
                        type="text"
                        {...register('email')}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        {...register('Fullname')}
                        placeholder="Fullname"
                    />
                    <input
                        type="text"
                        {...register('password')}
                        placeholder="Password"
                    />
                    <button type="submit" className=''>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;  
