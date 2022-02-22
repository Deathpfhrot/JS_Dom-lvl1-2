// JS Vertiefung Übung lev1_2: getElementsByClassName


var example = document.getElementsByClassName('example')
console.log(example);

function myFunction() {
    for (let i = 0; i < example.length; i++) {
        const element = example[i];
        element.classList.toggle('exampleBlack');
    }
}

// JS Vertiefung Übung lev2_3: getElemetnsByTagName

const collection = document.getElementsByTagName('li');


function changeMe() {
    document.getElementsByTagName('li')[0].style.backgroundColor = '#f6c89f';
    // document.getElementsByTagName('li')[0, 1, 2, 3].style.color = '#333';
    document.getElementsByTagName('li')[1].style.backgroundColor = '#ffe7d1';
    document.getElementsByTagName('li')[2].style.backgroundColor = '#4b8e8d';
    document.getElementsByTagName('li')[3].style.backgroundColor = '#396362';
    document.getElementById('button').style.backgroundColor = '#666';
}

// nimmt backgroundColor von Button nicht an?

// JS Vertiefung Übung lev2_4: Dom Background Colors

//eine function schreiben die die auswahl bestätigt durch einnen button click und den body hintergrundfarbe ändert

// let button1 = document.getElementById('button1')
// console.log(button1);

var pElem = document.getElementById('p')

let farbeAuswahlen = document.getElementById('farbeAuswahlen')

button1.addEventListener('click', () => {
    event.preventDefault();
    let lowerAuswahl = farbeAuswahlen.value.toLowerCase();
    console.log(lowerAuswahl);
    let removeLowAuswahl = lowerAuswahl.replace(/\s+/g, '');
    console.log(removeLowAuswahl);

    document.body.style.backgroundColor = removeLowAuswahl;
})