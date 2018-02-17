var canvas

funntion setup() {
  canvas = createcanvas(500, 400)
  canvas.parent("canvas-area");
}
function draw() {

  drawellipse();

}
function drawellipse() {
  fill("#ff000");
  nozstroke();
  ellipse(mouseX, mouseY, 100, 100);
}
