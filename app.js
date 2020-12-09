var translateBtn = document.querySelector('.translate-btn');

var inputTxt = document.querySelector('.txt-input');
var outputDiv = document.querySelector('#output');

var corsUrl = 'https://cors-anywhere.herokuapp.com/';

var serverurl = "https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/minion.json";


// 


function getTranslationUrl(input)  {
    return serverurl + '?' + 'text=' + input
}


function translateTxt(){
    var inputText = inputTxt.value;
    fetch(getTranslationUrl(inputText))
        .then(response=>response.json())
        .then(json=>{
            var bananaText = json.contents.translated;
            outputHtml = `<h3><mark>${bananaText}</mark></h3>`
            outputDiv.innerHTML = outputHtml;
        })
        .catch(err=>console.log(err));
}


translateBtn.addEventListener('click',translateTxt);