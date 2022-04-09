// import { createContext, useState } from "react";

// export const userContext=createContext()

// export const UserProvider=({children})=>{

//     const getTeacher=()=>{
//         let sessionUSer=sessionStorage.getItem('user')
//         if(typeof sessionUSer=="object"){
//             return JSON.parse(sessionUSer)
//         }}
    
//     const [loggedin, setloggedin] = useState(
//         typeof sessionStorage.getItem("teacher")=="object"? false:true
//     )
//     const [currentUser, setCurrentUser] = useState(getTeacher())

//     return  (
//         <userContext.Provider value={{currentUser, setCurrentUser,loggedin, setloggedin}}>
//             {children}
//         </userContext.Provider>
//     )
// }