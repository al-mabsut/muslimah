import BaseHaydModal from '../../../baseModals/BaseHaydModal';
import { contentStore } from '@al-mabsut/muslimah';

export const HaydModal = () => (
  <BaseHaydModal contentStore={contentStore} contentStoreKey={'7_ruling_of_hayd.md'} />
);

// For storybook
export default HaydModal;
