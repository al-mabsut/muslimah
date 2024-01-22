/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState } from 'preact/hooks';

export const Hidayah = ({ content, background, style }) => {
  const [activeTab, setActiveTab] = useState('Guidance');
  const tabs = useMemo(() => (['Guidance', 'Clarification', 'Ramadan', 'Marriage']), []);

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div style={{ background: background || '#fff', width: '100%', height: '93vh', ...style }}>
      <Title text={content.title} />
      <div>
        {tabs && tabs.map((tab) => (
          <button onClick={() => handleTabClick(tab)} disabled={activeTab === tab}>{tab}</button>
        ))}
      </div>
      <div>
        {activeTab === 'Guidance' && <Guidance text={content.guidance} />}
        {activeTab === 'Clarification' && <Clarification text={content.additionalClarifications} />}
        {activeTab === 'Ramadan' && <Ramadan text={content.ramadanClarifications} />}
        {activeTab === 'Marriage' && <Marriage text={content.maritalClarifications} />}
      </div>
    </div>
  );
};
