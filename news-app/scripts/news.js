// Ude Import export (MANDATORY)

let detailNews = JSON.parse(localStorage.getItem('news')) || null;

detailNews.map(function(el){
    console.log(el.content)
    localStorage.removeItem('news')
    let box = document.getElementById('detailed_news');
    
    let Title = document.createElement('h3')
    Title.innerText = el.title;

    let img = document.createElement('img');
    img.src = el.urlToImage;

    let desc = document.createElement('p')
    desc.innerText = el.description;

    let detail = document.createElement('p')
    detail.innerText = el.content;

    let div = document.createElement('div');
    div.setAttribute('class','news')
    div.addEventListener('click',function(){
        storeNews(el);
    })
    
    div.append(Title,img,desc,detail)

    box.append(div);
})

