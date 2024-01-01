/* eslint-disable react/jsx-no-bind */
import { useMemo, useState } from 'react';
import style from './index.module.css';
import DetailsIcon from './details.svg';
import CloseIcon from './circularCloseBtn.png';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabs = useMemo(() => [DetailsIcon, DetailsIcon, DetailsIcon], []);
  const tabsContent = useMemo(() => [`tab1 content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, `tab2 content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, `tab3 content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`], []);

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
              { tabs.map((tab, i) => (
                <button className={`${style.tabHeader} ${selectedTabIndex === i ? style.selectedTabHeader : '' }`} onClick={() => setSelectedTabIndex(i)} key={`tab_${i}`}>
                  <img src={tab} alt="tab" width="24px" height="24px" />
                </button>
              )) }
            </div>
            <div className={style.tabsBody}>
              { tabsContent[selectedTabIndex] }
            </div>
          </div>
        </div>
      </div> }
    </div>
  );
};
 
export default Modal;
