
export const keyToNoteMap: Record<string, string> = {
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
  '8': 'Gb4',
  '9': 'Ab4',
  '0': 'Bb4',
};

type ScalePattern = {
  name: string;
  notes: string[];
};

export const scaleOptions: ScalePattern[] = [
  { name: "C Major Scale", notes: ["C3", "D3", "E3", "F3", "G3"] },
  { name: "G Major Scale", notes: ["G3", "A3", "B3", "C4", "D4"] },
  { name: "D Minor Pentatonic", notes: ["D3", "F3", "G3", "A3", "C4"] },
  { name: "F Major Scale", notes: ["F3", "G3", "A3", "Bb3", "C4"] },
  { name: "F Lydian Fragment", notes: ["F3", "G3", "A3", "B3", "C4"] },
  { name: "E Phrygian Fragment", notes: ["E3", "F3", "G3", "A3", "B3"] },
  { name: "A Minor Pentatonic", notes: ["A3", "C4", "D4", "E4", "G4"] },
{ name: "Eb Minor Fragment", notes: ["Eb3", "Gb3", "Ab3", "Bb3"] },
  { name: "C Mixolydian Fragment", notes: ["C3", "D3", "E3", "F3", "Bb3"] },
{ name: "G Minor Pentatonic", notes: ["G3", "Bb3", "C4", "D4", "F3"] },
{ name: "Thirds Pattern", notes: ["C3", "E3", "D3", "F3", "E3", "G3"] },
{ name: "F Arpeggio Roll", notes: ["F3", "A3", "C4", "A3", "F3"] },
{ name: "Descending Minor Line", notes: ["G4", "E4", "D4", "C4", "A3"] },
{ name: "Echo Expansion", notes: ["C3", "E3", "C3", "E3", "D3", "F3", "D3", "F3", "E3", "G3"] },
{ name: "Step-Skip Inversion", notes: ["E3", "G3", "F3", "A3", "G3", "Bb3"] },
{ name: "Circle Fragment", notes: ["C3", "G3", "D3", "A3", "E3"] },
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



