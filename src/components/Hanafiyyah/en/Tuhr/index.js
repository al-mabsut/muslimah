import { Hidayah } from '@components/Hidayah';
import * as completeTuhr from '@hanafi/en/9_ruling_of_tuhr.md';
import * as concludingExcess10DayBleeding from '@hanafi/en/12_ruling_tuhr_concluding_ongoing_bleeding_exceeding_10_days.md';

export const Tuhr = ({ scenario = 'complete', style }) => {
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
    <div>
      <Hidayah content={content} style={style} />
    </div>
  );
};
