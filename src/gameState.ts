// gameState.ts

export let gameSequence: string[] = [];
export let userSequence: string[] = [];

export function resetSequences() {
  gameSequence = [];
  userSequence = [];
}

export function setGameSequence(seq: string[]) {
  gameSequence = [...seq];
}

export function addUserNote(note: string) {
  userSequence.push(note);
}

export function getGameSequence() {
  return gameSequence;
}

export function getUserSequence() {
  return userSequence;
}

export function isUserSequenceCorrectSoFar(): boolean {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== gameSequence[i]) return false;
  }
  return true;
}

export function isUserSequenceComplete(): boolean {
  return userSequence.length === gameSequence.length;
}
