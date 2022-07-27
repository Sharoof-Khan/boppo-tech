import React, {  useEffect, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {

    
    const [updateId,setUpdateId] = useState(null)
    const [visible, setVisible] = useState(false)

    const navigate = useNavigate()

    const [updateUserData, setUpdateUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        age: ''

    }) 

    useEffect(() => {
        const currId = localStorage.getItem('id')
        // console.log('currId:', currId)
        
        setUpdateId(currId)
        
    },[])


    

    
    
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newUser = {
             id: updateId,
            firstName: updateUserData.firstName,
            lastName: updateUserData.lastName,
            email: updateUserData.email,
            phoneNumber: updateUserData.phoneNumber,
            age: updateUserData.age

        };

        axios.patch(`https://boppotech.herokuapp.com/user/${updateId}`, newUser)
        
        alert('Data Updated')
        localStorage.removeItem('id')
        navigate('/')

    }
        
    const handleVisiblity = () => {
        setVisible(!visible)
    }
    
    const handleChange = (e) => {
        setUpdateUserData({
            ...updateUserData,
            [e.target.name]: e.target.value
        })
    }
    // console.log(data,'dataFromDB');

  return (
      <div className='formContainer'>
          <form >
              <div>
                  <label >First Name</label>
                  <input type="text" name='firstName' value={updateUserData.firstName}  onChange = {handleChange} placeholder='First Name' required />                  
             </div>
              <div>
                 <label >Last Name</label>
                  <input type="text" name='lastName' value={updateUserData.lastName} onChange = {handleChange} placeholder='Last Name' required />                
              </div>

              <div>
                  <label >Email</label>
                  <input type='email' name='email' value={updateUserData.email} onChange = {handleChange} placeholder='Email' required />
              </div>

              <div>
                  <label >Password</label>
                  <input type={visible?"text": "password"} name='password'  onChange = {handleChange} placeholder='Password' required />
                  <img className='passwordeye' onClick={handleVisiblity} src="https://i.postimg.cc/Sx44zQjF/eye-svgrepo-com.png" alt="password eye" />
              </div>

              <div>
                  <label > Contact No</label>
                  <input type="number" name='phoneNumber' value={updateUserData.phoneNumber} onChange = {handleChange} placeholder='Mobile No' required/>              
              </div>

              <div>
                  <label > Age</label>
                  <input type="number" name='age'  value={updateUserData.age}onChange = {handleChange} placeholder='Age' required className='age' />      
              </div>
              <button onClick={handleSubmit} type='submit'>Update User</button>
          </form>
    </div>
  )
}

export default UpdateUser;
