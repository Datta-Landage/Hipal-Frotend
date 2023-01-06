
import React from "react";
import { useNavigate , useParams} from 'react-router-dom'
import { useState } from 'react';
const AddAccommodation = () => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [hotelName, setHotelname] = useState('');
    const [location, setLocation] = useState('');

    let Params=useParams()

    const navigate = useNavigate()
    const userhandle = async () => {
        let result = await fetch(`http://localhost:5000/addaccommodation/${Params.id}`, {
            method: "put",
            body:JSON.stringify({from,to,hotelName,location}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        })
        result = await result.json()
        if(result.status){
            alert("Accommodation Add Successfully")

        }
        navigate("/UserHomepage")

    }
    return (
        <>
            <div className="container mt-4">

                <div className="p-4 m-4">

                    <div className="col-lg-5 rounded mx-auto  pt-4  shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="text-center col">

                          
                            <hr />
                            <div className="display-8"><h3>Add Accommodation</h3></div>
                            <hr />
                        </div>
                     

                        <div className="form-group">
                            <label for="">From</label>
                            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Date" />
                        </div>
                        <div className="form-group">
                            <label for="">To</label>
                            <input type="date" value={to} onChange={(e) => setTo(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Date" />
                        </div>
                        <div className="form-group">
                            <label for="">HotelName</label>
                            <input type="text" value={hotelName} onChange={(e) => setHotelname(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Hotelname" />
                        </div>
                        <div className="form-group">
                            <label for="">Hotel Location</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Location" />
                        </div>



                        <hr />
                        <div className="form-group">
                            <button type="submit" onClick={userhandle} className="btn btn-primary w-100 mt-2">Add Accommodation</button>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default AddAccommodation;