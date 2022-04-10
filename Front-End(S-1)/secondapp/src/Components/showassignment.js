import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"
import { Form } from "formik"

const ShowAssignment = () => {
    return (
        <div>
            <form>
                <Grid container spacing={10}>

                    <Grid item md={6}>
                        <TextField
                            className="w-100 mt-5"
                            label="Enter your batch here"
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            className="w-100 mt-5"
                            label="Enter your batch here"
                        />
                    </Grid>
                </Grid>
                
               <Button className="mt-5 show_button w-30" variant="contained">Show Assignments</Button>

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
            </form>
        </div>
    )
}
export default ShowAssignment