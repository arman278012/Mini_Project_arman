import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"

const BatchDashboard=()=>{
    return(
        <div>
            <h1>Batch BatchDashboard</h1>
           
                <Paper>
                    <Grid>
                        <Grid>
                            <Card>
                                <CardContent>
                                <form>

                <TextField
                className="mt-5 w-100"
                label="Title"
                variant="outlined"
                color="secondary"   
               />


                <TextField
                className="mt-3 w-100"
                label="Category"
                variant="outlined"
                color="secondary"   
              />

              <TextField
                className="mt-3 w-100"
                label="Price"
                type="number"
                variant="outlined"
                color="secondary"   
                />
               <label>Upload thumbnail</label>
              

                <Button
                type="submit"
                variant="contained"
                className="mt-5"
                color="secondary">
                upload assigments
              </Button>
              </form>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
             
              
        </div>
        
    )
}
export default BatchDashboard