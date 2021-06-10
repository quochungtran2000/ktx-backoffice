import React from 'react'
import { useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
import { userApi } from '../api';
import { useUser } from '../context/userContext'

export default function Login() {
  const { setToken } = useUser()
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    userApi.login(data).then(({jwt}) => {
      console.log(jwt)
      localStorage.setItem('token', jwt)
      setToken(jwt)
    })
  }
  return (
    <div className="bg">
      <div className="box">
        <h1>LOG IN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="inp" type="text" placeholder="User name" {...register("username", { required: true })}/>
          <input className="inp" type="password" placeholder="Password" {...register("password", { required: true })}/>
          <hr style={{borderColor: 'rgba(0,0,0, 0)'}} />
          <input className="btn-login" type="submit" value="log in"/>
        </form>
      </div>
    </div>
  )
}
