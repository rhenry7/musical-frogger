import { noteToKeyMap } from "./main";


export class Pad {
  x: number;
  y: number;
  note: string;
  fillColor: string;
  rotation: number;
  angularVelocity: number;
  isHitActive: boolean = false;
  hitTimer: number = 0;
  originalColor: string;

  constructor(x: number, y: number, note: string) {
    this.x = x;
    this.y = y;
    this.note = note;

    // Choose one of 4 colors based on the note
    const drumColors = ['#2dd4bf'];
    const melodicColors = [ '#a7f3d6'];
    const colorSet = [drumColors, melodicColors].flat();
    this.fillColor = colorSet[Math.floor(Math.random() * colorSet.length)];
    this.originalColor = this.fillColor;

    // Rotation state
    this.rotation = Math.random() * Math.PI * 2;
    this.angularVelocity = (Math.random() - 0.5) * 0.009; // -0.005 to 0.005 radians/frame
  }

  update() {
    this.rotation += this.angularVelocity;
     // Decrease hitTimer and reset color if time is up
    if (this.isHitActive) {
      this.hitTimer--;
      if (this.hitTimer <= 0) {
        this.isHitActive = false;
        this.fillColor = this.originalColor;
      }
    }
  }

    isHit(fx: number, fy: number): boolean {
    const dx = this.x - fx;
      const dy = this.y - fy;
    const hit = Math.sqrt(dx * dx + dy * dy) < 30;

    if (hit) {
      this.activateHitEffect();
    }

    return hit;
    }
  
  activateHitEffect() {
    this.isHitActive = true;
    this.hitTimer = 10; // frames to stay highlighted (adjust as needed)
    this.fillColor = this.getHitColor(); // temporary visual change
  }

  getHitColor(): string {
    return '#5F9DC6';
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
  ctx.fillStyle = 'green'; // text color
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(this.note, this.x, this.y + radius + 12); // slight padding under the circle
        // Draw key hint
    const keyHint = noteToKeyMap[this.note];
    if (keyHint) {
      ctx.font = '18px sans-serif';
      ctx.fillStyle = "green";
      ctx.fillText(`${keyHint.toLocaleUpperCase()}`, this.x, this.y );
    }
  }
}