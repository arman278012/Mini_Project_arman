import { Button, Card, CardContent, Checkbox, Grid, Paper, TextField } from "@mui/material"
import { Formik } from "formik";

const TeacherLogin = () => {

    const url = app_config.api_url;

    const {setCurrentUser, setloggedin} = useContext(userContext)

  const loginForm = {
    username: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);


    
    fetch(url + "/teachers/checklogin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.status);
  
        if (res.status === 200) {
          setloggedin(true)
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Loggedin Successfully",
          });
  
  
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Loggedin Failed",
          });
        }
      })
      .then((data) => {
        setCurrentUser(data);
        sessionStorage.setItem('user',JSON.stringify(data))
      });
  };

    return (
        <div className="mt-3 student_login">
            <Paper className="background">
                <Grid container justifyContent="center">
                    <Grid item md={3}>
                        <Card>
                            <CardContent className="stu">

                               <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                                   {({values,handleChange,handleSubmit})=>
                                    <form onSubmit={handleSubmit}>
                                    <p className="h3 text-center mb-5 mt-3">Teacher Login-Here</p>
                                    <TextField
                                        className="teacher_username w-100 mt-3"
                                        label="teacher's username"
                                        variant="outlined"
                                        id="username"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    <TextField 
                                       className="mt-3 w-100 teacher_pass"
                                        label="teacher's password"
                                        variant="outlined"
                                        id="password"
                                        onChange={handleChange}
                                        value={values.password}
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

                                   }

                               </Formik>



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