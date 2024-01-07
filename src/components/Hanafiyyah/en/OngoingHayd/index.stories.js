import { OngoingHayd } from '@components/Hanafiyyah/en/OngoingHayd';

export default {
  title: 'OngoingHayd',
  component: OngoingHayd
};

const Template = (args) => (<OngoingHayd {...args} />);

export const Default = Template.bind({});
Default.args = { scenario: 'until-habit' };
