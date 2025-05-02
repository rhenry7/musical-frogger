export class Pad {
  x: number;
  y: number;
  angle: number;
  note: string;

  constructor(x: number, y: number, note: string) {
    this.x = x;
    this.y = y;
    this.angle = Math.random() * Math.PI * 2;;
    this.note = note;
  }

  isHit(fx: number, fy: number): boolean {
    const dx = this.x - fx;
    const dy = this.y - fy;
    return Math.sqrt(dx * dx + dy * dy) < 30;
  }

display(ctx: CanvasRenderingContext2D) {
  const radius = 25;
  const wedgeAngle = Math.PI / 6; // size of the wedge (30 degrees)
  const startAngle = this.angle + wedgeAngle / 2;
  const endAngle = this.angle + Math.PI * 2 - wedgeAngle / 2;

  ctx.fillStyle = this.note.includes('drum') ? '#065f46' : '#a7f3d0';
  ctx.beginPath();

  // Draw wedge arc
  ctx.moveTo(this.x, this.y);
  ctx.arc(this.x, this.y, radius, startAngle, endAngle, false);
  ctx.closePath();
  ctx.fill();
}


}
