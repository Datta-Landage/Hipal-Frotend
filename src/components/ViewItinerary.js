import React, { useEffect} from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'

const ViewItinerary = () => {
    const [data,SetData]=useState({})
    let Params=useParams()
    useEffect(() => {
         getsingle();
    },[])
    const getsingle= async() =>{
      let result=await fetch(`http://localhost:5000/getItinarary/${Params.id}`)
     result= await result.json() 
      SetData(result.data)
    }
    return (
        <>
        <table class="table">
  <thead>
  <tr>
              <th scope="col">id</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Date</th>
              <th scope="col">Activities</th>
              <th scope="col">Accommodation</th>
              <th scope="col">TotalCost</th>
{/* 
              <th scope="col">View</th>
              <th scope="col">Update</th> */}
            </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{data.from}</td>
      <td>{data.to}</td>
      <td>{data.date}</td>
      <td><div class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Activities
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Duration</th>
                                                        

                                                    </tr>
                                                </thead>
                                                <tbody> 
                                                    {/* { data.activities.length > 0 ?  data.activities.map((i, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{i.name}</td>
                                                            <td>{i.location}</td>
                                                            <td>{i.duration} Minute</td>
                                                          
                                                        </tr>)
                                                   :"" }  */}
                                                    
                                                </tbody>
                                            </table>

                                        </ul>
                                    </div></td>
                                    <td><div class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Accommodation
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">From</th>
                                                        <th scope="col">To</th>
                                                        <th scope="col">HotelName</th>
                                                        <th scope="col">Location</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* { data.accommodation.length > 0? data.accommodation.map((i, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{i.from}</td>
                                                            <td>{i.to}</td>
                                                            <td>{i.hotelName}</td>
                                                            <td>{i.location}</td>

                                                        </tr>):""
                                                    } */}


                                                </tbody>
                                            </table>

                                        </ul>
                                    </div></td>
      <td>{data.totalCost}</td>
    </tr>
  
  
  </tbody>
</table>
        </>
    )
}
export default ViewItinerary;