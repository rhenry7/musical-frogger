import { playNote } from "./audio";
import { pads } from "./main";

let gameSequence: string[] = [];
let playerSequence: string[] = [];


export function generateSequence() {
  gameSequence = []; // Reset the sequence
  const cMajorScale = ["C3", "D3", "E3", "F3", "G3"]; //  C Major (C3 root, 5-note fragment)
  const gMajorScale = ["G3", "A3", "B3", "C4", "D4"]; // G Major (G3 root)
  const dMajorScale = ["D3", "E3", "F#4", "G4", "A4"]; // D Major (D3 root)
  const dMinorPentatonic = ["D3", "F3", "G3", "A3", "C4"]; // D Minor Pentatonic (D3 root)
  const fMajorScale = ["F3", "G3", "A3", "Bb3", "C4"]; // F Major (F3 root)
  const fLydianFragment = ["F3", "G3", "A3", "B3", "C4"]; // F Lydian (F3 root)
const ePhrygianFragment = ["E3", "F3", "G3", "A3", "B3"]; // E Phrygian (E3 root)
  const aMinorPentatonic = ["A3", "C4", "D4", "E4", "G4"]; //  A Minor Pentatonic (A3 root, 5-note scale)
  const eBMinorFragment = ["Eb3", "Gb3", "Ab3", "Bb3"]; //  A Minor Pentatonic (A3 root, 5-note scale)
  // 1. Ascending / Descending Runs
const ascendingRun = ["C3", "D3", "E3", "F3", "G3"];
const descendingRun = ["G3", "F3", "E3", "D3", "C3"];

// 2. Arpeggios / Broken Chords
const cMajorArpeggio = ["C3", "E3", "G3", "E3", "C3"];
const dMinorPentatonicArpeggio = ["D3", "F3", "A3", "F3", "D3"];

// 3. Repeated Motifs
const twoNoteMotif = ["C3", "E3", "C3", "E3", "D3", "F3", "D3", "F3"];
const threeNoteMotif = ["C3", "D3", "E3", "C3", "D3", "E3"];

// 4. Skip-Step Patterns
const stepSkipPattern = ["C3", "E3", "D3", "F3", "E3", "G3"];

// 5. Rhythmic Phrases with Holds
const holdRepeatPattern = ["C3", "C3", "E3", "D3", "D3", "G3"];

// BONUS: Call & Response
const callAndResponse = ["C3", "D3", "E3", "D3", "E3", "F3", "G3", "F3"];

  const scaleOptions = [cMajorScale, gMajorScale, aMinorPentatonic, eBMinorFragment, dMajorScale, dMinorPentatonic, fMajorScale, fLydianFragment, ePhrygianFragment, aMinorPentatonic, ascendingRun, descendingRun, cMajorArpeggio, dMinorPentatonicArpeggio, twoNoteMotif, threeNoteMotif, stepSkipPattern, holdRepeatPattern, callAndResponse];
  

  gameSequence = scaleOptions[Math.floor(Math.random() * scaleOptions.length)]
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