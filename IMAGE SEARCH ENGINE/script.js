const searchform=document.querySelector("#search-form")
	const searchbox=document.querySelector("#search-box")
	const searchresult=document.querySelector("#search-result")
	const showmorebtn=document.querySelector("#show-more-btn")
      const apikey="vYGqwhfr6dQXJS3zzQsxJUh3LKXPgo1x9x_rE6MKsLI"
let keyword="";
var page=1;

     let searchimages=async()=>{

       keyword=searchbox.value;
       let api=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apikey}&per_page=12`;
       let response=await fetch(api)
       let data=await response.json();
       
       if(page==1){
       	 searchresult.innerHTML=""
       }

       var results=data.results;

       results.map(result=>{
    
      const image=document.createElement("img");
      image.src=result.urls.small;

     
     searchresult.appendChild(image)


       })
       showmorebtn.style.display="block"

     }

     searchform.addEventListener("submit",e=>{
     	e.preventDefault();
     	page=1;
     	searchimages()
     })

     showmorebtn.addEventListener("click",()=>{
     	page++;
     	searchimages();
     })
