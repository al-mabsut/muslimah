import Hidayah from '@components/Hidayah';
import * as content from '@hanafi/en/7_ruling_of_hayd.md';
import { propTypes } from '@utils/propTypes';

export const Hayd = ({ ...props }) => (
  <Hidayah content={content} {...props} />
);

Hayd.propTypes = propTypes;
