function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0; 
    let containerWidth = document.getElementById("container").offsetWidth;
    let boxWidth = elem.offsetWidth;

    let id = setInterval(frame, 1);

    function frame() {
        if (pos >= containerWidth - boxWidth) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
