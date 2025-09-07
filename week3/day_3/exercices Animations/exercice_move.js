function myMove() {
  const elem = document.getElementById("animate");
  const container = document.getElementById("container");
  let pos = 0; 
  const maxPos = container.offsetWidth - elem.offsetWidth;

  const id = setInterval(frame, 1);

  function frame() {
    if (pos >= maxPos) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}
