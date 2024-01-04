import path from 'path';
import fs from 'fs';
import { h } from 'preact';
import { marked } from 'marked';

const markdownPlugin = () => ({
  name: 'our-custom-markdown-plugin',
  load(id) {
    if (id.endsWith('.md')) {
      const filePath = path.resolve(id);
      const markdown = fs.readFileSync(filePath, 'utf-8');

      // Convert Markdown to HTML
      const renderedMarkdown = marked(markdown);

      // Export the transformed content
      return `export default ${JSON.stringify(renderedMarkdown)};`;
    }
    return null;
  }
});

export default markdownPlugin;
