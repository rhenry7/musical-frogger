import { Frog } from './frog';
import { keyToNoteMap } from './helpers/helpers';
import { Pad } from './pad';
import { clearSequence, generateSequence, handlePadJump, playSequence } from './sequence';

const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 500;
document.getElementById('game-container')?.appendChild(canvas);
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const frog = new Frog(canvas.width / 2, canvas.height - 50);

export const pads: Pad[] = [];

let i = 0;
for (let y = 100; y < 400; y += 80) {
 for (let x = 80; x <= 560; x += 80) {
    if (i >= Object.values(keyToNoteMap).length) break;
    pads.push(new Pad(x, y, Object.values(keyToNoteMap)[i]));
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
  generateSequence();     
  playSequence();
  pads.forEach(pad => pad.randomizeColor());
  frog.reset(canvas.width / 2, canvas.height - 50);
});

document.getElementById('pauseBtn')?.addEventListener('click', () => {
  initAudio();
  clearSequence();
});

document.getElementById('replayBtn')?.addEventListener('click', () => {
  playSequence();
});



// Keyboard input
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

if (keyToNoteMap[key]) {
    const note = keyToNoteMap[key];
    handlePadJump(note, pads, frog);
} 
});

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (let pad of pads) {
    if (pad.isHit(x, y)) {
      handlePadJump(pad.note, pads, frog); // <-- Call here!
      break;
    }
  }
});

export const noteToKeyMap: Record<string, string> = {};

for (const [key, note] of Object.entries(keyToNoteMap)) {
  noteToKeyMap[note] = key;
}


draw();
