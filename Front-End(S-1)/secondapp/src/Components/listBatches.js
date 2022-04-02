import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "./config";

const ListBatches=()=>{

  const [assignmentArray, setassignmentArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/assignment/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductArray(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const displaySkeleton = () => {
  //   return [1, 2, 3].map((e) => (
  //     <Grid item md={3}>
  //       <Skeleton
  //         animation="wave"
  //         variant="rectangular"
  //         height={350}
  //         width={243}
  //       />
  //       <Skeleton animation="wave" variant="text" className="mt-3" width={50} />
  //       <Skeleton
  //         animation="wave"
  //         variant="text"
  //         className="mt-3"
  //         width={200}
  //       />
  //     </Grid>
  //   ));
  // };

  const displayAssignments = () => {
    if (!loading) {
      return assignmentArray.map((assignment) => (
        <Grid item md={3}>
          <Card>
            <CardMedia
              component="file"
              height="300"
              image={url+"/"+assignment.thumbnail}
              alt={assignment.name}
            />
            {/* <CardContent>
              <p className="p-title">{assignment.name}</p>
              <p className="text-muted">{assignment.variant}</p>
              <span className="p-rating">
                {assignment.rating} <i class="fas fa-star"></i>
              </span>
              &nbsp;&nbsp;
              <span className="text-muted">({assignment.reviews})</span>
              <p className="h4 mt-4">₹ {assignment.price}</p>
            </CardContent> */}
          </Card>
        </Grid>
      ));
    } else {
      // return <CircularProgress />;
      return (
        <Grid container spacing = {6}>
          {displaySkeleton()}
        </Grid>
      );
    }
  };

  return(
  <h1>List batches Components</h1>
  )
}


export default ListBatches