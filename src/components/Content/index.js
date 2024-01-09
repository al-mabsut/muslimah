import ReactMarkdown from 'react-markdown';

const Content = ({ icon, heading, text }) => (
  <div>
    <div>{icon}</div>
    <h2>{heading}</h2>
    <ReactMarkdown>
      {text}
    </ReactMarkdown>
  </div>
);

export const Title = ({ text }) => <Content icon="Title_icon_here" heading="Title" text={text} />;

export const Guidance = ({ text }) => <Content icon="Guidance_icon_here" heading="Guidance" text={text} />;

export const Clarification = ({ text }) => <Content icon="Clarification_icon_here" heading="Clarification" text={text} />;

export const Ramadan = ({ text }) => <Content icon="Ramadan_icon_here" heading="Ramadan" text={text} />;

export const Marriage = ({ text }) => <Content icon="Marriage_icon_here" heading="Marriage" text={text} />;
