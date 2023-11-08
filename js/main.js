let landing = document.querySelector(".landing");

let imgArray = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg"];


setInterval(() => {
    let randomNumer = Math.floor(Math.random() * imgArray.length);

    landing.style.backgroundImage = 'url("images/' + imgArray[randomNumer] + '")';
    
},10000)