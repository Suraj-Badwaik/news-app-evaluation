// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

async function defSearch(){
    // document.getElementById('results').innerHTML = null;

     let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

     fetch(url).then(function(res){
         return res.json();
     })
     .then(function(res){
         console.log(res)
         appenddef(res.articles)
     })
     .catch(function(err){
         console.log(err);
     })  
}

defSearch()

function appenddef(data){
    let showNews = document.getElementById('results');

    data.map(function(el){
        let Title = document.createElement('h3')
        Title.innerText = el.title;

        let div = document.createElement('div');
        div.append(Title)

        showNews.append(div);
    })
}








let categories = document.getElementById("sidebar").children
console.log('categories:', categories)


async function cSearch(){
    let show =document.getElementById('results')
    show.innerHTML = null
    show.style.display ="grid";
    show.style.gridTemplateColumns ="repeat(3,1fr)";
    show.style.gridTemplateRows ="auto";
    show.style.gap ="20px"
    show.style.width ="80%"

    console.log(this.id)
     let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`

     fetch(url).then(function(res){
         return res.json();
     })
     .then(function(res){
         console.log(res)
         append(res.articles)
     })
     .catch(function(err){
         console.log(err);
     })
    
}





for(let el of categories){
    el.addEventListener('click',cSearch)
}


function append(data){
    console.log('data:', data)
    let showNews = document.getElementById('results');

    data.map(function(el){
        let Title = document.createElement('h3')
        Title.innerText = el.title;

        let img = document.createElement('img');
        img.src = el.urlToImage;

        let desc = document.createElement('p')
        desc.innerText = el.description;

        let div = document.createElement('div');
        div.setAttribute('class','news')
        div.addEventListener('click',function(){
            storeNews(el);
        })
        div.style.height ="500px"
        div.style.border ="5px solid yellow"
        div.style.margin ="0px"
        div.style.padding ="0px"
        div.append(Title,img,desc)

        showNews.append(div);
    })
}

let arr= JSON.parse(localStorage.getItem('news')) || [];

function storeNews(el){
console.log('el:', el); 
localStorage.clear('news');
arr.push(el)
localStorage.setItem('news',JSON.stringify(arr));
window.location.href ="./news.html";
}