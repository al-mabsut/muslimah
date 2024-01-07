import { MostLikelyTuhr } from '@components/Hanafiyyah/en/MostLikelyTuhr';

export default {
  title: 'MostLikelyTuhr',
  component: MostLikelyTuhr
};

const Template = (args) => (<MostLikelyTuhr {...args} />);

export const Default = Template.bind({});
Default.args = { scenario: 'before-10-days' };
