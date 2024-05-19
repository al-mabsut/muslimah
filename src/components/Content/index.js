/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import terminologies from './terminologies.json';
import { Fragment } from 'preact';
import { LEVELS, ORDERS } from '@utils/constants';
import style from './style.module.css';

const regexCharsToRemove = /[:.,()]/g;

const shouldDisplayExplanation = ({ userLevel, wordLevel }) => {
  const userLevelIndex = LEVELS.indexOf(userLevel);
  const wordLevelIndex = LEVELS.indexOf(wordLevel);
  return userLevelIndex < wordLevelIndex;
};

const handleTerminologyWord = ({ word, settings, isClickable: explanation }) => {
  const selectedOrderIndex = ORDERS.indexOf(settings.order);
  const wordLevel = terminologies[word.toLowerCase().replace(regexCharsToRemove, '')].level;
  const userLevel = settings.level;
  switch (selectedOrderIndex) {
  case 0:
    return `${word.replace(regexCharsToRemove, '')} ${ shouldDisplayExplanation({ userLevel, wordLevel }) ? `(${explanation})` : ''} `;
  case 1:
    return `${explanation} ${ shouldDisplayExplanation({ userLevel, wordLevel }) ? `(${word.replace(regexCharsToRemove, '')})` : ''} `;
  default:
    console.error('Invalid selected order!', settings.order);
  }
};

export const prepareClickableWords = ({ text, settings, action, terminologyClassName }) => {
  const words = text.split(' ');

  return words.map((word, index) => {
    const isClickable = terminologies[word.toLowerCase().replace(regexCharsToRemove, '')]?.clarification?.en || false;
    const specialChars = isClickable ? word.match(regexCharsToRemove) : null;
    const specialCharPosition = (specialChars && specialChars[0]) ? word.indexOf(specialChars[0]) : null;
    const wordWithPostfix = isClickable ? handleTerminologyWord({ word, settings, isClickable }) : word;

    if ( word.includes('http') ) {
      // eslint-disable-next-line react/jsx-no-target-blank
      return <a href={word} target="_blank">{word}</a>;
    }

    return isClickable ? (
      <>
        {specialCharPosition == 0 ? `${specialChars[0]} ` : ''}
        <span key={`clickable-${word}-${index}`} className={terminologyClassName || style.terminology} onClick={() => action({ word: word.replace(regexCharsToRemove, '') })}>
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
  // We don't want the users to override this style
  const innerArrayToHtml = (innerArr) => (<ul style={typeof(innerArr[0]?.props?.children[0]) === 'string' && innerArr[0]?.props.children[0].trim().match(/^( ?\d\.)/) ? { listStyle: 'none' } : {}}>
    {innerArr.map(item => (Array.isArray(item) ? innerArrayToHtml(item) : item ))}
  </ul>);

  // Convert the main array to an HTML string
  const mainHtml = <ul>{arr.map(item => (Array.isArray(item) ? innerArrayToHtml(item) : item ))}</ul>;

  return mainHtml;
};

export const prepareTextElements = ({ text, title, settings, action, terminologyClassName }) => {
  const elements = [];
  const currentDepths = [];
  const depthIndexMap = {};
  let prevDepth = 0;

  for (let i = 0; i < text.length; i++) {
    const t = text[i];
    const depth = (t.match(/in:/g) || []).length;

    const nestedItem = <li key={`prepare_text_${title}_nested_${i}`}>{prepareClickableWords({ text: t.replace(/in:/g, ''), settings, action, terminologyClassName })}</li>;

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

const Content = ({ heading, text, action, showInnerTitle, settings, terminologyClassName }) => (
  <div>
    { showInnerTitle && <h3>{heading}</h3>}
    { text && prepareTextElements({ text, title: heading, settings, terminologyClassName, action: ({ word }) => {
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

export const Guidance = ({ ...props }) => <Content heading="Guidance" {...props} />;

export const Clarification = ({ ...props }) => <Content heading="Clarification" {...props} />;

export const Ramadan = ({ ...props }) => <Content heading="Ramadan" {...props} />;

export const Marriage = ({ ...props }) => <Content heading="Marriage" {...props} />;
