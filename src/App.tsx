import './App.css';

import { Component, createSignal, ParentComponent, Show } from 'solid-js';

const stringCount = 6;
const fretCount = 12;

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomString = () => randomInt(1, stringCount);
const randomFret = () => randomInt(0, fretCount);

const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
const stringNoteIndexes = [7, 2, 9, 5, 0, 7];

function guitarNote(string: number, fret: number): string {
  const startingNoteIndex = stringNoteIndexes[string - 1];
  const noteIndex = (startingNoteIndex + fret) % 12;
  return notes[noteIndex];
}

function ordinalSuffix(n: number) {
  if (n % 10 === 1 && n % 100 !== 11) return 'st';
  else if (n % 10 === 2 && n % 100 !== 12) return 'nd';
  else if (n % 10 === 3 && n % 100 !== 13) return 'rd';
  else return 'th';
}

const ordinal = (n: number) => `${n}${ordinalSuffix(n)}`;

const [fret, setFret] = createSignal(randomFret());
const [string, setString] = createSignal(randomString());
const correctNote = () => guitarNote(string(), fret());
const [guessed, setGuessed] = createSignal(false);
const [selection, setSelection] = createSignal<string>();

const OptionButton: ParentComponent<{ value: string }> = (props) => {
  return (
    <button
      class="option-btn"
      classList={{
        selected: selection() === props.value,
        correct: guessed() && correctNote() === props.value,
        incorrect: guessed() && correctNote() !== props.value && selection() === props.value
      }}
      onClick={() => setSelection(props.value)}
      disabled={guessed()}
    >
      {props.children}
    </button>
  );
};

const App: Component = () => {
  const handleGuess = () => {
    setGuessed(true);
  };

  const handleReset = () => {
    setFret(randomFret());
    setString(randomString());
    setSelection(undefined);
    setGuessed(false);
  };

  return (
    <div class="main-div">
      <div class="question">
        What note is the <em>{ordinal(fret())}</em> fret of the <em>{ordinal(string())}</em> string?
      </div>
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
            <button class="action-btn" onClick={() => handleGuess()} disabled={!selection()}>
              Guess
            </button>
          }
        >
          <button class="action-btn" onClick={() => handleReset()}>
            Reset
          </button>
        </Show>
      </div>
    </div>
  );
};

export default App;
