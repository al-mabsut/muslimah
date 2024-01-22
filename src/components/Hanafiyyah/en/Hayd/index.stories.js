import { Hayd } from '@components/Hanafiyyah/en/Hayd';

export default {
  title: 'Hayd',
  component: Hayd,
  argTypes: {
    background: { control: 'color' }
  }
};

const Template = (args) => (<Hayd {...args} />);

export const Default = Template.bind({});
Default.args = {
  background: '#fff'
};
