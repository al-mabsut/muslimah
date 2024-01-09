import { Title, Clarification, Guidance, Marriage, Ramadan } from '@components/Content';

export const Hidayah = ({ content, style, children }) => (
  <div>
    <div>
      <Title text={content.title} />
      <Guidance text={content.guidance} />
      <Clarification text={content.additionalClarifications} />
      <Ramadan text={content.ramadanClarifications} />
      <Marriage text={content.maritalClarifications} />
    </div>
    {children}
  </div>
);
