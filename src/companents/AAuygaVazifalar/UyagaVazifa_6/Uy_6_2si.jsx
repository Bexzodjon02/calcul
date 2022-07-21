import React,{useEffect,useState} from 'react'
import Axios from "axios";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Daryo() {
    const [students, setStudents] = useState([])
    const [filterS, setFilterS] = useState([])
    const [ism , setIsm]= useState("")
    const [category , setcategory]= useState([])
    const [datas , setdatas]= useState([])
    const [currentIndex , setCurrentIndex] = useState('')
    useEffect(() => {
        getStudents()
    }, [])
    function getStudents() {
        Axios.get("https://myjson.dit.upm.es/api/bins/fsxf")
            .then(ress => {
                setStudents(ress.data)
                setFilterS(ress.data)
          console.log(ress.data);
            })
            .catch(err => {
                console.log(err);
            })
    } 
   
    function search(value) {
        let searchStudent = students.filter(item => {
            return (item.title.toLowerCase().includes(value.toLowerCase()))
        })
        setFilterS(searchStudent)
    }
    let categirys = []
     
    function Category(value) {
        console.log(value.target.value);
         categirys = students.filter(item =>{
            return (item.categories.includes(value.target.value))
        })
        setFilterS(categirys)
        
    } 
    function searchLast(value) {
        let bosh = filterS.filter(item => {
            return (item.title.toLowerCase().includes(value.toLowerCase()))
        })
        setFilterS(bosh)
    }
    function handleShow(index){
        setShow(true);
        setCurrentIndex(index)
        setIsm(students[index].title)
        setcategory(students[index].categories)
        setdatas(students[index].date)
        // console.log("ishla")
        
    }
    const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
   function handleClose() {
    setShow(false);
        
        let newStudent = [...students]
        newStudent[currentIndex].title = ism
        newStudent[currentIndex].categories = category
       
        newStudent[currentIndex].date = datas
        // console.log(newStudent[currentIndex].name);
        
   }
    return (

        <div>
           <Card>
                <div className="col-4">
                <input onInput={(val) => search(val.target.value)} type="text" />
                </div>
                <div className="col-3">
                    <Form.Select aria-label="Default select example " onChange={(val)=>Category(val)}>
                        <option>Open this select menu</option>
                        <option  value="Mahalliy">Mahalliy</option>
                        <option  value="Sport">Sport</option>
                        <option value="Dunyo">Dunyo</option>
                        <option value="Asosiy yangiliklar">Asosiy yangiliklar</option>
                    </Form.Select>
                </div>
                <input onInput={(val) => searchLast(val.target.value)} type="text" />

           </Card>
               
              
   

           
    
        
    
    
    {(filterS.length > 0) ? (
            <div className='Card'>
               
                    {
                        filterS.map((i, index) =>{
                            return(
                                <div key={index} onClick={() =>handleShow(index)} >
                                <p>{i.categories}</p>
                                <p>{i.date}</p>
                                <p>{i.title}</p>
                               
                              </div>
                              )
                    
                        })
                    }
              
            </div>
        )
            : (
                // <Spinner animation="border" size="100px" />
console.log('eror')
            )
    }
<div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control value={ism} onInput={(val) => setIsm(val.target.value)}  type="email" placeholder="Enter title" />
        <Form.Control value={category} onInput={(val) => setcategory(val.target.value)}   type="email" placeholder="Enter categories" />
        <Form.Control value={datas} onInput={(val) => setdatas(val.target.value)}   type="email" placeholder="Enter data" />
          
        
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
    )}