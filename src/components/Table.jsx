import React, { useEffect, useState } from 'react'
import data1 from '../data.json'
import './table.css';
import {Link } from 'react-router-dom'
import axios from 'axios';
const Table = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('http://localhost:4000/user')
            // .then(res => res.json())
            // .then(d => console.log(d.data,'userData'))
            .then(d => setData(d.data))
    }
        , [data])
    
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/user/${id}`)
            // .then(res => console.log(res.data))
            // .then(d => setData(d.data))
    }

    // const handleCurrent = (id) => {
    //     axios.post(`http://localhost:4000/current/${id}`)

    // }

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
                     data && data.map((item,index) => {
                          return (
                              <tr key={item.id}>
                                  <td>{ item.id}</td>
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