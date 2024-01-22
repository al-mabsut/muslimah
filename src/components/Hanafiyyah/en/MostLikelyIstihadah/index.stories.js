import { MostLikelyIstihadah } from '@components/Hanafiyyah/en/MostLikelyIstihadah';

export default {
  title: 'MostLikelyIstihadah',
  component: MostLikelyIstihadah,
  argTypes: {
    background: { control: 'color' }
  }
};

const Template = (args) => (<MostLikelyIstihadah {...args} />);

export const Default = Template.bind({});
Default.args = {
  background: '#fff'
};
