import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'chehab', id: 1},
        { title: 'Welcome',        body: 'lorem ipsum...', author: 'hanaa',  id: 2},
        { title: 'Learning React', body: 'lorem ipsum...', author: 'omar',   id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}
 
export default Home;