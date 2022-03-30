import { Button, Card, CardContent, Checkbox, Grid, Paper, TextField } from "@mui/material"

const TeacherLogin = () => {
    return (
        <div className="mt-3 student_login">
            <Paper className="background">
                <Grid container justifyContent="center">
                    <Grid item md={3}>
                        <Card>
                            <CardContent className="stu">

                                <form>
                                    <p className="h3 text-center mb-5 mt-3">Teacher Login-Here</p>
                                    <TextField
                                        className="teacher_username w-100 mt-3"
                                        label="teacher's username"
                                        variant="outlined"
                                    />
                                    <TextField 
                                       className="mt-3 w-100 teacher_pass"
                                        label="teacher's password"
                                        variant="outlined"
                                    /> <br />
                                    <span><Checkbox defaultChecked size="small" />Remember me</span>
                                    <a className="forgot_passowrd">forgot password?</a>

                                    <Button
                                        type="submit"
                                        color="error"
                                        variant="contained"
                                        className="mt-3 login_btn">
                                        Login to Continue
                                    </Button>
                                </form>




                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Paper>





            {/* <h1>This is my login page</h1>
            <form className="mt-5">
                <label>Enter your full Name </label>
            <TextField id="filled-basic" label="Full Name" variant="filled" />
             */}


        </div>

    )
}
export default TeacherLogin