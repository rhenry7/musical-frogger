import { Frog } from './frog';
import { Pad } from './pad';
import { clearSequence, generateSequence, handlePadJump, playSequence } from './sequence';

const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
document.getElementById('game-container')?.appendChild(canvas);
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const frog = new Frog(canvas.width / 2, canvas.height - 50);

export const pads: Pad[] = [];
const noteOptions = [
  'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',       // Natural notes, octave 2
  'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',       // Natural notes, octave 3
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',       // Natural notes, octave 4
  'Db3', 'Eb3', 'Gb3', 'Ab3', 'Bb3',              // Accidentals in octave 3
  'Db4', 'Eb4', 'Gb4', 'Ab4', 'Bb4'               // Accidentals in octave 4
];

let i = 0;
for (let y = 100; y < 400; y += 80) {
 for (let x = 80; x <= 560; x += 80) {
    if (i >= noteOptions.length) break;
    pads.push(new Pad(x, y, noteOptions[i]));
    i++;
  }
}


function draw() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  pads.forEach(pad => pad.display(ctx));
  frog.display(ctx);

  requestAnimationFrame(draw);
}

let audioCtx: AudioContext | null = null;
let difficulty = 3;


function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
}

document.getElementById('playBtn')?.addEventListener('click', () => {
  initAudio();
  clearSequence();
  generateSequence();     // Example: generate 5-note sequence
  playSequence();
});

document.getElementById('pauseBtn')?.addEventListener('click', () => {
  initAudio();
  clearSequence();
});

document.getElementById('replayBtn')?.addEventListener('click', () => {
  playSequence();
});




window.addEventListener('keydown', (e) => {
  frog.move(e.key, pads);
});

canvas.addEventListener('pointerdown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (let pad of pads) {
    if (pad.isHit(x, y)) {
      frog.click(x, y, pads);
      handlePadJump(pad.note); // <-- Call here!
      break;
    }
  }
});


draw();
