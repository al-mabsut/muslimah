import { Indeterminate } from '@components/Hanafiyyah/en/Indeterminate';

export default {
  title: 'Indeterminate',
  component: Indeterminate
};

const Template = (args) => (<Indeterminate {...args} />);

export const Default = Template.bind({});
Default.args = { scenario: 'subsequent-bleedings' };
