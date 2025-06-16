import React, {useEffect, useState} from "react";
// USe effect for ensuring content is displayed after page loads and use state for state management
import axios from "axios";
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
            <h1>{content.title}</h1>
            <h2>{content.subheading}</h2>
            <h1>Choose your style</h1>
            <a href={"/lami"}> Lami</a> <br/>
            <a href={"/taxi"}>Taxi</a><br/>
            <a href={"/lux"}> Luxury</a>

            <a href={"https://www.youtube.com/results?search_query=python+multiplication+triangle"}>{content.footer}</a>
        </div>
    )
}

export default Home;