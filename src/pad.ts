

export class Pad {
  x: number;
  y: number;
  note: string;
  fillColor: string;
  rotation: number;
  angularVelocity: number;

  constructor(x: number, y: number, note: string) {
    this.x = x;
    this.y = y;
    this.note = note;

    // Choose one of 4 colors based on the note
    const drumColors = ['#064e3b', '#007857'];
    const melodicColors = [ '#a7f3d6', '#2dd4bf'];
    const colorSet = note.includes('drum') ? drumColors : melodicColors;
    this.fillColor = colorSet[Math.floor(Math.random() * colorSet.length)];

    // Rotation state
    this.rotation = Math.random() * Math.PI * 2;
    this.angularVelocity = (Math.random() - 0.5) * 0.007; // -0.005 to 0.005 radians/frame
  }

  update() {
    this.rotation += this.angularVelocity;
  }

    isHit(fx: number, fy: number): boolean {
    const dx = this.x - fx;
    const dy = this.y - fy;
    return Math.sqrt(dx * dx + dy * dy) < 30;
  }

  display(ctx: CanvasRenderingContext2D) {
    this.update(); // update rotation

    ctx.fillStyle = this.fillColor;
    ctx.beginPath();

    const radius = 25;
    const wedgeAngle = Math.PI / 6; // 30 degrees missing slice
    const startAngle = this.rotation + wedgeAngle / 2;
    const endAngle = this.rotation + Math.PI * 2 - wedgeAngle / 2;

    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();

      // Draw note label text underneath the pad
  ctx.fillStyle = '#000'; // text color
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(this.note, this.x, this.y + radius + 4); // slight padding under the circle

  }
}