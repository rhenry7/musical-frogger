import { playNote } from "./audio";
import { pads } from "./main";

let gameSequence: string[] = [];
let currentLevel = 1;
let currentStep = 0;

export function generateSequence(length = 5) {
  const cMajorScale = ["C3", "D3", "E3", "F3", "G3"]; //  C Major (C3 root, 5-note fragment)
  const aMinorPentatonic = ["A3", "C4", "D4", "E4", "G4"]; //  A Minor Pentatonic (A3 root, 5-note scale)
  const eBMinorFragment = ["Eb3", "Gb3", "Ab3", "Bb3"]; //  A Minor Pentatonic (A3 root, 5-note scale)
  const scaleOptions = [cMajorScale, aMinorPentatonic, eBMinorFragment];
  gameSequence = scaleOptions[Math.floor(Math.random() * scaleOptions.length)]
  console.log("gameSequence", gameSequence);
}

export function clearSequence() {
  gameSequence = [];
}
   function delay(ms: number): Promise<void> {
       return new Promise(resolve => setTimeout(resolve, ms));
   }

export async function playSequence() {
for (let note of gameSequence) {
  playNote(note);  // Make sure this function works correctly
         await delay(600);

}
  console.log("playSequence", playSequence);
}

let playerSequence = [];

export async function handlePadJump(note: string) {
  playerSequence.push(note);
  playNote(note);
  if (gameSequence.length === 0) { return }
  // Validate against gameSequence
  const idx = playerSequence.length - 1;
  if (note !== gameSequence[idx]) {
       await delay(600);
    window.alert("You failed!"); // wrong note
      gameSequence = [];
  } else if (playerSequence.length === gameSequence.length) {
       await delay(600);
    window.alert("You won!"); // next round
      gameSequence = [];
  }
}

export function nextLevel() {
  currentLevel++;
  generateSequence(currentLevel + 2);
  playerSequence = [];
  playSequence();
}