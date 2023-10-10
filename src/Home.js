import { useState } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'chehab', id: 1},
        { title: 'Welcome',        body: 'lorem ipsum...', author: 'hanaa',  id: 2},
        { title: 'Learning React', body: 'lorem ipsum...', author: 'omar',   id: 3}
    ]);

    return ( 
        <div className="home">
            {
                blogs.map((blog) => 
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            }
        </div>
     );
}
 
export default Home;