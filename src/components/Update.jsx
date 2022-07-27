import React, {  useEffect, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {

    
    const [data, setData] = useState()
    const [updateId,setUpdateId] = useState(null)
    const [visible, setVisible] = useState(false)

    const navigate = useNavigate()

    const [addUserData, setAddUserData] = useState({
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




     useEffect(() => {
        // axios.get('http://localhost:4000/user')
        axios.get('https://boppotech.herokuapp.com/user')
            .then(d => setData(d.data))
    }
         , [data])
    
    



    const handleSubmit = (e) => {
        e.preventDefault()
     
        const newUser = {
             
            firstName: addUserData.firstName,
            lastName: addUserData.lastName,
            email: addUserData.email,
            phoneNumber: addUserData.phoneNumber,
            age: addUserData.age

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
        setAddUserData({
            ...addUserData,
            [e.target.name]: e.target.value
        })
    }

  return (
      <div className='formContainer'>
          <form >
              <div>
                  <label >First Name</label>
                  <input type="text" name='firstName' onChange = {handleChange} placeholder='First Name' required />                  
             </div>
              <div>
                 <label >Last Name</label>
                  <input type="text" name='lastName' onChange = {handleChange} placeholder='Last Name' required />                
              </div>

              <div>
                  <label >Email</label>
                  <input type='email' name='email' onChange = {handleChange} placeholder='Email' required />
              </div>

              <div>
                  <label >Password</label>
                  <input type={visible?"text": "password"} name='password' onChange = {handleChange} placeholder='Password' required />
                  <img className='passwordeye' onClick={handleVisiblity} src="https://i.postimg.cc/Sx44zQjF/eye-svgrepo-com.png" alt="password eye" />
              </div>

              <div>
                  <label > Contact No</label>
                  <input type="number" name='phoneNumber'  onChange = {handleChange} placeholder='Mobile No' required/>              
              </div>

              <div>
                  <label > Age</label>
                  <input type="number" name='age' onChange = {handleChange} placeholder='Age' required className='age' />      
              </div>
              <button onClick={handleSubmit} type='submit'>Update User</button>
          </form>
    </div>
  )
}

export default UpdateUser;
