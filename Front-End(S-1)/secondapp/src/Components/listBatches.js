import { useEffect, useState } from "react";
import app_config from "./config";
import { Grid, Card, CardContent, Paper, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ListBatches = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

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

  const displayAssignments = () => {
    if (!loading) {
      return productArray.map((teacher) => (
        <div>
          <Accordion>
            <AccordionSummary>
              <h5>Teacher Name :</h5>
              <h4>{teacher.teacherName}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6}>
                  <ul class="list-group">
                    <li class="list-group-item">Subject::{teacher.subject}</li>
                    <li class="list-group-item">branch::{teacher.branch}</li>
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
    <div>
      <Container>{displayAssignments()}</Container>
    </div>
  );
};

export default ListBatches;
