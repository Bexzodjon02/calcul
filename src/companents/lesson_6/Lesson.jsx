import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Axios from "axios";

export default function Lesson() {
    const [students, setStudents] = useState([])
    const [filterS, setFilterS] = useState([])
    
    
    
    const [ism , setIsm]= useState("")
    const [passwor , setpasswor]= useState([])
    const [role , setRole]= useState([])
    const [status , setStatus]= useState([])
    const [currentIndex , setCurrentIndex] = useState('')
   
    useEffect(() => {
        getStudents()
    }, [])

    function getStudents() {
        Axios.get("https://myjson.dit.upm.es/api/bins/h8pl")
            .then(ress => {
                (ress.data)
                setFilterS(ress.data)
                console.log(ress);
            })
            .catch(err => {
                console.log(err);
            })
    }


    function search(value) {
        let searchStudent = students.filter(item => {
            return (item.name.toLowerCase().includes(value.toLowerCase()))
        })
        setFilterS(searchStudent)
    }
     let categirys = []
     
    function Catedory(value) {
        console.log(value.target.value);
         categirys = students.filter(item =>{
            return (item.status_payment.includes(value.target.value))
        })
        setFilterS(categirys)
        // console.log(categirys)
    } 
    
    function searchLast(value) {
        let bosh = filterS.filter(item => {
            return (item.name.toLowerCase().includes(value.toLowerCase()))
        })
        setFilterS(bosh)
    }
    
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    

    
    function handleShow(index){
        setShow(true);
        setCurrentIndex(index-1)
        setIsm(students[index-1].name)
        setpasswor(students[index-1].password)
        setRole(students[index-1].role)
        setStatus(students[index-1].status_payment)
        // console.log("ishla")
        
    }
   function handleClose() {
    setShow(false);
        
        let newStudent = [...students]
        newStudent[currentIndex].name = ism
        newStudent[currentIndex].password = passwor
        newStudent[currentIndex].role = role
        newStudent[currentIndex].status_payment = status
        // console.log(newStudent[currentIndex].name);
        
   }
    function del(params) {
        setShow(false);
        console.log("ishladim")
    }
    
    return (

        <div>
            <div className="row">
                <div className="col-4">
                    <input onInput={(val) => search(val.target.value)} type="text" />
                </div>
                <div className="col-4">
                    <Form.Select aria-label="Default select example " onChange={(val)=>Catedory(val)}>
                        <option>Open this select menu</option>
                        <option  value="paid">paid</option>
                        <option  value="unpaid">unpaid</option>
                        <option value="delay">delay</option>
                    </Form.Select>
                </div>
                    <input onInput={(val) => searchLast(val.target.value)} type="text" />

            </div>
            
            {/* modal */}
            {

                (filterS.length > 0) ? (
                    <table className='table'>
                        <tbody>
                            {
                                filterS.map((item, index) => {
                                    return (
                                        <tr key={index} onClick={() =>handleShow(item.id)}>
                                            <td >{item.id}</td>
                                            <td>{item.name}</td>
                                            <td >{item.password}</td>
                                            <td >{item.role}</td>
                                            <td >{item.status_payment}</td>
                                            <td >{<button style={{borderRadius:"50%", weight:"30px", height:"35px"}} onClick={(val)=>del(val.target.value)}>Del</button>}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                    : (
                        <Spinner animation="border" size="100px" />

                    )
            }
        <div>
    
            
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={ism} onInput={(val) => setIsm(val.target.value)} type="text" placeholder='text kiritng'/>
            <input value={passwor} onInput={(val) => setpasswor(val.target.value)} type="text"placeholder='text kiritng'/>
            <input value={role} onInput={(val) => setRole(val.target.value)} type="text"placeholder='text kiritng' />
            <input value={status} onInput={(val) => setStatus(val.target.value)} type="text"placeholder='text kiritng' />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>

    )
}