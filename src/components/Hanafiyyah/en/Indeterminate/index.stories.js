import { Indeterminate } from '@components/Hanafiyyah/en/Indeterminate';

export default {
  title: 'Indeterminate',
  component: Indeterminate,
  argTypes: {
    scenario: {
      options: ['subsequent-bleedings', 'initial-bleeding', 'present-cycle'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => (<Indeterminate {...args} />);

export const Default = Template.bind({});
Default.args = {
  scenario: 'subsequent-bleedings',
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
  settingsClassName: 'testSettings',
  showTitle: true,
  showTabsTitle: true,
  showTabsIcons: true,
  showInnerTitle: true,
  guidanceIcon: <img width="25px" height="25px" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png" />,
  clarificationIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png',
  ramadanIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png',
  marriageIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/asterisk-icon.png',
  settingsIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/setting-icon.png',
  closeIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png'
};

export const overrideAction = Template.bind({});
overrideAction.args = Default.args;
overrideAction.argTypes = {
  action: { action: 'action' }
};
