import { createSignal } from 'solid-js';

import { guitarNote, randomFret, randomString } from './utils/music';

export const [fret, setFret] = createSignal(randomFret());
export const [string, setString] = createSignal(randomString());
export const correctNote = () => guitarNote(string(), fret());
export const [guessed, setGuessed] = createSignal(false);
export const [selection, setSelection] = createSignal<string>();
