import React from "react";
import Form from "../css/form";
// import axios from "axios";
const SignUp = () =>{

    // useEffect(() => {
    //     // Sending a get request to the home page and storing the json strings in vars to customize later
    //     // Remember that .data is the actual payload from my api in the console!
    //     axios.get("http://localhost:9090/home").then(response => setcontent(response.data)).catch(err => console.error("Error fetching home page data"))
    //
    // }, []);


    return(
        <div>
          <h1 className="text-3xl">Sign up page</h1>
           <Form/>
        </div>
    )
}

export default SignUp;