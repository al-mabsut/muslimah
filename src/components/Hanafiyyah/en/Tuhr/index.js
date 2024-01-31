import Hidayah from '@components/Hidayah';
import * as completeTuhr from '@hanafi/en/9_ruling_of_tuhr.md';
import * as concludingExcess10DayBleeding from '@hanafi/en/12_ruling_tuhr_concluding_ongoing_bleeding_exceeding_10_days.md';
import { propTypes } from '@utils/propTypes';
import PropTypes from 'prop-types';

export const Tuhr = ({ scenario = 'complete', ...props }) => {
  let content;
  switch (scenario) {
  case 'complete':
    content = completeTuhr;
    break;
  case 'concludes-excess-10-day-bleeding':
    content = concludingExcess10DayBleeding;
    break;
  default:
    throw new Error('exhausted');
  }

  return (
    <Hidayah content={content} {...props} />
  );
};

Tuhr.propTypes = { ...propTypes,
  scenario: PropTypes.oneOf(['complete', 'concludes-excess-10-day-bleeding']).isRequired
};
