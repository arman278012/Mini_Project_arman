import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"

const TeacherSignup=()=>{
    return(
        <div className="mt-3 teacher_signup">
            <Paper className="login-container2">
                <Grid container justifyContent="center">
                    <Grid md={3} sm={4}>
                        <Card>
                            <CardContent className="sign">
        <div className="container signup">
            <div className="row">
                <div className="col">
                <form>
                <h2 className="text">Sign-up Here</h2>
                <TextField className="w-100 mt-3 name"
                // helperText="Enter your name"
                 placeholder="Name"
                 label="name"
                 variant="outlined"
                 />


              <TextField
              className="w-100 mt-3"
              placeholder="Username"
              label="Username"
              type="string"
              variant="outlined"
              
            //   helperText="Enter your username"
              />

             <TextField
              className="w-100 mt-3"
              placeholder="Subject"
              label="Subject's name"
              type="string"
              variant="outlined"
              
            //   helperText="Enter your age"
              />

             <TextField
              className="w-100 mt-3"
              placeholder="Branch"
              label="Branch"
              type=""
              variant="outlined"
            //   helperText="Enter strong password"
              />

              <TextField
              className="w-100 mt-3"
              placeholder="password"
              label="Password"
              type="password"
              variant="outlined"/>

             <Button color="error" 
             variant="contained" 
             className="w-50 mt-3"
             type="submit">
              submit
            </Button>
                    </form>

                </div>
                </div>
                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        
        </div>
    )}

export default TeacherSignup