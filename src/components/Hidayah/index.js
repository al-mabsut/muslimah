/* eslint-disable react/jsx-no-bind */
import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';
import { useMemo, useState } from 'preact/hooks';

export const Hidayah = ({ content, background, action, style }) => {
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
        {activeTab === 'Guidance' && <Guidance action={action} text={content.guidance} />}
        {activeTab === 'Clarification' && <Clarification action={action} text={content.additionalClarifications} />}
        {activeTab === 'Ramadan' && <Ramadan action={action} text={content.ramadanClarifications} />}
        {activeTab === 'Marriage' && <Marriage action={action} text={content.maritalClarifications} />}
      </div>
    </div>
  );
};
