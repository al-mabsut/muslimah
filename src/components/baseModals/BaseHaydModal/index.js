import Modal from '../../Modal/index';
import DetailsIcon from '../../../assets/details.svg';
import MarriageeIcon from '../../../assets/marriage.png';
import RamadanIcon from '../../../assets/ramadan.png';
import { mdStrToObj, iconNameMapping } from '../../../utils/modalHelpers';
import { useMemo } from 'react';

const iconMapping = {
  Guidance: DetailsIcon,
  'Additional Clarifications': DetailsIcon,
  'Ramadan Clarifications': RamadanIcon,
  'Marital Clarifications': MarriageeIcon
};

const BaseHaydModal = ({ contentStore, contentStoreKey }) => {
  const { haydContent, tabsKeys, icons } = useMemo(() => {
    const haydContent = mdStrToObj(contentStore[contentStoreKey]);
    const tabsKeys = Object.keys(haydContent);
    const icons = tabsKeys.reduce((arr, key) => {
      arr.push(iconMapping[iconNameMapping[key]]);
      return arr;
    }, []);
    return { haydContent, tabsKeys, icons };
  }, [contentStore, contentStoreKey]);

  return (
    <Modal tabsIcons={icons} tabsContentKeys={tabsKeys} tabsContent={haydContent} />
  );
};
 
export default BaseHaydModal;
