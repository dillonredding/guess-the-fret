import { randomInt } from './rand';

const stringCount = 6;
const fretCount = 12;

export const randomString = () => randomInt(1, stringCount);
export const randomFret = () => randomInt(0, fretCount);

const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
const stringNoteIndexes = [7, 2, 10, 5, 0, 7];

export function guitarNote(string: number, fret: number): string {
  const startingNoteIndex = stringNoteIndexes[string - 1];
  const noteIndex = (startingNoteIndex + fret) % 12;
  return notes[noteIndex];
}
