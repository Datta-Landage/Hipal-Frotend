import React, {  useState} from "react";
import { useEffect } from "react";
import {useParams,useNavigate} from 'react-router-dom'

const Update = () => {
    const [from ,setFrom]=useState('')
    const [to ,setTo]=useState('')
    const [date ,setDate]=useState('')
    const [name,setName]=useState('')
    const [location,setLocation]=useState('')
    const [duration,setDuration]=useState('')
    const [totalCost,setTotalCost]=useState('')



  useEffect(() =>{
    getsingle()
  },[])
    let Params=useParams()
    let Navigate=useNavigate()
  
        
    
    const getsingle= async() =>{
      let result=await fetch(`http://localhost:5000/getItinarary/${Params.id}`)
      result= await result.json()
    let  data=result.data
    setFrom(data.from)
    setTo(data.to)
    setDate(data.date)
    setName(data.activities[0].name)
    setLocation(data.activities[0].location)
    setDuration(data.activities[0].duration)
    setTotalCost(data.totalCost)
    }
   
   
   
    const updatedata=async() =>{
      let result=await fetch(`http://localhost:5000/UpdateItinarary/${Params.id}`,{
        method:"put",
        body:JSON.stringify({from,to,date,name,location,duration,totalCost}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      result= await result.json()
      if(result.status){
        alert("Updated SuccessFully")
      }
      Navigate('/userhomepage')
     
        
    }
    return (
        <>
          <div className="container mt-4">

<div className="p-4 m-4">

    <div className="col-lg-5 rounded mx-auto  pt-4  shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-center col">
                <hr />
                <div className="display-8"><h3>Update Ititerary</h3></div>
                <hr />
        </div>
 
            <div className="form-group">
                <label for="">From</label>
                <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder="Full Name" />
            </div>
            <div className="form-group">
                <label for="">To</label>
                <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder="Name" />
            </div>
            <div className="form-group">
                <label for="">Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder="" />
            </div>
            <div className="form-group">
                <label for="">Activaty Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder=" Name" />
            </div>
            <div className="form-group">
                <label for="">Activaty Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder=" Name" />
            </div>
            <div className="form-group">
                <label for="">Activaty Duration</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required 
                     className="form-control form-control-sm"
                    placeholder="0" />
            </div>

            <div className="form-group">
                <label for="">TotalCost</label>
                <input type="text"  value={totalCost} onChange={(e) => setTotalCost(e.target.value)} required 
                     className="form-control form-control-sm"
                  
                    placeholder="0"
                />
            </div>


            <hr />
            <div className="form-group">
            <button type="submit" onClick={updatedata} className="btn btn-primary w-100 mt-2">Update A Ititerary</button>

            </div>


    </div>
</div>
</div>   
        </>
    )
}
export default Update;