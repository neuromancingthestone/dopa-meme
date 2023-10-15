const form = document.querySelector('#meme-form');
const url = document.querySelector('input[name="img-url"]');
const topText = document.querySelector('input[name="top-text"]');
const botText = document.querySelector('input[name="bot-text"]');
const finalSection = document.querySelector('#final-memes');

form.addEventListener('submit', function(evt) {
    evt.preventDefault(); //stop the http request from being set (stop page reload)
//    console.log(url.value);
//    console.log(topText.value);
//    console.log(botText.value);
//    alert('YOU SUBMITTED THE FORM!!!');
    if(url.value === '') {
        alert("ERROR - IMAGE URL FIELD CANNOT BE BLANK!");
    } else if (topText.value === '') {
        alert("ERROR - TOP TEXT FIELD CANNOT BE BLANK!");
    } else if (botText.value === '') {
        alert("ERROR - BOTTOM TEXT FIELD CANNOT BE BLANK!");
    } else { 
        const meme = makeMeme(url.value);
        finalSection.appendChild(meme); 
        url.value = '';
        topText.value = '';
        botText.value = '';
    }
});

finalSection.addEventListener('click',function(e) {
    e.preventDefault();
//    console.log(e.target.tagName);
	if(e.target.tagName === 'IMG'){
		e.target.parentElement.remove();    
    } else if(e.target.tagName === 'DIV'){
        e.target.parentElement.remove();
    }
});

finalSection.addEventListener('mouseenter', function(e){
    e.preventDefault(e);
//    console.log(e.target.tagName);
});

function makeMeme(url) {
    const memeDiv = document.createElement('div');
	const memeImg = document.createElement('img');
    const tText = document.createElement('div');
    const bText = document.createElement('div');
	
    memeImg.src = url;
    memeImg.className = "memeApp";

    tText.className = "topText";
    tText.innerText = topText.value;

    bText.className = "botText";
    bText.innerText = botText.value;

    memeDiv.appendChild(memeImg);    
    memeDiv.appendChild(tText);
    memeDiv.appendChild(bText);    
    memeDiv.className = "imgPos";

    return memeDiv;
}