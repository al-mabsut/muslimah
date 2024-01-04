import { h } from 'preact';
import { Hidayah } from '@components/Hidayah';
import initialBleeding from '@hanafi/en/1_indeterminate_ruling_on_initial_bleeding.md';
import subseqeuentBleedings from '@hanafi/en/2_indeterminate_ruling_for_subsequent_bleedings.md';
import presentCycle from '@hanafi/en/3_indeterminate_ruling_for_present_cycle.md';

export const scenarios = {
  'initial-bleeding': true,
  'subsequent-bleedings': true,
  'present-cycle': true
};

export const Indeterminate = ({ scenario, style }) => {
  let content;
  switch (scenario) {
  case 'initial-bleeding':
    content = initialBleeding;
    break;
  case 'subsequent-bleedings':
    content = subseqeuentBleedings;
    break;
  case 'present-cycle':
    content = presentCycle;
    break;
  default:
    throw new Error('exhausted');
  }

  return (
    <div>
      <Hidayah content={content} style={style} />
    </div>
  );
};
