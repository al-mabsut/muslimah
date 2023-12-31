import { Muslimah } from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Muslimah',
  component: Muslimah
};

const Template = (args) => <Muslimah {...args} />;

export const Default = Template.bind({});
// Default.args = { /* Arguments you want to pass to the component */ };
