const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const myLabel = document.getElementById('myLabel');


let count = 0;

increaseBtn.onclick = function () {
    count++;
    myLabel.innerText = count;
}

decreaseBtn.onclick = function () {
    count--;
    myLabel.innerText = count;
}

resetBtn.onclick = function () {
    count=0;
    myLabel.innerText = count;
}