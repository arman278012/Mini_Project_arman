import { Grid } from "@mui/material";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Photo = () => {
  return (
    <div>

      {/* <div className="container-fluid div2 mt-3">
        <div className="row">
          <div className="col-md-12"> */}
      <Grid container>
        <Grid item md={12}>
          <img className="img-fluid" src="https://bncet.ac.in/wp-content/uploads/2022/02/Untitled-design-4.jpg" alt="..." />

        </Grid>
      </Grid>

      <div className="container-fluid foot">
        <Grid container>

          <Grid className="g1 mt-5" item md={2}>
            <h3 className="precampus mt-5">Campusssssss</h3>
            <p className="campus mt-3">Contact Us</p>
            <p className="campus">About BNCET</p>
            <p className="campus">Acedemics</p>
            <p className="campus">PLacement</p>
            <p className="campus">Carrier</p>
            <p className="campus">fAQs</p>
          </Grid>

          <Grid className="g2 mt-5" item md={2}>
            <h3 className="downlaod mt-5">Downloadable</h3>
            <p className="downlaod mt-3">Anti-Ragging Undertaking</p>
            <p className="downlaod">AICTE regulations</p>
            <p className="downlaod">Intership letter</p>
            <p className="downlaod">Faculity Leave form</p>
            <p className="downlaod">Staff Leave Form</p>
            <p className="downlaod">Registration-form</p>
          </Grid>



          <Grid className="g4 mt-5" item md={4}>

            <img className="cimg mt-5" src="https://bncet.ac.in/wp-content/uploads/2022/01/logo2.png" />
            <span><br/>

            <div className="social mt-5">
              <YouTubeIcon className="youtube" />
            </div>
            <div className="social mt-3">
              <InstagramIcon className="insta" />
            </div>
            <div className="social mt-3">
              <FacebookIcon className="fb" />
            </div>
            <div className="social mt-3">
              <TwitterIcon className="twitter" />
            </div>

          </span>

          </Grid>

          <Grid className="g5 mt-5" item md={2}>
            <h3 className="downlaod mt-5">Students</h3>
            <p className="downlaod mt-3">Course Eligibility</p>
            <p className="downlaod">Fee structure</p>
            <p className="downlaod">College Scholarship</p>
            <p className="downlaod">Government Scholarship</p>
            <p className="downlaod">Addmission form</p>
            <p className="downlaod">Brochure</p>
          </Grid>
          <Grid className="g5 mt-5" item md={2}>
            <h3 className="downlaod mt-5">Students</h3>
            <p className="downlaod mt-3">Course Eligibility</p>
            <p className="downlaod">Fee structure</p>
            <p className="downlaod">College Scholarship</p>
            <p className="downlaod">Government Scholarship</p>
            <p className="downlaod">Addmission form</p>
            <p className="downlaod">Brochure</p>
          </Grid>
        </Grid>
      </div>


    </div>

  )
}
export default Photo