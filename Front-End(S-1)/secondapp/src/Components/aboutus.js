import { Grid } from "@mui/material"

const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <Grid container>
                    <Grid item md={6}>
                        <img className="img-fluid mig1" src="https://bncet.ac.in/wp-content/uploads/2022/01/15.jpg" alt="" />
                    </Grid>
                    <Grid className="mt-1" item md={6}>
                        <p className="bncetpara">BNCET is a consortium of leading colleges of International standards has been established under the auspicious aegis of Baij Nath Charitable and Educational Trust in the year 2008 for setting trends and raising standards for management and technical education.<br /><br />
                            The objective of our Techno-Managerial programs is to equip our students with knowledge, skills and confidence needed to develop corporate leaders, strategists and decision makers who can significantly contribute in nation building exercise.<br /><br />
                            An exhaustive, intensive industry and trade related curriculum covers almost all the functional dimensions of techno managerial education. Case studies, live projects, presentations, seminars, symposiums, internships, study trips and industrial visits part and parcel of the program.<br /><br />
                            It is our endeavor to make each BNCETian a success story and BNCET as a pre-eminent techno management college of India for nurturing talent and advancing knowledge in multi ethnic learning environment.</p>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Our faculity team
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Arman</a></li>
                                <li><a class="dropdown-item" href="#">Prakash</a></li>
                                <li><a class="dropdown-item" href="#">Sujeet</a></li>
                                <li><a class="dropdown-item" href="#">mithu sir</a></li>
                                <li><a class="dropdown-item" href="#">Anshu</a></li>
                                <li><a class="dropdown-item" href="#">Rajkumar</a></li>
                            </ul>
                        </div>

                    </Grid>

                </Grid>
            </div>


        </div>
    )
}
export default AboutUs