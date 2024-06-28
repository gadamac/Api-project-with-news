import { useState, useEffect } from "react";


function News() {
    const[news,setNews]=useState ('');
useEffect (()=>{
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-13&sortBy=publishedAt&apiKey=ac7731be800f42fcbd5b3df19d68a0d8").then(response => response.json())
    .then(data => setNews(data.articles))
},[]);
return(
<div className="News">
  {Array.isArray(news) && news.map((newsitem) => {
    return (
      <div key={newsitem.title} className="main-cord">
     <img src={newsitem.urlToImage} alt="image unknwon" className="img" />
        <h2>{newsitem.title}</h2>
        <p>Source: {newsitem.source.name}</p>
        <p>author: {newsitem.author}</p>
        <p>description: {newsitem.description}</p>
      </div>
    );
  })}
</div>
);
}
export default News;

