import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('CHEHAB');

    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('chehab');
        setAge(30);
    }
    
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;