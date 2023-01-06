
import React from "react";
import { useNavigate , useParams} from 'react-router-dom'
import { useState } from 'react';
const AddActivity = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    let Params=useParams()

    const navigate = useNavigate()
    const userhandle = async () => {
        let result = await fetch(`http://localhost:5000/addActivity/${Params.id}`, {
            method: "put",
            body:JSON.stringify({name,location,duration}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        })
        result = await result.json()
        if(result.status){
            alert("Activity Add Successfully")

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
                            <div className="display-8"><h3>Add Activity</h3></div>
                            <hr />
                        </div>
                     

                        <div className="form-group">
                            <label for="">Activity Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label for="">Activity Location</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Location name" />
                        </div>
                        <div className="form-group">
                            <label for="">Activity Duration</label>
                            <input type="Number" value={duration} onChange={(e) => setDuration(e.target.value)}

                                className=" form-control-sm form-control" placeholder="Enter Duration time" />
                        </div>



                        <hr />
                        <div className="form-group">
                            <button type="submit" onClick={userhandle} className="btn btn-primary w-100 mt-2">Add Activity</button>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default AddActivity;