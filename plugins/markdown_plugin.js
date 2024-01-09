import path from 'path';
import fs from 'fs';
import { h } from 'preact';
// import { marked } from 'marked';

const parser = (md) => {
  const startToken = '# Ruling:';
  const headingToken = '##';
  const lines = md.split('\n');
  const jsonResult = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith(startToken)) {
      const title = line.replace(`${startToken} `, '');
      jsonResult.title = `# ${title}`;
    }

    if (line.startsWith(headingToken)) {
      const subtitle = line.replace(`${headingToken} `, '');
      jsonResult[subtitle] = '';
    }
    else if (line.startsWith('-')) {
      const content = line.replace('-', '').trim();
      const keys = Object.keys(jsonResult);
      const lastKey = keys[keys.length - 1];
      jsonResult[lastKey] += `- ${content} \n`;
    }
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
