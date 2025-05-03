import { playNote } from "./audio";
import { pads } from "./main";

let gameSequence: string[] = [];
let playerSequence: string[] = [];

type ScalePattern = {
  name: string;
  notes: string[];
};

export function generateSequence() {
  gameSequence = []; // Reset the sequence

const scaleOptions: ScalePattern[] = [
  { name: "C Major Scale", notes: ["C3", "D3", "E3", "F3", "G3"] },
  { name: "G Major Scale", notes: ["G3", "A3", "B3", "C4", "D4"] },
  { name: "D Major Scale", notes: ["D3", "E3", "F#4", "G4", "A4"] },
  { name: "D Minor Pentatonic", notes: ["D3", "F3", "G3", "A3", "C4"] },
  { name: "F Major Scale", notes: ["F3", "G3", "A3", "Bb3", "C4"] },
  { name: "F Lydian Fragment", notes: ["F3", "G3", "A3", "B3", "C4"] },
  { name: "E Phrygian Fragment", notes: ["E3", "F3", "G3", "A3", "B3"] },
  { name: "A Minor Pentatonic", notes: ["A3", "C4", "D4", "E4", "G4"] },
  { name: "Eb Minor Fragment", notes: ["Eb3", "Gb3", "Ab3", "Bb3"] },

  // Patterns
  { name: "Ascending Run", notes: ["C3", "D3", "E3", "F3", "G3"] },
  { name: "Descending Run", notes: ["G3", "F3", "E3", "D3", "C3"] },
  { name: "C Major Arpeggio", notes: ["C3", "E3", "G3", "E3", "C3"] },
  { name: "D Minor Pentatonic Arpeggio", notes: ["D3", "F3", "A3", "F3", "D3"] },
  { name: "Two-Note Motif", notes: ["C3", "E3", "C3", "E3", "D3", "F3", "D3", "F3"] },
  { name: "Three-Note Motif", notes: ["C3", "D3", "E3", "C3", "D3", "E3"] },
  { name: "Step-Skip Pattern", notes: ["C3", "E3", "D3", "F3", "E3", "G3"] },
  { name: "Hold-Repeat Pattern", notes: ["C3", "C3", "E3", "D3", "D3", "G3"] },
  { name: "Call and Response", notes: ["C3", "D3", "E3", "D3", "E3", "F3", "G3", "F3"] }
];
  
  const sequence = scaleOptions[Math.floor(Math.random() * scaleOptions.length)];
  gameSequence = sequence.notes;

  const display = document.getElementById('note-display');
  if (display) {
    if (gameSequence.length > 0) { 
      display.textContent = `Now learning: ${sequence.name}`;
    } else {
      display.textContent = "No scale in progress";
    }

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


export async function handlePadJump(note: string) {
  playerSequence.push(note);
  playNote(note);
  console.log("playerSequence", playerSequence);
  if (gameSequence.length === 0) { return }
  // Validate against gameSequence
  const idx = playerSequence.length - 1;
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