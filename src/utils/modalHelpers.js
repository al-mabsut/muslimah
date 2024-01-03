export const mdStrToObjWithTitle = (md) => {
  const lines = md.split('\n');
  const obj = {};
  let currentObj = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
  
    if (line.startsWith('# Ruling:')) {
      const title = line.replace('# Ruling: ', '');
      obj[title] = {};
      currentObj = obj[title];
    }
    else if (line.startsWith('##')) {
      const subtitle = line.replace('## ', '');
      currentObj[subtitle] = [];
    }
    else if (line.startsWith('-')) {
      const content = line.replace('-', '').trim();
      const keys = Object.keys(currentObj);
      const lastKey = keys[keys.length - 1];
      currentObj[lastKey].push(content);
    }
  }
  
  return obj;
};

export const mdStrToObj = (md) => {
  const lines = md.split('\n');
  const currentObj = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
  
    if (line.startsWith('##')) {
      const subtitle = line.replace('## ', '');
      currentObj[subtitle] = [];
    }
    else if (line.startsWith('-')) {
      const content = line.replace('-', '').trim();
      const keys = Object.keys(currentObj);
      const lastKey = keys[keys.length - 1];
      currentObj[lastKey].push(content);
    }
  }
  
  return currentObj;
};

/* Creating a mapping for translating various tab titles in all languages to English so we can easily load the icons */
export const iconNameMapping = {
  Guidance: 'Guidance',
  إرشاد: 'Guidance',
  'Additional Clarifications': 'Additional Clarifications',
  'توضيحات إضافية': 'Additional Clarifications',
  'Ramadan Clarifications': 'Ramadan Clarifications',
  'توضيحات رمضان': 'Ramadan Clarifications',
  'Marital Clarifications': 'Marital Clarifications',
  'توضيحات زوجية': 'Marital Clarifications'
};
