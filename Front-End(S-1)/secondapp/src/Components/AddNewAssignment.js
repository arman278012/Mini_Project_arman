import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "./config";

const AddNew = () => {
  const url = app_config.api_url;
  const [thumbnail, setThumbnail] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const assignmentForm = {
    teacherName: currentUser.name,
    title: "",
    discription: "",
    batch: "",
    subject: "",
    file: "",
    submissionDate: "",
  };

  const submitAssignment = (values) => {
    values.file = thumbnail;
    console.log(values);

    fetch(url + "/assignment/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
    });
  };

  const uploadThumbnail = (e) => {
    console.log("File selected");
    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);
    fetch(url + "/util/uploadfile", { method: "POST", body: form }).then(
      (res) => console.log(res.status)
    );
  };

  return (
    <div className="assign_new mt-5">
      <div className="upper_head">
        <h3 className="submitass">Upload Assignments Here</h3>
      </div>

      <Paper>
        <Container>
          <Card>
            <CardContent>
              <Formik
                initialValues={assignmentForm}
                onSubmit={submitAssignment}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    {/* sx={{marginTop: '20'}}  */}
                    <Grid container spacing={10}>
                      <Grid item md={6}>
                        <TextField
                          className="w-100"
                          label="Enter the title"
                          variant="outlined"
                          color="secondary"
                          id="title"
                          value={values.title}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <TextField
                          type="text"
                          className="w-100"
                          label="Discription about project"
                          variant="outlined"
                          color="secondary"
                          id="discription"
                          value={values.discription}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    {/* sx={{marginTop: '20'}} */}

                    <Grid className="mt-3" container spacing={10}>
                      <Grid item md={6}>
                        <TextField
                          className="w-100"
                          label="Your batch"
                          variant="outlined"
                          color="secondary"
                          id="batch"
                          value={values.batch}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <TextField
                          className="w-100"
                          type="text"
                          label="subject name"
                          variant="outlined"
                          color="secondary"
                          id="subject"
                          value={values.subject}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item md={6} className="mt-3">
                        <label className="upload_button ">
                          {" "}
                          Upload assigments{" "}
                        </label>
                        <input
                          type="file"
                          onChange={uploadThumbnail}
                          className="form-control"
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      variant="contained"
                      className="mt-5 "
                      color="secondary"
                    >
                      upload assigments
                    </Button>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Container>
      </Paper>
    </div>
  );
};
export default AddNew;
