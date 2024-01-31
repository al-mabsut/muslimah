/* eslint-disable react/jsx-no-bind */
const wordsExplanationDictionary = {
  waajib: '(necessary)',
  fard: '(obligatory)',
  qadaa: '(makeup)'
};

export const prepareClickableWords = ({ text, action }) => {
  const words = text.split(' ');

  return words.map((word, index) => {
    const isClickable = wordsExplanationDictionary[word.toLowerCase()] || false;
    const wordWithPostfix = isClickable ? `${word} ${isClickable} ` : word;

    return isClickable ? (
      <span key={`clickable-${word}-${index}`} style={{ color: '#f00', cursor: 'pointer' }} onClick={() => action({ word })}>
        {wordWithPostfix}
      </span>
    ) : (`${word} `);
  });
};

const arrayToHtml = (arr) => {
  // Helper function to convert an inner array to an HTML string
  const innerArrayToHtml = (innerArr) => (<ul>
    {innerArr.map(item => (Array.isArray(item) ? innerArrayToHtml(item) : item ))}
  </ul>);

  // Convert the main array to an HTML string
  const mainHtml = <ul>{arr.map(item => (Array.isArray(item) ? innerArrayToHtml(item) : item ))}</ul>;

  return mainHtml;
};

export const prepareTextElements = ({ text, title, action }) => {
  const elements = [];
  const currentDepths = [];
  const depthIndexMap = {};
  let prevDepth = 0;

  for (let i = 0; i < text.length; i++) {
    const t = text[i];
    const depth = (t.match(/in:/g) || []).length;

    const nestedItem = <li key={`prepare_text_${title}_nested_${i}`}>{prepareClickableWords({ text: t.replaceAll('in:', ''), action })}</li>;

    if ( depth < prevDepth ) {
      currentDepths.splice(currentDepths.indexOf(prevDepth), 1);
      delete depthIndexMap[prevDepth];
    }

    if ( depth === 0 ) {
      elements.push(nestedItem);
    }
    else if ( currentDepths.includes(depth) ) {
      depthIndexMap[depth].push(nestedItem);
    }
    else if ( prevDepth !== 0 && depth > prevDepth ) {
      currentDepths.push(depth);
      depthIndexMap[prevDepth].push([nestedItem]);
      depthIndexMap[depth] = depthIndexMap[prevDepth][depthIndexMap[prevDepth].length - 1];
    }
    else {
      currentDepths.push(depth);
      elements.push([nestedItem]);
      depthIndexMap[depth] = elements[elements.length - 1];
    }
    prevDepth = depth;
  }

  return (arrayToHtml(elements));
};

const Content = ({ heading, text, action, showInnerTitle }) => (
  <div>
    { showInnerTitle && <h3>{heading}</h3>}
    { text && prepareTextElements({ text, title: heading, action: ({ word }) => {
      if ( action ) {
        action({ word });
      }
      else {
        {/* eslint-disable-next-line no-console */}
        console.log('word clicked: ', word);
      }
    } }) }
  </div>
);

export const Title = ({ text }) => <h2>{text}</h2>;

export const Guidance = ({ text, action, showIcons, showInnerTitle }) => <Content action={action} heading="Guidance" text={text} showIcons={showIcons} showInnerTitle={showInnerTitle} />;

export const Clarification = ({ text, action, showIcons, showInnerTitle }) => <Content action={action} heading="Clarification" text={text} showIcons={showIcons} showInnerTitle={showInnerTitle} />;

export const Ramadan = ({ text, action, showIcons, showInnerTitle }) => <Content action={action} heading="Ramadan" text={text} showIcons={showIcons} showInnerTitle={showInnerTitle} />;

export const Marriage = ({ text, action, showIcons, showInnerTitle }) => <Content action={action} heading="Marriage" text={text} showIcons={showIcons} showInnerTitle={showInnerTitle} />;
