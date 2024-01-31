import Hidayah from '@components/Hidayah';
import * as content from '@hanafi/en/4_ruling_bleeding_most_likely_hayd.md';
import { propTypes } from '@utils/propTypes';

export const MostLikelyHayd = ({ ...props }) => (
  <Hidayah content={content} {...props} />
);

MostLikelyHayd.propTypes = propTypes;
