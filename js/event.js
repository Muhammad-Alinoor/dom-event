function redMe(){
    document.body.style.backgroundColor = 'red';
}
const blueMe = document.getElementById('blue-me');
blueMe.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}