/** @type {HTMLCanvasElement} */
import { canvas, ctx } from "./app.js";

const animate = timeStamp => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(10, 10, 50, 50);
  requestAnimationFrame(animate);

}

animate(0);