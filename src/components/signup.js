import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [fname, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[error , setError]=useState(false)
    const navigate = useNavigate()
    const forsubmit = async () => {
        if(!fname || !phone || !email || !password){
            setError(true)
            return false
        }
        let result = await fetch("http://localhost:5000/register", {
            method: "Post",
            body: JSON.stringify({ fname,phone, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        if(result.status){
            alert("User Created Successfully !")
        }
        // localStorage.setItem('user',JSON.stringify(result.user))
        // localStorage.setItem('token',JSON.stringify(result.auth))
        navigate('/login')

    }

    return (
        <>
            <div className="container mt-4">

                <div className="p-4 m-4">

                    <div className="col-lg-5 rounded mx-auto  pt-4  shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="text-center col">

                            <img className="img-fluid w-25" 
                                src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png" alt=""
                            />
                                <hr />
                                <div className="display-8"><h3>Create An Account</h3></div>
                                <hr />
                        </div>
                        <h3 hidden className="alert alert-light border rounded">Create An Account</h3>
                     
                            <div className="form-group">
                                <label for="">Full Name</label>
                                <input type="text"  value={fname} onChange={(e) => setName(e.target.value)} required 
                                     className="form-control form-control-sm"
                                    placeholder="Full Name" />
                              {error && !fname && <span className="text-danger"> Invalid Name !!!</span>}
                            </div>
                            

                            <div className="form-group">
                                <label for="">Phone</label>
                                <input type="text" name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} required
                                     className="form-control form-control-sm"
                                  
                                    placeholder="+919588413799"
                                />
                            {error && !phone && <span className="text-danger"> Invalid Phone !!!</span>}

                            </div>


                            <div className="form-group">
                                <label for="">Email</label>
                                <input  value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" 
                                   
                                    className=" form-control-sm form-control" placeholder="example@gmail.com" />
                            {error && !email && <span className="text-danger"> Invalid Email !!!</span>}

                            </div>



                            <div className="form-group">
                                <label for="">Password</label>
                                <input type="password"
                                    value={password} onChange={(e) => setPassword(e.target.value)} required
                                  
                                    className="form-control form-control-sm" placeholder="********" />
                            {error && !password && <span className="text-danger"> Invalid Password !!!</span>}

                            </div>

                            <hr />
                            <div className="form-group">
                            <button type="submit" onClick={forsubmit} className="btn btn-primary w-100 mt-2">Create An Account</button>

                            </div>


                    </div>
                </div>
            </div>

        </>
    )
}
export default Signup;