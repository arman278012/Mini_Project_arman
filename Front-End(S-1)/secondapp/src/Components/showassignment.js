import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import app_config from "./config";

const ShowAssignment = () => {
    const url = app_config.api_url;

    const SubjectForm = {
        batch: "",
        subject: "",
      };


      const showAssign = (values) => {
        console.log(values);
        
    //   fetch(url + "/showassignment/checklogin", {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //     headers: { "Content-Type": "application/json" },
    //   }).then((res) => {
    //     console.log(res.status);
    //     if (res.status === 200) {
          
    //       Swal.fire({
    //         icon: "success",
    //         title: "Success",
    //         text: "Thanku!!",
    //       })
    //     } else if (res.status === 300) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Failed",
    //         text: "Login Failed",
    //       });
    //     }
    //   });
    }




    return (

        
        <div>
            <Formik initialValues={SubjectForm} onSubmit={showAssign}>
            {({values,handleChange,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                <Grid container spacing={10}>

                    <Grid item md={6}>
                        <TextField
                            className="w-100 mt-5"
                            label="Enter your batch here"
                            onChange={handleChange}
                            value={values.batch}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            className="w-100 mt-5"
                            label="Enter your subject here"
                            onChange={handleChange}
                            value={values.subject}
                        />
                    </Grid>
                </Grid>
                
               <Button className="mt-5 show_button w-30" variant="contained">Show Assignments</Button>
            </form>
            )}

            </Formik>

            <Accordion className="mt-5">
                    <AccordionSummary>
                        Assignments
                    </AccordionSummary>
                    <AccordionDetails>
                     <h1>arman</h1>
                     <h1>arman</h1>
                     <h1>arman</h1>
                     <h1>arman</h1>
                    </AccordionDetails>
                </Accordion>
        </div>
    )
}
export default ShowAssignment