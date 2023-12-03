import React from 'react'
import "./BlogsMain.css";

const BlogsMain = () => {
  return (
    <div>BlogsMain
      <div className="blogs">
            <h3 id="heading">Discover our nutrition posts and blog tips</h3>
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
                {/* <div className="blogcard2">
                    <div className="blogcard2_1">
                        <div className="blogcard1_1">

                            <a href="#">Blogcard2.1</a>
                            <p>
                                Proper nutrition provides our body with the complex
                                of vitamins it needs and makes us feel better.
                                In this article, we'll show you what to look for.
                            </p>
                        </div>
                    </div>
                    <div className="blogcard2_2">
                        <div className="blogcard1_1">

                            <a href="#">Blogcard2.2</a>
                            <p>
                                Proper nutrition provides our body with the complex
                                of vitamins it needs and makes us feel better.
                                In this article, we'll show you what to look for.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <button className="btn">Check blogs</button>
        </div>
        <div className="blogcard2">
                    <div className="blogcard2_1">
                        <div className="blogcard1_1">

                            <a href="#">Blogcard2.1</a>
                            <p>
                                Proper nutrition provides our body with the complex
                                of vitamins it needs and makes us feel better.
                                In this article, we'll show you what to look for.
                            </p>
                        </div>
                    </div>
                    <div className="blogcard2_2">
                        <div className="blogcard1_1">

                            <a href="#">Blogcard2.2</a>
                            <p>
                                Proper nutrition provides our body with the complex
                                of vitamins it needs and makes us feel better.
                                In this article, we'll show you what to look for.
                            </p>
                        </div>
                    </div>
                </div> */}
    </div>
  )
}

export default BlogsMain