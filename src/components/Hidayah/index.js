/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState } from 'preact/hooks';
import PropTypes from 'prop-types';

const Hidayah = ({ content, action, style, className, tabsContainerClassName, tabClassName, contentClassName,
  showTabsIcons=true, showTabsTitle=true, showTitle=true, showInnerTitle=true, guidanceIcon,
  clarificationIcon, ramadanIcon, marriageIcon } = {}) => {
  const [activeTab, setActiveTab] = useState('Guidance');
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
      <div className={contentClassName || ''}>
        {activeTab === 'Guidance' && <Guidance action={action} text={content.guidance} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Clarification' && <Clarification action={action} text={content.additionalClarifications} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Ramadan' && <Ramadan action={action} text={content.ramadanClarifications} showInnerTitle={showInnerTitle} />}
        {activeTab === 'Marriage' && <Marriage action={action} text={content.maritalClarifications} showInnerTitle={showInnerTitle} />}
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
