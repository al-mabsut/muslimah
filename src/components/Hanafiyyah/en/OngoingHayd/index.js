import { Hidayah } from '@components/Hidayah';
import * as tillHabit from '@hanafi/en/5_ruling_of_ongoing_hayd_till_habit.md';
import * as till10 from '@hanafi/en/6_ruling_of_ongoing_hayd_till_10_days.md';

export const OngoingHayd = ({ scenario, ...props }) => {
  let content;
  switch (scenario) {
  case 'until-habit':
    content = tillHabit;
    break;
  case 'until-10-days':
    content = till10;
    break;
  default:
    throw new Error('exhausted');
  }

  return (
    <Hidayah content={content} {...props} />
  );
};
