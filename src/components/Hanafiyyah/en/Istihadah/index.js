import { Hidayah } from '@components/Hidayah';
import * as content from '@hanafi/en/13_ruling_istihaadah.md';

export const Istihadah = ({ style }) => (
  <div>
    <Hidayah content={content} style={style} />
  </div>
);
