/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState } from 'preact/hooks';
import PropTypes from 'prop-types';
import terminologies from '@components/Content/terminologies.json';
import { Fragment } from 'preact';
import { LEVELS } from '@utils/constants';
import style from './style.module.css';

const PopUpModal = ({ popUpClassName, displayPopUpModal, setDisplayPopUpModal, popUpModalWord }) => {
  if ( !displayPopUpModal ) {
    return <></>;
  }

  return (<div className={popUpClassName || style.popUpModal}>
    <h3>{popUpModalWord} {`(${terminologies[popUpModalWord.toLowerCase()].clarification.en})`}</h3>
    <p>Description/Explanation coming soon inshallah</p>
    <button className={style.closeModalButton} onClick={() => setDisplayPopUpModal(false)}>X</button>
  </div>);
};

const Levels = ({ level, setLevel }) => (<div>
  { LEVELS && LEVELS.map((lvl) => (
    <>
      <input type="radio" id={lvl} name={lvl} value={lvl} checked={lvl === level} onChange={() => setLevel(lvl)} />
      <label key={lvl} for={lvl}>{lvl}</label>
    </>
  ))}
</div>);

const SettingsModal = ({ settings, setSettings, hideModal, settingsModalClassName }) => (<div className={settingsModalClassName || style.popUpModal}>
  <button className={style.closeModalButton} onClick={hideModal}>X</button>
  <h3>Settings</h3>
  <h4>Levels:</h4>
  <Levels level={settings.level} setLevel={(newLevel) => setSettings((old) => {
    old.level = newLevel;
    return { ...old };
  })}
  />
</div>);

const Settings = ({ settings, setSettings, settingsClassName, settingsModalClassName, settingsIcon }) => {
  const [displaySettingsModal, setDisplaySettingsModal] = useState();

  return (
    <div className={settingsClassName || style.settings}>
      <button className={style.settingsButton} onClick={() => setDisplaySettingsModal((old) => !old)}>
        { typeof(settingsIcon) === 'string' ?
          <img width="25px" height="25px" src={settingsIcon} alt={`settings_icon`} /> :
          settingsIcon }
      </button>
      { displaySettingsModal && <SettingsModal settings={settings} setSettings={setSettings} hideModal={() => setDisplaySettingsModal(false)} settingsModalClassName={settingsModalClassName} /> }
    </div>
  );
};

const Hidayah = ({ content, action, style, className, tabsContainerClassName, tabClassName, contentClassName, terminologyClassName,
  popUpClassName, settingsClassName, settingsModalClassName, showTabsIcons=true, showTabsTitle=true, showTitle=true, showInnerTitle=true,
  guidanceIcon, clarificationIcon, ramadanIcon, marriageIcon, settingsIcon } = {}) => {
  const [activeTab, setActiveTab] = useState('Guidance');
  const [displayPopUpModal, setDisplayPopUpModal] = useState();
  const [popUpModalWord, setPopUpModalTerm] = useState();
  const [settings, setSettings] = useState({
    level: 'newcomer'
  });
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
      <Settings settings={settings} setSettings={setSettings} settingsClassName={settingsClassName} settingsModalClassName={settingsModalClassName} settingsIcon={settingsIcon} />
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
        {activeTab === 'Guidance' && <Guidance action={action ? action : alternativeAction} text={content.guidance} showInnerTitle={showInnerTitle} settings={settings} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Clarification' && <Clarification action={action ? action : alternativeAction} text={content.additionalClarifications} showInnerTitle={showInnerTitle} settings={settings} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Ramadan' && <Ramadan action={action ? action : alternativeAction} text={content.ramadanClarifications} showInnerTitle={showInnerTitle} settings={settings} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Marriage' && <Marriage action={action ? action : alternativeAction} text={content.maritalClarifications} showInnerTitle={showInnerTitle} settings={settings} terminologyClassName={terminologyClassName} />}
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
  popUpClassName: PropTypes.string,
  settingsClassName: PropTypes.string,
  settingsModalClassName: PropTypes.string,
  terminologyClassName: PropTypes.string,
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
  ]),
  settingsIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Hidayah;
