// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page




let xyz = JSON.parse(localStorage.getItem('savedNews')) || null;
console.log('xyz:', xyz)



xyz.map(function(el){
    console.log('el:', el)
    
    let box = document.getElementById('results');
    box.style.display ="grid";
    box.style.gridTemplateColumns ="repeat(3,1fr)";
    box.style.gridTemplateRows ="auto";
    box.style.gap ="20px"
    box.style.width ="80%"
    box.style.margin ="auto"
   box.style.marginTop ="2%"


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
        // div.style.height ="500px"
        div.style.height ="500px"
        div.style.border ="5px solid yellow"
        div.style.margin ="0px"
        div.style.padding ="0px"
        div.append(Title,img,desc)
    
        box.append(div);
    })




let arr= JSON.parse(localStorage.getItem('news')) || [];

function storeNews(el){
console.log('el:', el); 
localStorage.clear('news');
arr.push(el)
localStorage.setItem('news',JSON.stringify(arr));
window.location.href ="./news.html";
}
