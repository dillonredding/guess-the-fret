import './OptionButton.css';

import { ParentComponent } from 'solid-js';

import { useGame } from '../game';

export const OptionButton: ParentComponent<{ value: string }> = (props) => {
  const { selection, setSelection, guessed, isCorrect, isIncorrect } = useGame();
  return (
    <button
      class="option-btn"
      classList={{
        selected: selection() === props.value,
        correct: isCorrect(props.value),
        incorrect: isIncorrect(props.value) && selection() === props.value
      }}
      onClick={() => setSelection(props.value)}
      disabled={guessed()}
    >
      {props.children}
    </button>
  );
};
