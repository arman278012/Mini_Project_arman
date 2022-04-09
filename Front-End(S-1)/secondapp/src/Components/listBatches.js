import { useEffect, useState } from "react";
import app_config from "./config";
import { Grid, Card, CardContent, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TeacherSignup from "./techerSignup";
import { AssignmentSharp } from "@material-ui/icons";

const ListBatches = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const FetchData = () => {
    fetch(url + "/teacher/getall", {
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

  // const teacherData = () => {
  //   fetch(url + "/assignment/getall", {
  //     method: "GET",
  //     // data hmko send ni krna hai isliye get method use karte hai
  //   })
  //     .then((res) => res.json())
  //     // res se json nikalne k liye
  //     .then((data) => {
  //       // dusra then jo hai json data read krne k liye
  //       console.log(data);
  //       setProductArray(data);
  //       setLoading(false);
  //       // data print krwa rhe hai
  //     });
  // };
  // useEffect(() => {
  //   teacherData();
  // }, []);
  //   jaise hi ye page opn hoga fetch data chlega

  const displayAssignments = () => {
    if (!loading) {
      return productArray.map((teacher) => (
        <div>
          <Accordion>
            <AccordionSummary>
              <h5>Teacher Name :</h5>
              <h4>{teacher.name}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6}>
                  {/* <table>
                             <tr>
                               <th>Subject</th>
                               <th>Branch</th>
                               
                             </tr>

                             <tr>
                               <td>{teacher.subject}</td>
                               <td>{teacher.branch}</td>
                             </tr>
                           </table> */}


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

  return <div>{displayAssignments()}</div>;
};

export default ListBatches;


















// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CircularProgress,
//   Grid,
//   Skeleton,
// } from "@mui/material";
// import { useEffect, useState } from "react";
// import app_config from "./config";

// const ListBatches=()=>{

//   const [assignmentArray, setassignmentArray] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const url = app_config.api_url;

//   // Step 1 : Fetch Data from server
//   const fetchData = () => {
//     fetch(url + "/assignment/getall")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProductArray(data);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const displaySkeleton = () => {
//   //   return [1, 2, 3].map((e) => (
//   //     <Grid item md={3}>
//   //       <Skeleton
//   //         animation="wave"
//   //         variant="rectangular"
//   //         height={350}
//   //         width={243}
//   //       />
//   //       <Skeleton animation="wave" variant="text" className="mt-3" width={50} />
//   //       <Skeleton
//   //         animation="wave"
//   //         variant="text"
//   //         className="mt-3"
//   //         width={200}
//   //       />
//   //     </Grid>
//   //   ));
//   // };

//   const displayAssignments = () => {
//     if (!loading) {
//       return assignmentArray.map((assignment) => (
//         <Grid item md={3}>
//           <Card>
//             <CardMedia
//               component="file"
//               height="300"
//               image={url+"/"+assignment.thumbnail}
//               alt={assignment.name}
//             />
//             <CardContent>
//               <p className="p-title">{assignment.name}</p>
//               <p className="text-muted">{assignment.variant}</p>
//               <span className="p-rating">
//                 {assignment.rating} <i class="fas fa-star"></i>
//               </span>
//               &nbsp;&nbsp;
//               <span className="text-muted">({assignment.reviews})</span>
//               <p className="h4 mt-4">₹ {assignment.price}</p>
//             </CardContent>
//           </Card>
//         </Grid>
//       ));
//     } else {
//       // return <CircularProgress />;
//       return (
//         <Grid container spacing = {6}>
//           {displaySkeleton()}
//         </Grid>
//       );
//     }
//   };

//   return(
//   <h1>List batches Components</h1>
//   )
// }


// export default ListBatches