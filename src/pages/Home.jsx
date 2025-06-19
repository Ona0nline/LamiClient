import React, {useEffect, useState} from "react";
// USe effect for ensuring content is displayed after page loads and use state for state management
import axios from "axios";
import BasicExample from "../css/home";
const Home = () =>{

    // Var to receive said json object
    const [content, setcontent] = useState({})

    useEffect(() => {
        // Sending a get request to the home page and storing the json strings in vars to customize later
        // Remember that .data is the actual payload from my api in the console!
        axios.get("http://localhost:9090/home").then(response => setcontent(response.data)).catch(err => console.error("Error fetching home page data"))

    }, []);


    return(
        <div>
            <BasicExample/>

            <h1 className="text-3xl font-bold underline">{content.title}</h1>
            <h2>{content.subheading}</h2>
            <a href={"/signup"}>Sign up</a>
            <a>Login</a>
            <h1 className="text-3xl font-bold underline">Choose your style</h1>
            <a href={"/lami"}> Lami</a> <br/>
            <a href={"/taxi"}>Taxi</a><br/>
            <a href={"/lux"}> Luxury</a>

            <a href={"https://www.youtube.com/results?search_query=python+multiplication+triangle"}>{content.footer}</a>
        </div>
    )
}

export default Home;