import React , {useState,useEffect} from 'react'
import axios from 'axios'
export default function App() {

let [news , setNews] = useState([]);

useEffect ( ()=>{

const loadNews = async ()=> {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=b7d7a735434643e790b8a5f5c8749347");
 setNews(response.data.articles);
}
loadNews();
} , [] );
  return (  

  <section className="container py-5">

   <h1 className=" text-center mb-4 text-danger">أخبار مصر اليومية  </h1> 
   <div className="row">  

    {news && news.map(
(item , index)=>{
return(
  

   <div className="col-10 offset-1" kry={index}>
<div className="card p-4 mb-3 text-dark bg-light text-end">
           <img src={item.urlToImage} className="card-img mb-2" alt="" />
           <h4>العنوان: {item.title}</h4>
           <p>التفاصيل : {item.description}</p>
           <span>المصدر : {item.publishedAt} </span>
           <span>URL : {item.url} </span>
       </div>
 </div>
)
}
)}
  </div>
  </section>
  )
}
