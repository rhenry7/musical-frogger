import { playNote } from './audio';
import { Pad } from './pad';

export class Frog {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(key: string, pads: Pad[]) {
    const step = 80;
    if (key === 'ArrowLeft') this.x -= step;
    if (key === 'ArrowRight') this.x += step;
    if (key === 'ArrowUp') this.y -= step;
    if (key === 'ArrowDown') this.y += step;
    if (key === 'Spacebar') this.x = step;
  for (const pad of pads) {
    if (pad.isHit(this.x, this.y)) {
      console.log("pad is hit")
      playNote(pad.note); 
    }
  }
  }

  reset(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  click(x: number, y: number, pads: Pad[]) {
    for (const pad of pads) {
      if (pad.isHit(x, y)) {
        this.x = x;
        this.y = y;
        playNote(pad.note);
      }
    }
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
    ctx.fill();
  }
}
