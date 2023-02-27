import './Question.css';

import { Component, Show } from 'solid-js';

import { fret, string } from '../store';
import { ordinal } from '../utils/ordinal';

export const Question: Component = () => (
  <div class="question">
    What note is the <span class="highlight">{fret() > 0 ? ordinal(fret()) : 'open'}</span>{' '}
    <Show when={fret() > 0}>fret of the</Show> <span class="highlight">{ordinal(string())}</span> string?
  </div>
);
