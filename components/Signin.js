import React from 'react'

import {useForm} from 'react-hook-form'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './Signin.css'

function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onFormSubmit = (userObj) => {
        axios.post("https://localhost:5000/user-api/create-user",userObj)
        .then((res)=>{
            navigate('./GameRules')
        })
        .catch((err)=>{
            console.log(err)
            navigate('/');
        })
    }
    return(
        <div >
            <h1 className="heading text-center mt-3">Enter your details</h1>
            <form className='w-50' onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
            <legend>Sign Up</legend>
                <div className="mb-3 ">
                    <label htmlFor="username" name="" id="">Enter Username</label>
                    <input type="text" name="" id="username" className="form-control" {...register("username", { required: true})}/>
                    {errors.username?.type === 'required' && <p className='text-danger'>* Username is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Enter e-mail address</label>
                    <input type="email" name="" id="email" className="form-control" {...register("email", { required: true, minLength: 6})}/>
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                    {errors.email?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Enter password</label>
                    <input type="password" name="" id="password" className="form-control" {...register("password", { required: true, minLength: 4})}/>
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                    {errors.password?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                </div>
                <div className="mb-3">
                    <label>Select Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="male" {...register("gender")}value="male"/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                   </div>
                   <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="female" {...register("gender")}value="female"/>
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div> 
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="others"  {...register("gender")}value="others"/>
                        <label className="form-check-label" htmlFor="others">Others</label>
                    </div>   
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                </fieldset>
            </form>
         <div className="text-center">
            <Link to="GameRules"><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4c2afc493b0756d.png" width="120px" alt="no img"/></Link>
        </div>
        </div>
    )
}
export default Signin
