// import markdownContent from '@hanafi/en/1_indetermined_ruling_on_initial_bleeding.md';

const HtmlComponent = ({ htmlString }) => <div dangerouslySetInnerHTML={{ __html: htmlString }} />;

import { markdownContent } from '@al-mabsut/muslimah';
export const Ruling1 = () => (
  <div>
    <HtmlComponent htmlString={markdownContent.html} />
  </div>
);
