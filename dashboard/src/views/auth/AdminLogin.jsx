import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { admin_login } from '../../store/Reducers/authReducer'

const AdminLogin = () => {
    const dispatch = useDispatch()
   
    const [state, setSatate] = useState({
        email: '',
        password: ''
    })
    const inputHandle = (e) => {
        setSatate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#2E054E] flex justify-center items-center'>
            <div className='w-[350px] text-[#FFFFFF] p-2'>
                <div className='bg-[#561381] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="image" />
                        </div>
                    </div>
                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-violet-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-violet-400 overflow-hidden' type="text" name='email' placeholder='email' id='email' required />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-violet-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-violet-400 overflow-hidden' type="password" name='password' placeholder='password' id='password' required />
                        </div>
                        <button  className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                            {
                                 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin