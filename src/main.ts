import { playNote } from './audio';
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
  frog.reset(canvas.width / 2, canvas.height - 50);
});

document.getElementById('pauseBtn')?.addEventListener('click', () => {
  initAudio();
  clearSequence();
});

document.getElementById('replayBtn')?.addEventListener('click', () => {
  playSequence();
});

const keyToNoteMap: Record<string, string> = {
  // White keys
  'q': 'C2',
  'w': 'D2',
  'e': 'E2',
  'r': 'F2',
  't': 'G2',
  'y': 'A2',
  'u': 'B2',
  'i': 'C3',
  'o': 'D3',
  'p': 'E3',
  'a': 'F3',  
  's': 'G3',
  'd': 'A3',
  'f': 'B3',
  'g': 'C4',
  'h': 'D4',
  'j': 'E4',
  'k': 'F4',
  'l': 'G4',
  'z': 'A4',
  'x': 'B4',
  // Black keys
  '1': 'Db3',
  '2': 'Eb3',
  '3': 'Gb3',
  '4': 'Ab3',
  '5': 'Bb3',
  '6': 'Db4',
  '7': 'Eb4',
};




// Keyboard input
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

if (keyToNoteMap[key]) {
    const note = keyToNoteMap[key];
    handlePadJump(note, pads, frog);
} 
});

export const noteToKeyMap: Record<string, string> = {};

for (const [key, note] of Object.entries(keyToNoteMap)) {
  noteToKeyMap[note] = key;
}


draw();
