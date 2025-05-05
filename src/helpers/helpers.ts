
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

export type ScalePattern = {
    name: string;
    type: string;
  notes: string[];
};

export const scaleOptions: ScalePattern[] = [
  // --- SCALES ---
  { name: "C Major Scale", type: "scale", notes: ["C3", "D3", "E3", "F3", "G3"] },
  { name: "G Major Scale", type: "scale", notes: ["G3", "A3", "B3", "C4", "D4"] },
  { name: "D Minor Pentatonic", type: "scale", notes: ["D3", "F3", "G3", "A3", "C4"] },
  { name: "F Major Scale", type: "scale", notes: ["F3", "G3", "A3", "Bb3", "C4"] },
  { name: "A Minor Pentatonic", type: "scale", notes: ["A3", "C4", "D4", "E4", "G4"] },
  { name: "G Minor Pentatonic", type: "scale", notes: ["G3", "Bb3", "C4", "D4", "F3"] },
  // --- FRAGMENTS ---
  { name: "F Lydian Fragment", type: "fragment", notes: ["F3", "G3", "A3", "B3", "C4"] },
  { name: "E Phrygian Fragment", type: "fragment", notes: ["E3", "F3", "G3", "A3", "B3"] },
  { name: "Eb Minor Fragment", type: "fragment", notes: ["Eb3", "Gb3", "Ab3", "Bb3"] },
  { name: "C Mixolydian Fragment", type: "fragment", notes: ["C3", "D3", "E3", "F3", "Bb3"] },
  { name: "Circle Fragment", type: "fragment", notes: ["C3", "G3", "D3", "A3", "E3"] },
  // --- ARPEGGIOS ---
  { name: "F Arpeggio Roll", type: "arpeggio", notes: ["F3", "A3", "C4", "A3", "F3"] },
  { name: "C Major Arpeggio", type: "arpeggio", notes: ["C3", "E3", "G3", "E3", "C3"] },
  { name: "D Minor Pentatonic Arpeggio", type: "arpeggio", notes: ["D3", "F3", "A3", "F3", "D3"] },
  // --- RUNS ---
  { name: "Descending Minor Line", type: "run", notes: ["G4", "E4", "D4", "C4", "A3"] },
  { name: "Ascending Run", type: "run", notes: ["C3", "D3", "E3", "F3", "G3"] },
  { name: "Descending Run", type: "run", notes: ["G3", "F3", "E3", "D3", "C3"] },
  // --- MOTIFS ---
  { name: "Two-Note Motif", type: "motif", notes: ["C3", "E3", "C3", "E3", "D3", "F3", "D3", "F3"] },
  { name: "Three-Note Motif", type: "motif", notes: ["C3", "D3", "E3", "C3", "D3", "E3"] },
  { name: "Thirds Pattern", type: "motif", notes: ["C3", "E3", "D3", "F3", "E3", "G3"] },
  { name: "Step-Skip Pattern", type: "motif", notes: ["C3", "E3", "D3", "F3", "E3", "G3"] },
  { name: "Step-Skip Inversion", type: "motif", notes: ["E3", "G3", "F3", "A3", "G3", "Bb3"] },
  { name: "Echo Expansion", type: "motif", notes: ["C3", "E3", "C3", "E3", "D3", "F3", "D3", "F3", "E3", "G3"] },
  { name: "Hold-Repeat Pattern", type: "motif", notes: ["C3", "C3", "E3", "D3", "D3", "G3"] },
  { name: "Call and Response", type: "motif", notes: ["C3", "D3", "E3", "D3", "E3", "F3", "G3", "F3"] }
];




