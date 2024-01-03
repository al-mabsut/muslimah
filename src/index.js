// import Markdown from 'react-markdown';
import { h } from 'preact';
import markdownContent from '@hanafi/en/1_indetermined_ruling_on_initial_bleeding.md';
import { Muslimah } from '@components/Muslimah';
// import { Ruling1 } from '@components/Ruling1';

// console.log('markdownContent', markdownContent);
// const Ruling1 = <Markdown>{markdownContent}</Markdown>;

// const HtmlComponent = ({ htmlString }) => ;

const Ruling1 = () => <div dangerouslySetInnerHTML={{ __html: markdownContent.html }} />;
// {/* <HtmlComponent htmlString={markdownContent.html} />; */}

export { Muslimah, Ruling1, markdownContent };
