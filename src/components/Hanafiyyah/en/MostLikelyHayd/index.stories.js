import { MostLikelyHayd } from '@components/Hanafiyyah/en/MostLikelyHayd';

export default {
  title: 'MostLikelyHayd',
  component: MostLikelyHayd,
  argTypes: {
    background: { control: 'color' }
  }
};

const Template = (args) => (<MostLikelyHayd {...args} />);

export const Default = Template.bind({});
Default.args = {
  background: '#fff'
};
