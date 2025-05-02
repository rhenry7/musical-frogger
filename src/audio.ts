// src/audio.ts
export function playNote(note: string) {
    console.log("play note:", {note})
  const audio = new Audio(`/sounds/${note}.mp3`);
  audio.play();
}