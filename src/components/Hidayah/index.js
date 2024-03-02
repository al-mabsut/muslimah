/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState } from 'preact/hooks';
import PropTypes from 'prop-types';
import terminologies from '@components/Content/terminologies.json';
import { Fragment } from 'preact';

const PopUpModal = ({ popUpClassName, displayPopUpModal, setDisplayPopUpModal, popUpModalWord }) => {
  if ( !displayPopUpModal ) {
    return <></>;
  }

  return (<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: '1%', backgroundColor: '#ddd' }} className={popUpClassName}>
    <h3>{popUpModalWord} {`(${terminologies[popUpModalWord.toLowerCase()]})`}</h3>
    <p>Description/Explanation coming soon inshallah</p>
    <button style={{ position: 'absolute', top: '1%', right: '1%' }} onClick={() => setDisplayPopUpModal(false)}>X</button>
  </div>);
};

const Hidayah = ({ content, action, style, className, tabsContainerClassName, tabClassName, contentClassName,
  popUpClassName, showTabsIcons=true, showTabsTitle=true, showTitle=true, showInnerTitle=true,
  guidanceIcon, clarificationIcon, ramadanIcon, marriageIcon } = {}) => {
  const [activeTab, setActiveTab] = useState('Guidance');
  const [displayPopUpModal, setDisplayPopUpModal] = useState();
  const [popUpModalWord, setPopUpModalTerm] = useState();
  const tabs = useMemo(() => (['Guidance', 'Clarification', 'Ramadan', 'Marriage']), []);

  const getIcon = ({ tab }) => {
    switch (tab) {
    case 'Guidance':
      return guidanceIcon;
    case 'Clarification':
      return clarificationIcon;
    case 'Ramadan':
      return ramadanIcon;
    case 'Marriage':
      return marriageIcon;
    default:
      throw new Error(`[Developer Error] No icon provided for the tab: "${tab}". Make sure pass the right tab name`);
    }
  };

  const alternativeAction = ({ word }) => {
    setDisplayPopUpModal(true);
    setPopUpModalTerm(word);
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className={className || ''} style={{ ...style }}>
      { showTitle && <Title text={content.title} />}
      <div className={tabsContainerClassName || ''}>
        {tabs && tabs.map((tab) => (
          <button className={tabClassName || ''} onClick={() => handleTabClick(tab)} disabled={activeTab === tab}>
            { showTabsIcons && getIcon({ tab }) && typeof getIcon({ tab }) === 'string' ? (
              <img width="25px" height="25px" src={getIcon({ tab })} alt={`${tab}_icon`} />
            ) : (
              getIcon({ tab })
            )}
            { showTabsTitle && tab }
          </button>
        ))}
      </div>
      {/* eslint-disable-next-line max-len */}
      <PopUpModal popUpClassName={popUpClassName} displayPopUpModal={displayPopUpModal} popUpModalWord={popUpModalWord} setDisplayPopUpModal={setDisplayPopUpModal} />
      <div className={contentClassName || ''}>
        {activeTab === 'Guidance' && <Guidance action={action ? action : alternativeAction} text={content.guidance} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Clarification' && <Clarification action={action ? action : alternativeAction} text={content.additionalClarifications} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Ramadan' && <Ramadan action={action ? action : alternativeAction} text={content.ramadanClarifications} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Marriage' && <Marriage action={action ? action : alternativeAction} text={content.maritalClarifications} showInnerTitle={showInnerTitle} />}
      </div>
    </div>
  );
};

Hidayah.propTypes = {
  content: PropTypes.object.isRequired,
  action: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  tabClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  showTitle: PropTypes.bool,
  showTabsTitle: PropTypes.bool,
  showTabsIcons: PropTypes.bool,
  showInnerTitle: PropTypes.bool,
  guidanceIcon: PropTypes.oneOfType([
    PropTypes.string, // for image source
    PropTypes.element // for font awesome icon or other React elements
  ]),
  clarificationIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  ramadanIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  marriageIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Hidayah;
