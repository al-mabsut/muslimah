import Hidayah from '@components/Hidayah';
import * as content from '@hanafi/en/13_ruling_istihaadah.md';
import { propTypes } from '@utils/propTypes';

export const Istihadah = ({ ...props }) => (
  <Hidayah content={content} {...props} />
);

Istihadah.propTypes = propTypes;
