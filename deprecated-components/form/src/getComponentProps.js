const fieldPropWhiteList = [
  'rules',
  'effects',
  'setValueFormatter',
  'getValueFormatter',
  'fieldArrayName', // belong to which FeildArray
  'fieldArrayKey',
  'valueName',
];

const getComponentProps = props => {
  const keys = Object.keys(props);
  const componentProps = {};
  keys.forEach(prop => {
    if (fieldPropWhiteList.indexOf(prop) === -1) {
      componentProps[prop] = props[prop];
    }
  });
  return componentProps;
};

export default getComponentProps;
