import { ParentComponent } from 'solid-js';

import { correctNote, guessed, selection, setSelection } from '../store';

export const OptionButton: ParentComponent<{ value: string }> = (props) => {
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
