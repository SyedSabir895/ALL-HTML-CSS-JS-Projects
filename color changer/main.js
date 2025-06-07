const colorDisplaySection = document.getElementById("color-display");
const newcolorBtnEle = document.getElementById("new-color-button");
const currentcolorEle = document.getElementById("current-color");

const hexValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getRandomHexValue(){
    const randomIndexPos = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPos];
    return randomHexValue;
}

function getRandomHexString(stringLength){
    let hexString = '';
    for(let i =0; i<stringLength;i++){
        hexString += getRandomHexValue();
    }
    return hexString;
}

newcolorBtnEle.addEventListener("click",function(){
    const randomHexString = '#' + getRandomHexString(6);
    document.body.style.setProperty('background-color',randomHexString);
    currentcolorEle.textContent = randomHexString;
    colorDisplaySection.style.borderColor = randomHexString;
});