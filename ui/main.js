console.log('Loaded!');
// lets move element

var img = document.getElementById('main-image');
var marginLeft= 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    }

img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    
};