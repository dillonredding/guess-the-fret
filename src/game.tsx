import { Accessor, createContext, createSignal, ParentComponent, Setter, useContext } from 'solid-js';

import { guitarNote, randomFret, randomString } from './utils/music';

interface GameContextValue {
  fret: Accessor<number>;
  string: Accessor<number>;
  guessed: Accessor<boolean>;
  selection: Accessor<string | undefined>;
  setSelection: Setter<string>;
  guess(): void;
  isCorrect(note: string): boolean;
  isIncorrect(note: string): boolean;
  reset(): void;
}

const GameContext = createContext({} as GameContextValue);

export const GameProvider: ParentComponent = (props) => {
  const [fret, setFret] = createSignal(randomFret());
  const [string, setString] = createSignal(randomString());
  const correctNote = () => guitarNote(string(), fret());
  const [guessed, setGuessed] = createSignal(false);
  const [selection, setSelection] = createSignal<string>();

  const value: GameContextValue = {
    fret,
    string,
    selection,
    setSelection,
    guessed,

    guess: () => {
      setGuessed(true);
    },

    isCorrect: (note) => guessed() && note === correctNote(),
    isIncorrect: (note) => guessed() && note !== correctNote(),

    reset: () => {
      setFret(randomFret());
      setString(randomString());
      setSelection(undefined);
      setGuessed(false);
    }
  };

  return <GameContext.Provider value={value}>{props.children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
