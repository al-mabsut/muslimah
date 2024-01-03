/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import style from './index.module.css';
import DetailsIcon from '../../assets/details.svg';
import CloseIcon from '../../assets/circularCloseBtn.png';

const Modal = ({ tabsIcons, tabsContentKeys, tabsContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div>
      <button className={style.modalOpenBtn} onClick={() => setIsModalOpen(true)}>
        <img src={DetailsIcon} alt="Open Modal" width="24px" height="24px" />
      </button>
      { isModalOpen && <div className={style.mainModal} onClick={() => setIsModalOpen(false)}>
        <div className={style.mainModalContainer} onClick={(e) => e.stopPropagation()}>
          <button className={style.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
            <img src={CloseIcon} alt="Close Modal" width="24px" height="24px" />
          </button>
          <div className={style.tabsContainer}>
            <div className={style.tabsHeader}>
              { tabsIcons.map((tab, i) => (
                <button className={`${style.tabHeader} ${selectedTabIndex === i ? style.selectedTabHeader : '' }`} onClick={() => setSelectedTabIndex(i)} key={`tab_${i}`}>
                  <img src={tab} alt="tab" width="24px" height="24px" />
                </button>
              )) }
            </div>
            <div className={style.tabsBody}>
              { tabsContent[tabsContentKeys[selectedTabIndex]].map((text => <p>{text}</p>)) }
            </div>
          </div>
        </div>
      </div> }
    </div>
  );
};
 
export default Modal;
