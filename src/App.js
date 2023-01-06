import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Private from "./components/Privatecomponent";
import UserHomepage from "./components/Userhomepage";
import ViewItinerary from "./components/ViewItinerary";
// import Productlist from "./components/productlist";
import Update from "./components/update";
import AddActivity from "./components/AddActivity";
import AddAccomodation from "./components/AddAccommodation";
import AddItiterary from "./components/AddItiterary"

import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
    <Navbar/>
   <Routes>
    
 
   <Route path="/viewitenerary/:id" element={<ViewItinerary></ViewItinerary>}></Route>
   <Route path="/addititerary" element={<AddItiterary></AddItiterary>}></Route>

   <Route path="/update/:id" element={ <Update></Update>}></Route>
   <Route path="/addactivity/:id" element={ <AddActivity></AddActivity>}></Route>
   <Route path="/addaccomadation/:id" element={ <AddAccomodation></AddAccomodation>}></Route>

   
    <Route path="/userhomepage" element={<UserHomepage></UserHomepage>}></Route>
    <Route path="/signup" element={<Signup /> }></Route>
    <Route path="/login" element={ <Login></Login>}>

    </Route>

   </Routes>
    </BrowserRouter>
  
    </>
  )

  
}

export default App;
