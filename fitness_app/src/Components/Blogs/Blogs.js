import React from "react";
import "./Blogs.css";

function Blogs() {
    return (
        <div className="blogs">
            <h4 id="heading">Discover our nutrition posts and blog tips</h4>
            <div className="blogcards">
                <div className="blogcard1">
                    {/* <img src="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=740&t=st=1698937600~exp=1698938200~hmac=8ca16920de52497b4f09f24ecfe81a6bdebaf5ec642f16e28d760dc32da35f8e"/> */}
                    <div className="blogcard1_1">

                    <a href="#">Blogcard1</a>
                    <p>
                        Proper nutrition provides our body with the complex
                        of vitamins it needs and makes us feel better.
                        In this article, we'll show you what to look for.
                    </p>
                    </div>
                </div>
                <div className="blogcard2">
                    <div className="blogcard2_1">
                        bolgcard 2.1
                    </div>
                    <div className="blogcard2_2">
                        blogcard 2.2
                    </div>
                </div>
            </div>
            <button id="blogbtn">Check blogs</button>
        </div>
    )
}

export default Blogs;