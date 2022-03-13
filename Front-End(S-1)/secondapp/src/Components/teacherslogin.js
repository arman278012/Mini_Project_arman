import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"

const TeacherLogin=()=>{
    return(
        <div className="mt-3 student_login">
            <Paper className="login-container background">
                <Grid container justifyContent="center">
                    <Grid item md={3} sm={4}>
                        <Card >
                            <CardContent className="stu">
                                <p className="h3 text-center mb-5 mt-3">Teacher Login-Here</p>
                                <TextField
                                label="teacher's username"
                                variant="filled"
                                />
                                <TextField className="mt-3 student_user"
                                 label="teacher's password"
                                 variant="filled"
                                />
                                <Button
                                type="submit"
                                color="error"
                                variant="contained"
                                className="mt-3">
                                Signin to Continue
                                </Button>

                               
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