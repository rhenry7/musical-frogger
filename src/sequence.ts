import { playNote } from "./audio";
import { Frog } from "./frog";
import { scaleOptions } from "./helpers/helpers";
import { pads } from "./main";
import { Pad } from "./pad";

let gameSequence: string[] = [];
let playerSequence: string[] = [];



export function generateSequence() {
  gameSequence = []; // Reset the sequence
  playerSequence = []; // Reset the player's sequence

  const sequence = scaleOptions[Math.floor(Math.random() * scaleOptions.length)];
  gameSequence = sequence.notes;

  const display = document.getElementById('scale-display');
  const showNotes = document.getElementById('note-display');

  if (display) {
    if (gameSequence.length > 0) { 
      display.textContent = `Now learning: ${sequence.name}`;
    } else {
      display.textContent = "No scale in progress";
    }
  }
  
  if (showNotes) {
    showNotes.textContent = `Notes: ${gameSequence.join(", ")}`;
  }


  console.log("gameSequence", gameSequence);
}

export function clearSequence() {
  gameSequence = [];
  playerSequence = [];
}
   function delay(ms: number): Promise<void> {
       return new Promise(resolve => setTimeout(resolve, ms));
   }

export async function playSequence() {
  playerSequence = [];
  await delay(800);

  for (let note of gameSequence) {
    pads.forEach(pad => {
      if (pad.note === note) {
        pad.activateHitEffect();
      }
  })
  playNote(note);  // Make sure this function works correctly
  await delay(600);

}
  console.log("playSequence", playSequence);
}

// Find pad by note
function getPadByNote(note: string, pads: Pad[]): Pad | undefined {
  return pads.find(pad => pad.note === note);
}

// Trigger note and move frog
function handleNoteTrigger(note: string, pads: Pad[], frog: Frog) {
  const pad = getPadByNote(note, pads);
  if (!pad) return;
  frog.x = pad.x;
  frog.y = pad.y;
}

export async function handlePadJump(note: string, pads: Pad[], frog: Frog) {
  playerSequence.push(note);
  playNote(note);
  console.log("playerSequence", playerSequence);
  const pad = pads.find(pad => pad.note === note);
  const idx = playerSequence.length - 1;

  for (const pad of pads) {
    if (pad.note === note) {
      pad.activateHitEffect();
    }
  }
if (!pad) return;

frog.x = pad.x;
frog.y = pad.y;
if (gameSequence.length === 0) { return }
  // Validate against gameSequence
  if (note !== gameSequence[idx]) {
  await delay(600);
  window.alert("Wrong! You lose!"); // wrong note
    gameSequence = [];
    playerSequence = [];
    return console.log("gameSequence", gameSequence);
  } else if (playerSequence.length === gameSequence.length) {
    await delay(600);
    window.alert("You won!"); // next round
    gameSequence = [];
    playerSequence = [];
    return console.log("gameSequence", gameSequence);
  }
}

export function nextLevel() {
  generateSequence();
  playerSequence = [];
  playSequence();
}