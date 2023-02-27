import './App.css';

import { Component, Show } from 'solid-js';

import { guessed, selection, setFret, setGuessed, setSelection, setString } from '../store';
import { randomFret, randomString } from '../utils/music';
import { OptionButton } from './OptionButton';
import { Question } from './Question';

const App: Component = () => {
  const submitGuess = () => {
    setGuessed(true);
  };

  const resetGame = () => {
    setFret(randomFret());
    setString(randomString());
    setSelection(undefined);
    setGuessed(false);
  };

  return (
    <>
      <Question />
      <div class="options">
        <OptionButton value="a">A</OptionButton>
        <OptionButton value="a#">
          A&sharp;
          <br />
          B&flat;
        </OptionButton>
        <OptionButton value="b">B</OptionButton>
        <OptionButton value="c">C</OptionButton>
        <OptionButton value="c#">
          C&sharp;
          <br />
          D&flat;
        </OptionButton>
        <OptionButton value="d">D</OptionButton>
        <OptionButton value="d#">
          D&sharp;
          <br />
          E&flat;
        </OptionButton>
        <OptionButton value="e">E</OptionButton>
        <OptionButton value="f">F</OptionButton>
        <OptionButton value="f#">
          F&sharp;
          <br />
          G&flat;
        </OptionButton>
        <OptionButton value="g">G</OptionButton>
        <OptionButton value="g#">
          G&sharp;
          <br />
          A&flat;
        </OptionButton>
      </div>
      <div>
        <Show
          when={guessed()}
          fallback={
            <button class="action-btn" onClick={submitGuess} disabled={!selection()}>
              Submit
            </button>
          }
        >
          <button class="action-btn" onClick={resetGame}>
            Reset
          </button>
        </Show>
      </div>
    </>
  );
};

export default App;
