import HaydModal from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Hanafi/EN/Hayd',
  component: HaydModal
};

const Template = (args) => <HaydModal {...args} />;

export const Default = Template.bind({});
// Default.args = { /* Arguments you want to pass to the component */ };
