let img    = document.querySelector("img");
let width  = img.width;
let height = img.height;
let growth = 1.0001;

window.requestAnimationFrame(grow);

function grow() {
    width *= growth;
    height *= growth;
    img.width = Math.round(width);
    img.height = Math.round(height);
    window.requestAnimationFrame(grow);
}