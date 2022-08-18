import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import Article from "./ArticleList.js";
console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header title = {blogData.name}/>
     <About source = {blogData.image} about = {blogData.about}/>
     < Article posts = {blogData.posts}/>
    </div>
  );
}

export default App;
