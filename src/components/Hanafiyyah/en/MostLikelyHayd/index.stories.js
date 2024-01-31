import { MostLikelyHayd } from '@components/Hanafiyyah/en/MostLikelyHayd';

export default {
  title: 'MostLikelyHayd',
  component: MostLikelyHayd,
  argTypes: {
    action: { action: 'action' }
  }
};

const Template = (args) => (<MostLikelyHayd {...args} />);

export const Default = Template.bind({});
Default.args = {
  style: {
    background: '#ddd',
    padding: '5px 10px',
    borderRadius: '5px',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  className: 'testClassName',
  tabsContainerClassName: 'testTabsContainerClassName',
  tabClassName: 'testTabClassName',
  showTitle: true,
  showTabsTitle: true,
  showTabsIcons: true,
  showInnerTitle: true,
  guidanceIcon: <img width="25px" height="25px" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png" />,
  clarificationIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png',
  ramadanIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png',
  marriageIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png'
};
