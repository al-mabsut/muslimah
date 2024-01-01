import Modal from '../Modal/index';
import Icon from '../Modal/details.svg';

const HaydModal = () => (
  <Modal tabsIcons={[Icon, Icon, Icon, Icon]} tabsContent={['Hayd tab1 content', 'Hayd tab2 content', 'Hayd tab3 content', 'Hayd tab4 content']} />
);
 
export default HaydModal;
