import { Hidayah } from '@components/Hidayah';
import * as content from '@hanafi/en/13_ruling_istihaadah.md';

export const Istihadah = ({ ...props }) => (
  <Hidayah content={content} {...props} />
);
