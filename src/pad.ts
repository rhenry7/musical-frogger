export class Pad {
  x: number;
  y: number;
  note: string;

  constructor(x: number, y: number, note: string) {
    this.x = x;
    this.y = y;
    this.note = note;
  }

  isHit(fx: number, fy: number): boolean {
    const dx = this.x - fx;
    const dy = this.y - fy;
    return Math.sqrt(dx * dx + dy * dy) < 30;
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.note.includes('drum') ? '#065f46' : '#a7f3d0';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
    ctx.fill();
  }
}
