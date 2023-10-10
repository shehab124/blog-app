import { useState } from "react";

const Home = () => {

    const handleClick = (e) =>
    {
        // e represents the event
        console.log(e);
        console.log("first button clicked");
    }
    
    const handleClickAgain = (name, e) =>
    {
        console.log(e);
        console.log("second button clicked ");
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('chehab', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;