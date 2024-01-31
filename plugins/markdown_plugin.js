import path from 'path';
import fs from 'fs';
import { h } from 'preact';
// import { marked } from 'marked';

/*
  **Inputs:**
    - `md` (string): A Markdown file represented as a string.

  **Markdown Syntax Requirements:**
    - The title should be formatted as `# Ruling: our Title can be here` ( Ensure there is a space after `# Ruling` )
    - Every paragraph must be placed after an h2 heading (`##`). h2 serves as the key for the paragraph content
    - Inner paragraph (i.e '  - some text here') must contain two spaces before `-`
  
  **Output:**
    A JSON object with the following structure:
    {
      title: 'our Title can be here',
      'h2' : [
        'normal paragraph',
        'in:paragraph that is in an internal list'
      ],
      'another h2' : [
        'normal paragraph',
        'in:paragraph that is in an internal list'
      ]
    }
*/
export const parser = (md) => {
  if ( !md || typeof(md) !== 'string' ) {
    throw Error('Markdown must be a string!');
  }
  const startToken = '# Ruling:';
  const headingToken = '##';
  const lines = md.split('\n');
  const jsonResult = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith(startToken)) {
      const title = line.replace(`${startToken} `, '').trim();
      jsonResult.title = title;
    }

    if (line.trim().startsWith(headingToken)) {
      const subtitle = line.replace(`${headingToken} `, '').trim();
      jsonResult[subtitle] = [];
    }
    else if (line.match(/^( {2})+( ?-)/)) {
      const numberOfTabs = (line.match(/ {2}/g) || []).length + (line.match(/ -/g) || []).length;
      if (numberOfTabs > 0) {
        const content = line.replace('-', '').trim();
        const keys = Object.keys(jsonResult);
        const lastKey = keys[keys.length - 1];
    
        if (!jsonResult[lastKey]) {
          throw Error('Paragraph must be after an h2 ## title');
        }
    
        // Add 'in:' for each removed tab
        const indentedContent = Array.from({ length: numberOfTabs - 1 }, () => 'in:').join('') + content;
    
        jsonResult[lastKey].push(indentedContent);
      }
    }
    else if (line.trim().startsWith('-')) {
      const content = line.replace('-', '').trim();
      const keys = Object.keys(jsonResult);
      const lastKey = keys[keys.length - 1];
      if ( !jsonResult[lastKey] ) {
        throw Error('Paragraph must be after an h2 ## title');
      }
      jsonResult[lastKey].push(content);
    }
  }

  if ( !jsonResult?.title ) {
    throw Error('Markdown must have a title!');
  }
  return jsonResult;
};

const convertToCamelCase = (str) => str
  .split(' ')
  .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// const convertToHTML = (val) => marked(val).replace(/\n+$/, '');

const markdownPlugin = () => ({
  name: 'our-custom-markdown-plugin',
  load(id) {
    if (id.endsWith('.md')) {
      const filePath = path.resolve(id);
      const markdown = fs.readFileSync(filePath, 'utf-8');

      // Convert Markdown to JSON
      const jsonMarkdown = parser(markdown);
      // Export the transformed content
      return Object.entries(jsonMarkdown)
        .map(([key, value]) => `export const ${convertToCamelCase(key)} = ${JSON.stringify(value)};`)
        .join('\n');
    }
    return null;
  }
});

export default markdownPlugin;
