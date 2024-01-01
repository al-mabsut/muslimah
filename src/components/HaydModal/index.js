import Modal from '../Modal/index';
import Icon from '../Modal/details.svg';

const HaydModal = () => (
  <Modal tabsIcons={[Icon, Icon, Icon, Icon]} tabsContentKeys={['general_hayd_overview', 'salaah', 'sawm', 'marital_affairs']} />
);
 
export default HaydModal;
