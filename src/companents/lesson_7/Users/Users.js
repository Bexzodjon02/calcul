import React, { useEffect, useState } from 'react'
import homLogo from '../homeLogo.png'

import { Link } from "react-router-dom";
import axios from 'axios'
import "./user.css"
export default function Users() {
  const [student, setStudent] = useState([])
  const [filter, setFilters] = useState([])
  useEffect(() => {
    getStudent()
  }, [])

  function getStudent() {
    axios.get("https://myjson.dit.upm.es/api/bins/h8pl")
      .then(ress => {
        setStudent(ress.data)
        setFilters(ress.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  //input search
  function setInputText(value) {
    console.log(value);
    let inpResalt = filter.filter(item => {
      return (
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    })
    setStudent(inpResalt)
    console.log(inpResalt);
  }
  //cotegory 
  function categorItem(value) {
    console.log(value);
    let Category = filter.filter(item => {
      return (
        item.group.includes(value)
      )
    })
    console.log(Category)
    setStudent(Category)
  }
  //cotegory ====================================
  function itemCourse(value) {
    console.log(value);
    let CourseItem = filter.filter(item => {
      return (
        item.course.includes(value)
      )
    })
    console.log(CourseItem)
    setStudent(CourseItem)
  }
  //=================== //status =================
  function statusItem(value) {
    console.log(value);
    let statusItem = filter.filter(item => {
      return (
        item.status_payment.includes(value)
      )
    })
    console.log(statusItem)
    setStudent(statusItem)
  }
  console.log(student);
  return (
    <div className='container'>
        <Link to="/"><img style={{width:"40px"}} src={homLogo}/></Link>
      <div className='row  '>

        <div className='SelInp'>


          <div className='border_2'>
            <input onInput={(val) => { setInputText(val.target.value) }} type='text' placeholder='Qidiruv...................!'/>

          </div>
          <div className='border_2'>
            <select onChange={(val) => categorItem(val.target.value)}>
              <option vlaue="Groups" disabled >Groups</option>
              <option vlaue="soff_001">soff_001</option>
              <option vlaue="soff_002">soff_002</option>
              <option vlaue="soff_003">soff_003</option>
            </select>
          </div>
          <div className='border_2'>
            <select onChange={(val) => itemCourse(val.target.value)}>
              <option vlaue="Course" disabled >Course</option>
              <option vlaue="front-end">front-end</option>
              <option vlaue="back-end">back-end</option>
            </select>
          </div>
          <div className='border_2'>
            <select onChange={(val) => statusItem(val.target.value)}>
              <option vlaue="status_payment" disabled >
                Status_payment</option>
              <option vlaue="delay">delay</option>
              <option vlaue="unpaid">unpaid</option>
            </select>
          </div>
        </div>
      </div>
      {
        (student.length > 0) && (
          <table className='table'>
            <thead>
              <tr>
                <th className='border'>#</th>
                <th className='border'>First Name</th>
                <th className='border'>Password</th>
                <th className='border'>Groups</th>
                <th className='border'>Course</th>
                <th className='border'>Roles</th>
                <th className='border'>Status_payment</th>
              </tr>
            </thead>

            <tbody>
              {
                student.map((item, index) => {
                  return (
                    <tr key={index} >
                      <td className='border'>{item.id}</td>
                      <td className='border'>{item.name}</td>
                      <td className='border'>{item.password}</td>
                      <td className='border'>{item.group}</td>
                      <td className='border'>{item.course}</td>
                      <td className='border'>{item.role}</td>
                      <td className='border'>{item.status_payment}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )

      }
    </div>
  )
}
