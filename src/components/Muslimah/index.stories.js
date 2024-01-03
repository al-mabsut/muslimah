import { Muslimah } from './index';
import { contentStore } from '@al-mabsut/muslimah';
import Markdown from 'react-markdown';

// This default export determines where your story goes in the story list
export default {
  title: 'Muslimah',
  component: Muslimah
};

const content = contentStore['1_indetermined_ruling_on_initial_bleeding.md'];
const Template = (args) => (<Muslimah {...args} >
  <Markdown>{content}</Markdown>
</Muslimah>);

export const Default = Template.bind({});
// Default.args = { /* Arguments you want to pass to the component */ };
