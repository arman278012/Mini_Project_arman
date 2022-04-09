import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Components/gallery";
import Login from "./Components/studentslogin";
import Photo from "./Components/photo";
import TeacherLogin from "./Components/teacherslogin";
import TeacherSignup from "./Components/techerSignup";
import BatchDashboard from "./Components/batchDashboard";
import AddNew from "./Components/AddNewAssignment";
import AboutUs from "./Components/aboutus";
import ListBatches from "./Components/listBatches";
import Accord from "./Components/accordion";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
        <Routes>
          {/* <Route element={} path="/header"></Route> */}
          <Route element={<Gallery></Gallery>} path="/gallery"></Route>
          {/* <Route element={<Login></Login>} path="/login"></Route> */}
          <Route element={<Photo></Photo>} path="/home"></Route>
          <Route
            element={<TeacherLogin></TeacherLogin>}
            path="/teacherlogin"
          ></Route>
          <Route
            element={<TeacherSignup></TeacherSignup>}
            path="/teachersignup"
          ></Route>
          <Route
            element={<BatchDashboard></BatchDashboard>}
            path="/batchdashboard"
          ></Route>
          <Route element={<AddNew></AddNew>} path="/addnew"></Route>
          <Route element={<AboutUs></AboutUs>} path="/about"></Route>
          <Route
            element={<ListBatches></ListBatches>}
            path="/listAssignment"
          ></Route>
          <Route element={<Accord></Accord>} path="/accord"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
