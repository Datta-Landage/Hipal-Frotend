import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const UserHomepage = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {
        getproduct();
        
    }, [])





    const getproduct = async () => {
        let userId = JSON.parse(localStorage.getItem('userId'))
        let result = await fetch(`http://localhost:5000/summary/${userId}`)
        result = await result.json()

        setProducts(result.data);
        // console.log(result)



    }

    // console.log(array)
    const deleteaccommodation = async (ItiteraryId,AccommodationId) => {
        let result = await fetch(`http://localhost:5000/deleteaccommodation/${ItiteraryId}/${AccommodationId}`, {
            method: "delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
       result= await result.json()
       if(result.status){
        alert("Accommodation Deleted Successfully")
       }

        getproduct()
    }
    const deleteactivity = async (ItiteraryId,ActivatyId) => {
        let result = await fetch(`http://localhost:5000/deleteActivity/${ItiteraryId}/${ActivatyId}`, {
            method: "delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
       result= await result.json()
       if(result.status){
        alert("Activity Deleted Successfully")
       }

        getproduct()
    }
  
    return (
        <>

            <div className="container-fluid">
                <table className="table mt-2">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Date</th>
                            <th scope="col">Activities</th>
                            <th scope="col">Accommodation</th>
                            <th scope="col">TotalCost</th>
                            <th scope="col">Add</th>
                            <th scope="col">View</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.length > 0 ? products.map((product, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.from}</td>
                                    <td>{product.to}</td>
                                    <td>{product.date.toString()}</td>
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
                                                        <th scope="col">Add</th>
                                                        <th scope="col">Delete</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {product.activities.map((i, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{i.name}</td>
                                                            <td>{i.location}</td>
                                                            <td>{i.duration} Minute</td>
                                                            <td><button className="btn btn-success"><Link className="text-white" to={`/addactivity/${product._id}`}>Add</Link></button></td>
                                                            <td><button onClick={() => deleteactivity(product._id,i._id)} className="btn btn-danger">Delete</button></td>

                                                        </tr>)
                                                    }


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
                                                        <th scope="col">Add</th>
                                                        <th scope="col">Delete</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {product.accommodation.map((i, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{i.from}</td>
                                                            <td>{i.to}</td>
                                                            <td>{i.hotelName}</td>
                                                            <td>{i.location}</td>
                                                            <td><button className="btn btn-success"><Link className="text-white" to={`/addaccomadation/${product._id}`}>Add</Link></button></td>
                                                            <td><button onClick={() => deleteaccommodation(product._id,i._id)} className="btn btn-danger">Delete</button></td>


                                                        </tr>)
                                                    }


                                                </tbody>
                                            </table>

                                        </ul>
                                    </div></td>
                                    <td>{product.totalCost}</td>
                                    <td> <button className="btn btn-primary"><Link className="text-white" to={"/addititerary"}>Add</Link></button> </td>

                                    <td> <button className="btn btn-primary"><Link className="text-white" to={`/viewitenerary/${product._id}`}>View</Link></button> </td>

                                    <td> <button className="btn btn-primary"><Link className="text-white" to={`/update/${product._id}`}>Update</Link></button> </td>


                                </tr>
                            ) : <h1>No result Found</h1>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default UserHomepage;