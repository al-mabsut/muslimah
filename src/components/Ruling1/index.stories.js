// import { Ruling1 } from './index';
import { Ruling1 } from '@al-mabsut/muslimah';

// This default export determines where your story goes in the story list
export default {
  title: 'Ruling1',
  component: Ruling1
};

const Template = (args) =>
  (<Ruling1 {...args}>
    STOP
  </Ruling1>);

export const Default = Template.bind({});
// Default.args = { md: };
