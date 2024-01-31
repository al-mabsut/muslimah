import Hidayah from '@components/Hidayah';
import * as content from '@hanafi/en/8_ruling_bleeding_most_likely_istihaadah.md';
import { propTypes } from '@utils/propTypes';

export const MostLikelyIstihadah = ({ ...props }) => (
  <Hidayah content={content} {...props} />
);

MostLikelyIstihadah.propTypes = propTypes;
