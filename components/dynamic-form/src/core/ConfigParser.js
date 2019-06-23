export function EffectsInser({ data, context }) {
  const { effects } = context;
  const { name } = data;
  const [linkage] = effects.filter(v => {
    const { event = {} } = v;
    return event.origin === name;
  });
  if (linkage) {
    data.effects = linkage.options;
  }
  return data;
}

export function Effects({ data }) {
  const { effects, name } = data;
  if (Array.isArray(effects)) {
    // 应当先执行一遍 effects
    data.effects = {
      handler: (formCore) => {
        const thisValue = formCore.getFieldValue(name);
        effects.map(({ conditions, actions }) => {
          const allChecked = conditions.every(({ symbol, value, type }) => {
            let checkValue;
            if (type !== 'number') {
              checkValue = new Function(`"use strict";return "${thisValue}" ${symbol} "${value}"`)();
            } else {
              // number 类型
              checkValue = isNaN(+thisValue)
                ? false
                : new Function(`"use strict";return ${+thisValue} ${symbol} ${+value}`)();
            }
            return checkValue;
          });
          if (allChecked) {
            actions.map(({ target, type, value }) => {
              switch (type) {
                case 'setValue':
                  formCore.setFieldValue(name, value);
                  break;
                default:
                  formCore.setFieldProps(target, {
                    visible: type === 'show',
                  });
                  break;
              }
            });
          }
        });
      },
    };
  }
  return data;
}
