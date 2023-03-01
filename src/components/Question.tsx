import './Question.css';

import { Component, Show } from 'solid-js';

import { useGame } from '../game';
import { ordinal } from '../utils/ordinal';

export const Question: Component = () => {
  const { fret, string } = useGame();
  return (
    <div class="question">
      What note is the <span class="highlight">{fret() > 0 ? ordinal(fret()) : 'open'}</span>{' '}
      <Show when={fret() > 0}>fret of the</Show> <span class="highlight">{ordinal(string())}</span> string?
    </div>
  );
};
