 import React,{useState} from 'react';
 //import Card from './news/Card';
 import './news/style2.css';
 import Navbar from './news/Navbar';
 const Apps = () => {
     let [value,setValue]=useState(""); 
     //const [newsInfo,setNewsInfo]=useState({});
     async function news(){
         //https://newsapi.org/v2/top-headlines?country=us&
         let res=await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=20&sortBy=trending&apiKey=00451f2d4a81423db8eab6400f984f89");
         let ans=await res.json();
         console.log(ans);
        let p= ans.articles.map((a)=>{
            //  var {description,url,urlToImage,title}=a;
            //   var myNew= {description,url,urlToImage,title};
            //   setNewsInfo(myNew);
             return(
             //<Card newsInfo={newsInfo}/>)
             <div class="max-w-sm rounded overflow-hidden shadow-lg carder ">
              <img class="w-full" src={a.urlToImage} alt="Mountain"/> 
             <div class="px-6 py-4">
               <div class="font-bold text-xl mb-2">{a.title}</div>
               <p class="text-gray-700 text-base">
                {a.description}
               </p>
               <a href={a.url} class="font-bold text-xl">Read More</a>
             </div>          
           </div>)
         });
         setValue(p);
     }
     news();
   return (
   <>
      <Navbar/>
       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 gdrid">{value}</div>
   </>
    
   )
 }
 export default Apps



