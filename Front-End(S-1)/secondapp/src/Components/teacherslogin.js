import {
    Button,
    Card,
    CardContent,
    Checkbox,
    Grid,
    Paper,
    TextField,
  } from "@mui/material";
  import { type } from "@testing-library/user-event/dist/type";
  import { Formik } from "formik";
  import { useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
  import app_config from "./config";
  import { userContext } from "./userContext";
  
  const TeacherLogin = () => {
    const url = app_config.api_url;
  
    const navigate = useNavigate();
  
    // const { setCurrentUser, setloggedin } = useContext(userContext)
  
    const loginForm = {
      username: "",
      password: "",
    };
    const loginSubmit = (values) => {
      console.log(values);
  
      fetch(url + "/teacher/checklogin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "loggedIn successfully",
          }).then(() => {
            res.json().then((data) => {
              sessionStorage.setItem("user", JSON.stringify(data));
              navigate("/listbatch");
            });
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Login Failed",
          });
        }
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
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <p className="h3 text-center mb-5 mt-3">
                          Teacher Login-Here
                        </p>
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
                          type="password"
                          label="teacher's password"
                          variant="outlined"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                        />{" "}
                        <br />
                        <span>
                          <Checkbox defaultChecked size="small" />
                          Remember me
                        </span>
                        <a className="forgot_passowrd">forgot password?</a>
                        <Button
                          type="submit"
                          color="error"
                          variant="contained"
                          className="mt-3 login_btn"
                        >
                          Login to Continue
                        </Button>
                      </form>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
  export default TeacherLogin;



