import Hidayah from '@components/Hidayah';
import * as beforeHabit from '@hanafi/en/10_ruling_most_likely_tuhr_concluding_ongoing_hayd_before_habit_completion.md';
import * as before10Days from '@hanafi/en/11_ruling_most_likely_tuhr_concluding_ongoing_hayd_before_10_days.md';
import { propTypes } from '@utils/propTypes';
import PropTypes from 'prop-types';

export const MostLikelyTuhr = ({ scenario = 'complete', ...props }) => {
  let content;
  switch (scenario) {
  case 'before-habit':
    content = beforeHabit;
    break;
  case 'before-10-days':
    content = before10Days;
    break;
  default:
    throw new Error('exhausted');
  }

  return (
    <Hidayah content={content} {...props} />
  );
};

MostLikelyTuhr.propTypes = { ...propTypes,
  scenario: PropTypes.oneOf(['before-habit', 'before-10-days']).isRequired
};
