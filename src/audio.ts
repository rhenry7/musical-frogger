let lastPlayed = 0;

export function playNote(note: string) {
  const now = Date.now();
  if (now - lastPlayed < 150) return; // 150 ms guard
  lastPlayed = now;

  console.log("play note:", { note });
  const audio = new Audio(`/sounds/${note}.mp3`);
  audio.play();
}