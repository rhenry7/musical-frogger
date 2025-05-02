import { Frog } from './frog';
import { Pad } from './pad';
import { handlePadJump } from './sequence';

const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
document.getElementById('game-container')?.appendChild(canvas);
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const frog = new Frog(canvas.width / 2, canvas.height - 50);
export const pads: Pad[] = [];
const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];


const noteOptions = [
  "drum",
  "drum2",
  "drum3",
  "drum4",
  "drum5",
  "drum6",
  "drum",
  "drum11",
  "drum13",
  "pad1",
  "pad2",
  "pad5",
  "pad7",
  "pad9",
  "pad11",
  "synth1",
  "synth2",
  "synth3",
  "synth6",
  "synth12",
  "syth5"
];

function shuffleArray(noteOptions: string[]) {
    for (var i = noteOptions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = noteOptions[i];
        noteOptions[i] = noteOptions[j];
        noteOptions[j] = temp;
    }
}


for (let y = 100; y < 400; y += 80) {
 for (let x = 80; x <= 560; x += 80) {
    const note = noteOptions[Math.floor(Math.random() * noteOptions.length)];
    pads.push(new Pad(x, y, note));
  }
}

function draw() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  pads.forEach(pad => pad.display(ctx));
  frog.display(ctx);

  requestAnimationFrame(draw);
}

window.addEventListener('keydown', (e) => {
  frog.move(e.key, pads);
});

// canvas.addEventListener('click', (e) => {
//   const clickedNote = getNoteAtPosition(e.x, e.y);
//   if (clickedNote) handlePadJump(clickedNote);
// });

draw();
