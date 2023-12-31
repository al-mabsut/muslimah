import { Hidayah } from '@components/Hidayah';
import tillHabit from '@hanafi/en/5_ruling_of_ongoing_hayd_till_habit.md';
import till10 from '@hanafi/en/6_ruling_of_ongoing_hayd_till_10_days.md';

export const OngoingHayd = ({ scenario, style }) => {
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
    <div>
      <Hidayah content={content} style={style} />
    </div>
  );
};
