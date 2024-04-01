/* eslint-disable react/jsx-no-bind */
import terminologies from './terminologies.json';
import { Fragment } from 'preact';

export const prepareClickableWords = ({ text, action }) => {
  const words = text.split(' ');
  const regexCharsToRemove = /[:.,()]/g;

  return words.map((word, index) => {
    const isClickable = terminologies[word.toLowerCase().replaceAll(regexCharsToRemove, '')]?.clarification?.en || false;
    const specialChars = isClickable ? word.match(regexCharsToRemove) : null;
    const specialCharPosition = (specialChars && specialChars[0]) ? word.indexOf(specialChars[0]) : null;
    const wordWithPostfix = isClickable ? `${word.replaceAll(regexCharsToRemove, '')} (${isClickable}) ` : word;

    if ( word.includes('http') ) {
      // eslint-disable-next-line react/jsx-no-target-blank
      return <a href={word} target="_blank">{word}</a>;
    }

    return isClickable ? (
      <>
        {specialCharPosition == 0 ? `${specialChars[0]} ` : ''}
        <span key={`clickable-${word}-${index}`} style={{ color: '#f00', cursor: 'pointer' }} onClick={() => action({ word: word.replaceAll(regexCharsToRemove, '') })}>
          {wordWithPostfix}
        </span>
        {specialCharPosition ? `${specialChars[0]} ` : ''}
      </>
    ) : (`${word} `);
  });
};

const arrayToHtml = (arr) => {
  // Helper function to convert an inner array to an HTML string
  // If the list is number list just hide the marker ( as the text already includes the number )
  const innerArrayToHtml = (innerArr) => (<ul style={typeof(innerArr[0]?.props?.children[0]) === 'string' && innerArr[0]?.props.children[0].trim().match(/^( ?\d\.)/) ? { listStyle: 'none' } : {}}>
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
