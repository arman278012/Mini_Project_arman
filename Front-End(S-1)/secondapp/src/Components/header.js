import { NavLink } from "react-router-dom";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import { Grid } from "@mui/material";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid className="img11" item md={12}>
          <img className="img-fluid" src="https://bncet.ac.in/wp-content/uploads/2022/02/logo.png" alt="" />
        </Grid>
        {/* <Grid item md={4}>
          </Grid>

        <Grid item md={4}>
          
        </Grid> */}

        {/* <Grid className="call2" item md={4}>
          <AddIcCallIcon/> 8299760673  
        </Grid>
        <Grid className="myemail" item md={4}>
          <AddIcCallIcon/> bncet@gmail.com
        </Grid> */}
      </Grid>

      {/* <Grid container> */}
      <Grid className="mt-3" item md={12}>
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
                  <NavLink className="nav-link active" aria-current="page" to="about">About-Us</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/batchdashboard">batchdashboard</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/addnew">Add-Assinments</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/listbatch">Show batches</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/accord">Accord</NavLink>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </Grid>



    </div>  
  )}

export default Home;
{/* export default function SimpleAccordion() */}

 