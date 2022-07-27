import React, { useEffect, useState } from 'react'
import './table.css';
import {Link } from 'react-router-dom'
import axios from 'axios';
const Table = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://boppotech.herokuapp.com/user')
            // .then(res => res.json())
            // .then(d => console.log(d.data,'userData'))
            .then(d => setData(d.data))
    }
        , [data])
    
    
    const handleDelete = (id) => {
        // axios.delete(`http://localhost:4000/user/${id}`)
        axios.delete(`https://boppotech.herokuapp.com/user/${id}`)
            
    }

  

    

  return (
      <div className="container">
          <Link to={'/adduser'}>
          <button className='addUser'  >Add User</button>
          </Link>
            <table>
                <thead>
                  <tr>
                      <th>Sr No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                      <th>Age</th>
                      <th>Update</th>
                      <th>Delete</th>
                </tr>
                </thead>
              <tbody>
                  {
                    //   data?.length === 0 &&  <tr><td colSpan="7">No Data</td></tr> 
                     data && data.map((item,index) => {
                          return (
                              <tr key={item.id}>
                                  <td>{ index+1}</td>
                                  <td>{item.firstName}</td>
                                  <td>{item.lastName}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phoneNumber}</td>
                                  <td>{item.age}</td>
                                  <td> 
                                        <Link to={`/update`}>
                                        {/* <Link to={`/update`}> */}
                                    <div className='editData' >
                                          <img src="https://i.postimg.cc/TPyhRPWn/edit-icon.png" alt="edit" />
                                          <span>Edit</span>
                                          </div>
                                          </Link>
                                  </td>
                                  
                                      <td>
                                      <div className='deleteData' onClick={() => handleDelete(item.id)}> 
                                          <img src="https://i.postimg.cc/vTnksT9q/delete-icon.png" alt="delete" />
                                            <span>Delete</span>  
                                          
                                  </div>
                                  </td>
                              </tr>
                          )
                      })
                  }
                 
                </tbody>
            </table>
        </div>
    );
  
}

export default Table