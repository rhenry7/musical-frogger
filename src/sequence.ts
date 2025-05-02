import { playNote } from "./audio";
import { pads } from "./main";

let gameSequence: string[] = [];
let currentLevel = 1;
let currentStep = 0;

export function generateSequence(length = 3) {
  gameSequence = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * pads.length);
    gameSequence.push(pads[index].note);
  }
}
   function delay(ms: number): Promise<void> {
       return new Promise(resolve => setTimeout(resolve, ms));
   }

export async function playSequence() {
  for (let i = 0; i < gameSequence.length; i++) {
    const pad = pads.find(p => p.note === gameSequence[i]);
     //await flashPad(pad);       // e.g., change fillStyle, redraw
      if (pad) {  
          playNote(pad.note);        // play sound
      }
   await delay(600);
  }
}

let playerSequence = [];

export function handlePadJump(note: string) {
  playerSequence.push(note);
  playNote(note);

  // Validate against gameSequence
  const idx = playerSequence.length - 1;
  if (note !== gameSequence[idx]) {
    window.alert("You failed!"); // wrong note
  } else if (playerSequence.length === gameSequence.length) {
   window.alert("You won!"); // next round
  }
}

export function nextLevel() {
  currentLevel++;
  generateSequence(currentLevel + 2);
  playerSequence = [];
  playSequence();
}