/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';
import terminologies from '@components/Content/terminologies.json';
import { Fragment } from 'preact';
import { LEVELS, ORDERS, DEFAULT_SETTINGS } from '@utils/constants';
import useLocalStorage from '@hooks/useLocalStorage';
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

const Ordering = ({ order, setOrder }) => (<div>
  { ORDERS && ORDERS.map((ordr) => (
    <>
      <input type="radio" id={ordr} name={ordr} value={ordr} checked={ordr === order} onChange={() => setOrder(ordr)} />
      <label key={ordr} for={ordr}>{ordr}</label>
    </>
  ))}
</div>);

const SettingsModal = ({ settings, setSettings, userId, hideModal, settingsModalClassName }) => (<div className={settingsModalClassName || style.popUpModal}>
  <button className={style.closeModalButton} onClick={hideModal}>X</button>
  <h3>Settings</h3>
  <h4>Levels:</h4>
  <Levels level={settings[userId].level} setLevel={(newLevel) => setSettings((old) => {
    old[userId].level = newLevel;
    return { ...old };
  })}
  />
  <h4>Ordering:</h4>
  <Ordering order={settings[userId].order} setOrder={(newOrder) => setSettings((old) => {
    old[userId].order = newOrder;
    return { ...old };
  })}
  />
</div>);

const Settings = ({ settings, setSettings, userId, settingsClassName, settingsModalClassName, settingsIcon }) => {
  const [displaySettingsModal, setDisplaySettingsModal] = useState();

  return (
    <div className={settingsClassName || style.settings}>
      <button className={style.settingsButton} onClick={() => setDisplaySettingsModal((old) => !old)}>
        { typeof(settingsIcon) === 'string' ?
          <img width="25px" height="25px" src={settingsIcon} alt={`settings_icon`} /> :
          settingsIcon }
      </button>
      { displaySettingsModal && <SettingsModal settings={settings} setSettings={setSettings} userId={userId} hideModal={() => setDisplaySettingsModal(false)} settingsModalClassName={settingsModalClassName} /> }
    </div>
  );
};

const Hidayah = ({ content, userId, action, style, className, tabsContainerClassName, tabClassName, contentClassName, terminologyClassName,
  popUpClassName, settingsClassName, settingsModalClassName, showTabsIcons=true, showTabsTitle=true, showTitle=true, showInnerTitle=true,
  guidanceIcon, clarificationIcon, ramadanIcon, marriageIcon, settingsIcon } = {}) => {
  const [activeTab, setActiveTab] = useState('Guidance');
  const [displayPopUpModal, setDisplayPopUpModal] = useState();
  const [popUpModalWord, setPopUpModalTerm] = useState();
  const [settings, setSettings] = useLocalStorage('muslimah_settings', {
    [userId]: { ...DEFAULT_SETTINGS }
  });
  const tabs = useMemo(() => (['Guidance', 'Clarification', 'Ramadan', 'Marriage']), []);

  useEffect(() => {
    // Keep tracking the new userIds
    if ( !settings[userId] ) {
      setSettings((old) => {
        old[userId] = { ...DEFAULT_SETTINGS };
        return { ...old };
      });
    }
  }, [userId]);

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
      <Settings settings={settings} setSettings={setSettings} userId={userId} settingsClassName={settingsClassName} settingsModalClassName={settingsModalClassName} settingsIcon={settingsIcon} />
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
        {activeTab === 'Guidance' && <Guidance action={action ? action : alternativeAction} text={content.guidance} showInnerTitle={showInnerTitle} settings={settings[userId] || DEFAULT_SETTINGS} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Clarification' && <Clarification action={action ? action : alternativeAction} text={content.additionalClarifications} showInnerTitle={showInnerTitle} settings={settings[userId] || DEFAULT_SETTINGS} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Ramadan' && <Ramadan action={action ? action : alternativeAction} text={content.ramadanClarifications} showInnerTitle={showInnerTitle} settings={settings[userId] || DEFAULT_SETTINGS} terminologyClassName={terminologyClassName} />}
        {activeTab === 'Marriage' && <Marriage action={action ? action : alternativeAction} text={content.maritalClarifications} showInnerTitle={showInnerTitle} settings={settings[userId] || DEFAULT_SETTINGS} terminologyClassName={terminologyClassName} />}
      </div>
    </div>
  );
};

Hidayah.propTypes = {
  content: PropTypes.object.isRequired,
  userId: PropTypes.string,
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
