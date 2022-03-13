import { NavLink } from "react-router-dom";
const Home=()=>{
    return(
<div>
  <div className="bncet_logo">
  <img src="https://image3.mouthshut.com/images/imagesp/925718190s.png" alt=""/>
  </div>
  {/* <div className="container center">
   <img src="https://image3.mouthshut.com/images/imagesp/925718190s.png" alt=""/>
   </div> */}
     {/* <div className="container topdiv mt-2">
       <div className="row">
         <div className="col-md-3">
           <h6 className="column1">bncet777@gmail.com</h6>
         </div>
         <div className="col-md-3">
         <h6 className="column1">8299760672</h6>
           </div>
           <div className="col-md-3">
         <h6 className="column1">NBA accridiated</h6>
           </div>
           <div className="col-md-3">
         <h6 className="column1">college code-431</h6>
           </div>
        </div>
     </div> */}

            <div className="container-fluid c1">
              <div className="row">
                <div className="col-md-12">
                <h1 className= "cl_name mt-3">B.N COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
                </div>
            </div>
            </div>
               
         
  <div className="contianer-fluid">
    <div className="row">
      <div className="col-md-12">

      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
    <div>
    {/* <NavLink className="navbar-brand" to="/header">Home</NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
     
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="home">Home</NavLink>
        </li>

      {/* <li className="nav-item">
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle bg-danger drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       LOGIN
      </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {/* <li><NavLink className="dropdown-item bg-danger" to="/login">student</NavLink></li> */}
    {/* <li><NavLink className="dropdown-item bg-danger" to="teacherlogin">Teacher</NavLink></li>
  </ul>
</div>
  </li>  */}
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/teacherlogin">Teacher-Login</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/teachersignup">Teacher-Signup</NavLink>
        </li>

      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/gallery">gallery</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">About-Us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/batchdashboard">batchdashboard</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/addnew">Add-Assinments</NavLink>
        </li>
      </ul>    
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
</div>
 )}
export default Home;


{/* <div className="container-fluid maindiv">
    <div className="row">
      <div className="cl_img col-md-12">
        
        <img src="https://image3.mouthshut.com/images/imagesp/925718190s.png" alt=""/>

      </div>
    </div>
    </div> */}