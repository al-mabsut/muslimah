/* eslint-disable dot-notation */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan, prepareTextElements } from '@components/Content';
import { useMemo, useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';
import terminologies from '@components/Content/terminologies.json';
import { Fragment } from 'preact';
import { LEVELS, ORDERS, DEFAULT_SETTINGS, LEVELS_CLARIFICATION, SETTINGS_EXAMPLE_TEXT } from '@utils/constants';
import useLocalStorage from '@hooks/useLocalStorage';
import mainStyle from './style.module.css';

const PopUpModal = ({ popUpClassName, displayPopUpModal, setDisplayPopUpModal, popUpModalWord, closeButtonClassName, closeIcon }) => {
  if ( !displayPopUpModal ) {
    return <></>;
  }

  return (<div className={popUpClassName || mainStyle.popUpModal}>
    <h3>{popUpModalWord} {`(${terminologies[popUpModalWord.toLowerCase()].clarification.en})`}</h3>
    <p>Description/Explanation coming soon inshallah</p>
    <button className={closeButtonClassName || mainStyle.closeModalButton} onClick={() => setDisplayPopUpModal(false)}>
      <img src={closeIcon} alt="close" />
    </button>
  </div>);
};

const Levels = ({ level, setLevel, RadioBoxComponent, radioBoxContainerClassName }) => (<div className={radioBoxContainerClassName || ''}>
  { LEVELS && LEVELS.map((lvl) => (
    RadioBoxComponent ?
      <RadioBoxComponent
        id={lvl}
        value={lvl}
        checked={lvl === level}
        action={() => setLevel(lvl)}
        key={`settings_modal_levels_${lvl}`}
      /> :
      <div key={`settings_modal_levels_${lvl}`} className={mainStyle.radioBoxItem}>
        <input type="radio" id={lvl} name={lvl} value={lvl} checked={lvl === level} onChange={() => setLevel(lvl)} />
        <label key={lvl} for={lvl}>{lvl}</label>
      </div>
  ))}
  <ul><li>{LEVELS_CLARIFICATION[level]}</li></ul>
</div>);

const Ordering = ({ order, setOrder, RadioBoxComponent, radioBoxContainerClassName }) => (<div className={radioBoxContainerClassName || ''}>
  { ORDERS && ORDERS.map((ordr) => (
    RadioBoxComponent ?
      <RadioBoxComponent
        id={ordr}
        value={ordr}
        checked={ordr === order}
        action={() => setOrder(ordr)}
        key={`settings_modal_levels_${ordr}`}
      /> :
      <div key={`settings_modal_levels_${ordr}`} className={mainStyle.radioBoxItem}>
        <input type="radio" id={ordr} name={ordr} value={ordr} checked={ordr === order} onChange={() => setOrder(ordr)} />
        <label key={ordr} for={ordr}>{ordr}</label>
      </div>
  ))}
</div>);

const Example = ({ settings, terminologyClassName }) => (
  <div>
    <p>{prepareTextElements({ text: SETTINGS_EXAMPLE_TEXT, settings, action: () => {}, terminologyClassName })}</p>
  </div>
);

const SettingsModal = ({ settings, setSettings, userId, hideModal, settingsModalClassName, closeButtonClassName, closeIcon, RadioBoxComponent, radioBoxContainerClassName, terminologyClassName }) => (<div className={settingsModalClassName || mainStyle.popUpModal}>
  <button className={closeButtonClassName || mainStyle.closeModalButton} onClick={hideModal}>
    <img src={closeIcon} alt="close" />
  </button>
  <h3>Settings</h3>
  <h4>Levels:</h4>
  <Levels level={settings[userId].level} RadioBoxComponent={RadioBoxComponent} radioBoxContainerClassName={radioBoxContainerClassName} setLevel={(newLevel) => setSettings((old) => {
    old[userId].level = newLevel;
    return { ...old };
  })}
  />
  <h4>Ordering:</h4>
  <Ordering order={settings[userId].order} RadioBoxComponent={RadioBoxComponent} radioBoxContainerClassName={radioBoxContainerClassName} setOrder={(newOrder) => setSettings((old) => {
    old[userId].order = newOrder;
    return { ...old };
  })}
  />
  <h4>Example:</h4>
  <Example settings={settings[userId]} terminologyClassName={terminologyClassName} />
</div>);

const Settings = ({ settings, setSettings, userId, settingsClassName, settingsModalClassName, settingsOpenButtonClassName, closeButtonClassName, settingsIcon, closeIcon, RadioBoxComponent, radioBoxContainerClassName, terminologyClassName }) => {
  const [displaySettingsModal, setDisplaySettingsModal] = useState();

  return (
    <div className={settingsClassName || mainStyle.settings}>
      <button className={settingsOpenButtonClassName || mainStyle.settingsButton} onClick={() => setDisplaySettingsModal((old) => !old)}>
        { typeof(settingsIcon) === 'string' ?
          <img src={settingsIcon} alt={`settings_icon`} /> :
          settingsIcon }
      </button>
      { displaySettingsModal && <SettingsModal settings={settings} setSettings={setSettings} userId={userId} closeButtonClassName={closeButtonClassName} closeIcon={closeIcon} radioBoxContainerClassName={radioBoxContainerClassName} terminologyClassName={terminologyClassName} hideModal={() => setDisplaySettingsModal(false)} settingsModalClassName={settingsModalClassName} RadioBoxComponent={RadioBoxComponent} /> }
    </div>
  );
};

const Hidayah = ({ content, userId, action, style, className, tabsContainerClassName, tabClassName, contentClassName, terminologyClassName, closeButtonClassName,
  popUpClassName, settingsClassName, settingsModalClassName, settingsOpenButtonClassName, radioBoxContainerClassName, showTabsIcons=true, showTabsTitle=true, showTitle=true, showInnerTitle=true,
  guidanceIcon, clarificationIcon, ramadanIcon, marriageIcon, settingsIcon, closeIcon, RadioBoxComponent } = {}) => {
  const [activeTab, setActiveTab] = useState('Guidance');
  const [displayPopUpModal, setDisplayPopUpModal] = useState();
  const [popUpModalWord, setPopUpModalTerm] = useState();
  const [settings, setSettings] = useLocalStorage('muslimah_settings', {
    [userId]: { ...DEFAULT_SETTINGS }
  });
  const tabs = useMemo(() => (['Guidance', 'Clarification', 'Ramadan', 'Marriage']), []);

  useEffect(() => {
    // Keep tracking the new userIds
    if ( !settings[userId] || settings[userId]?.order === 'prayer' ) {
      // Since the last ordering item (prayer) has been removed, users who had previously selected it may be affected, thus necessitating a reset for them.
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
      <Settings settings={settings} setSettings={setSettings} userId={userId} settingsClassName={settingsClassName} settingsModalClassName={settingsModalClassName} settingsOpenButtonClassName={settingsOpenButtonClassName} RadioBoxComponent={RadioBoxComponent}
        closeButtonClassName={closeButtonClassName} settingsIcon={settingsIcon} closeIcon={closeIcon} radioBoxContainerClassName={radioBoxContainerClassName} terminologyClassName={terminologyClassName}
      />
      { showTitle && <Title text={content.title} />}
      <div className={tabsContainerClassName || ''}>
        {tabs && tabs.map((tab) => (
          <button className={tabClassName || mainStyle.tab} onClick={() => handleTabClick(tab)} disabled={activeTab === tab}>
            { showTabsIcons && getIcon({ tab }) && typeof getIcon({ tab }) === 'string' ? (
              <img src={getIcon({ tab })} alt={`${tab}_icon`} />
            ) : (
              getIcon({ tab })
            )}
            { showTabsTitle && tab }
          </button>
        ))}
      </div>
      {/* eslint-disable-next-line max-len */}
      <PopUpModal popUpClassName={popUpClassName} displayPopUpModal={displayPopUpModal} popUpModalWord={popUpModalWord} setDisplayPopUpModal={setDisplayPopUpModal} closeButtonClassName={closeButtonClassName} closeIcon={closeIcon} />
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
  settingsOpenButtonClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  terminologyClassName: PropTypes.string,
  radioBoxContainerClassName: PropTypes.string,
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
  ]),
  closeIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  RadioBoxComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ])
};

export default Hidayah;
