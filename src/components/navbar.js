// import React from "react";
import { Link ,useNavigate}  from "react-router-dom";




const Navbar = () => {
    let auth=localStorage.getItem('userId')
    const Navigate=useNavigate()
    const logoutuser=() =>{
        localStorage.clear()
        Navigate('/signup')
    }
    return (
       <>
 <div className="container-fluid m-0 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  
                  
                    {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active"> */}
                         {/* < Link to="/addproduct" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                        < Link to="/" className="nav-link">Login</Link>
                        </li> */}
                        
                        {/* <li className="nav-item">
                        < Link to="/signup"  className="nav-link">Logout</Link>
                        </li> 
                        <li className="nav-item">
                        < Link to="/profile"  className="nav-link"><span > <h5>Hi</h5></span></Link>
                        </li>  */}
                    {/* </ul> */}
                { auth ?
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        
                         <li className="nav-item">
                         < Link to="/userhomepage" className="nav-link">UserHomeage</Link>
                         </li>
                         <li className="nav-item">
                         < Link to="/addititerary" className="nav-link">AddItiterary</Link>
                         </li>
                         <li className="nav-item">
                         <p className="nav-link" onClick={logoutuser}>Logout</p>
                         </li>
                          
                     <li className="nav-item">
                          < Link to="/" className="nav-link" >TravelApp </Link>

                        </li> 
                        </ul> :
                         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item ">
                          < Link to="/signup" className="nav-link">Signup</Link>

                        </li>
                        <li className="nav-item">
                        < Link to="/login" className="nav-link">Login</Link>

                        </li>
                        </ul>
                             }
                        
                        <li className="nav-item">
                        < Link to="/viewitenerary" className="nav-link">View</Link>
                        </li>
                        <li className="nav-item">
                        < Link to="/update" className="nav-link">Update</Link>
                        </li>
                        <li className="nav-item">
                        < Link to="/addactivity" className="nav-link">AddActivity</Link>
                        </li>
                        <li className="nav-item">
                        < Link to="/addaccomadation" className="nav-link">AddAccomodation</Link>
                        </li>
                        
                     
                     
                     <form class="d-flex">
        <input className="form-control me-2 m-1" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success m-1" type="submit">Search</button>
      </form>
                            

                </div>
            </nav>
        </div>

       </>
    )
}
export default Navbar;