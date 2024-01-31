import Hidayah from '@components/Hidayah';
import * as initialBleeding from '@hanafi/en/1_indeterminate_ruling_on_initial_bleeding.md';
import * as subseqeuentBleedings from '@hanafi/en/2_indeterminate_ruling_for_subsequent_bleedings.md';
import * as presentCycle from '@hanafi/en/3_indeterminate_ruling_for_present_cycle.md';
import { propTypes } from '@utils/propTypes';
import PropTypes from 'prop-types';

export const Indeterminate = ({ scenario, ...props }) => {
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
    <Hidayah content={content} {...props} />
  );
};

Indeterminate.propTypes = { ...propTypes,
  scenario: PropTypes.oneOf(['initial-bleeding', 'subsequent-bleedings', 'present-cycle']).isRequired
};
