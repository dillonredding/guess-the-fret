import { Component, Show } from 'solid-js';

import { fret, string } from '../store';
import { ordinal } from '../utils/ordinal';

export const Question: Component = () => (
  <div class="question">
    What note is the <em>{fret() > 0 ? ordinal(fret()) : 'open'}</em> <Show when={fret() > 0}>fret of the</Show>{' '}
    <em>{ordinal(string())}</em> string?
  </div>
);
