export const prepareTextElements = (text) => {
  const elements = [];
  let nestedList = null;

  for (let i = 0; i < text.length; i++) {
    const t = text[i];

    // If we have a list inside our main list
    if (t.startsWith('in:')) {
      if (!nestedList) {
        // Start a new nested list
        nestedList = [<li key={i}>{t.replaceAll('in:', '')}</li>];
      }
      else {
        // Continue the existing nested list
        nestedList.push(<li key={i}>{t.replaceAll('in:', '')}</li>);
      }
    }
    else {
      // If we have an open nested list, close it before adding the current item
      if (nestedList) {
        elements.push(<ul key={i}>{nestedList}</ul>);
        nestedList = null;
      }

      elements.push(<li key={i}>{t}</li>);
    }
  }

  // If there's an open nested list, close it at the end
  if (nestedList) {
    elements.push(<ul key={text.length}>{nestedList}</ul>);
  }

  return <ul>{elements}</ul>;
};

const Content = ({ icon, heading, text }) => (
  <div>
    <div>{icon}</div>
    <h2>{heading}</h2>
    { text && prepareTextElements(text) }
  </div>
);

export const Title = ({ text }) => <Content icon="Title_icon_here" heading={text} />;

export const Guidance = ({ text }) => <Content icon="Guidance_icon_here" heading="Guidance" text={text} />;

export const Clarification = ({ text }) => <Content icon="Clarification_icon_here" heading="Clarification" text={text} />;

export const Ramadan = ({ text }) => <Content icon="Ramadan_icon_here" heading="Ramadan" text={text} />;

export const Marriage = ({ text }) => <Content icon="Marriage_icon_here" heading="Marriage" text={text} />;
