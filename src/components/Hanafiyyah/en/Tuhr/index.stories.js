import { Tuhr } from '@components/Hanafiyyah/en/Tuhr';

export default {
  title: 'Tuhr',
  component: Tuhr,
  argTypes: {
    background: { control: 'color' }
  }
};

const Template = (args) => (<Tuhr {...args} />);

export const Default = Template.bind({});
Default.args = {
  scenario: 'concludes-excess-10-day-bleeding',
  background: '#fff'
};
