import React, {useEffect, useState} from "react";
import axios from "axios";

const Lami = () =>{

    const [content, setcontent] = useState({})

    useEffect (() => {
        axios.get("http://localhost:9090/lami").then(response => setcontent(response.data)).catch(console.error("Error: Could not connect to Lami Endpoint"))
    })


    return(
        <div>
            <h1>Hey, {content.header} is a title I got from the /lami endpoint</h1>
        </div>
    )
}

export default Lami;