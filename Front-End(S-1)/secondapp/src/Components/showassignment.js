import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import app_config from "./config";

const ShowAssignment = () => {
  const url = app_config.api_url;

  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [batch_v, setBatch] = useState("");
  const [subject_v, setSubject] = useState("");

  const SubjectForm = {
    batch: "",
    subject: "",
  };

  const FetchData = () => {
    fetch(url + "/assignment/getall", {
      method: "GET",
      // data hmko send ni krna hai isliye get method use karte hai
    })
      .then((res) => res.json())
      // res se json nikalne k liye
      .then((data) => {
        // dusra then jo hai json data read krne k liye
        console.log(data);
        setProductArray(data);
        setLoading(false);
        // data print krwa rhe hai
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const filterAssignment = () => {
    fetch(url + "/assignment/getall", {
      method: "GET",
      // data hmko send ni krna hai isliye get method use karte hai
    })
      .then((res) => res.json())
      // res se json nikalne k liye
      .then((data) => {
        // dusra then jo hai json data read krne k liye
        console.log(data);

        if (subject_v && !batch_v) {
          setProductArray(
            data.filter(({ subject }) => {
              return subject == subject_v;
            })
          );
        } else if (batch_v && !subject_v) {
          setProductArray(
            data.filter(({ batch }) => {
              return batch == batch_v;
            })
          );
        } else {
          setProductArray(
            data.filter(({ subject, batch }) => {
              return batch == batch_v && subject == subject_v;
            })
          );
        }

        setLoading(false);
        // data print krwa rhe hai
      });
  };

  const displayAssignments = () => {
    if (!loading) {
      return productArray.map((assigment) => (
        <div>
          <Accordion className="mt-5">
            <AccordionSummary>
              <h4>Teacher Name :</h4>
              <h4>{assigment.teacherName}</h4>
              {/* <h4>{teacher.title}</h4> */}
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6}>
                  <ul class="list-group">
                    <li class="list-group-item">Subject::{assigment.title}</li>
                    <li class="list-group-item">branch::{assigment.subject}</li>
                    <li class="list-group-item">branch::{assigment.batch}</li>
                  </ul>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      ));
    }
  };

  return (
    <div className="container mt-5">
      <Card>
        <CardContent>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <TextField
                className="w-100 mt-5"
                label="Enter your batch here"
                onChange={(e) => setBatch(e.target.value)}
                value={batch_v}
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                className="w-100 mt-5"
                label="Enter your subject here"
                onChange={(e) => setSubject(e.target.value)}
                value={subject_v}
              />
            </Grid>
          </Grid>

          <Button
            className="mt-5 show_button w-30"
            variant="contained"
            onClick={filterAssignment}
          >
            Show Assignments
          </Button>
        </CardContent>
      </Card>

      {displayAssignments()}
    </div>
  );
};
export default ShowAssignment;
