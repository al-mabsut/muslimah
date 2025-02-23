import fs from 'fs';
import path from 'path';
import { markdownToJson } from '../plugins/markdown.js';

const CONTENT_DIR = path.resolve('contents');
const OUTPUT_DIR = path.resolve('src/contents');

/**
 * Recursively processes Markdown files and writes TypeScript files.
 * @param {string} inputDir - The source directory.
 * @param {string} outputDir - The destination directory.
 */
function processMarkdownFiles(inputDir, outputDir) {
  fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.md', '.ts'));
    const stats = fs.statSync(inputPath);

    if (stats.isDirectory()) {
      // Create corresponding output directory
      fs.mkdirSync(outputPath, { recursive: true });
      processMarkdownFiles(inputPath, outputPath);
    } else if (file.endsWith('.md')) {
      // Read and convert markdown file
      const mdContent = fs.readFileSync(inputPath, 'utf-8');
      const jsonData = markdownToJson(mdContent);

      // Wrap JSON data into TypeScript declaration
      const tsContent = `export default ${jsonData};`;

      // Save as TypeScript file
      fs.writeFileSync(outputPath, tsContent);
      console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
    }
  });
}

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Start processing
processMarkdownFiles(CONTENT_DIR, OUTPUT_DIR);

console.log('🎉 Markdown conversion to TypeScript completed!');
