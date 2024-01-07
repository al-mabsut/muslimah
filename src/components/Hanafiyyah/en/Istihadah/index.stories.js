import { Istihadah } from '@components/Hanafiyyah/en/Istihadah';

export default {
  title: 'Istihadah',
  component: Istihadah
};

const Template = (args) => (<Istihadah {...args} />);

export const Default = Template.bind({});
Default.args = { };
