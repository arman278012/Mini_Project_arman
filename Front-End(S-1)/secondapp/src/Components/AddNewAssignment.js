import { Button, Card, CardContent, Container, Grid, Paper, TextField } from "@mui/material"

const AddNew = () => {
    return (
        <div className="assign_new mt-5">
            <div className="upper_head">
                <h3 className="submitass">Upload Assignments Here</h3>
            </div>

            <Paper>
                <Container>
                    <Card >
                        <CardContent >
                            <form>
                            {/* sx={{marginTop: '20'}}  */}
                                <Grid  container spacing={10}>
                                    <Grid item md={6}>
                                        <TextField
                                            className="w-100"
                                            label="Enter assignment name"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            type="date"
                                            className="w-100"
                                            label="Enter submission date"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </Grid>
                                </Grid>

                                {/* sx={{marginTop: '20'}} */}

                                <Grid  className="mt-3" container spacing={10}>
                                    <Grid item md={6}>
                                        <TextField
                                            className="w-100"
                                            label="description"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            className="w-100"
                                            type="date"
                                            label="Last date to submit assignment"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </Grid>
                                </Grid>


                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="mt-5"
                                    color="secondary">
                                    upload assigments
                                </Button>
                            </form>

                        </CardContent>
                    </Card>
                </Container>
            </Paper>


        </div>
    )



}
export default AddNew