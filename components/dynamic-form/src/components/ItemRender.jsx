import FildBinder from './FildBinder'
import { Field } from '@ice/form'
export default function ItemRender({ data, context }) {
  let { components = {}, status: globalStatus } = context
  let { name, type, label, rules, props, tips, style, visible = true, effects, status } = data
  const Tips = <div className="icedesign_form_tips" dangerouslySetInnerHTML={{ __html: tips }} />
  if(!components[type])return null;
  return <Field
    effects={effects}
    visible={visible}
    style={style}
    key={name}
    label={label}
    rules={rules}
    tips={Tips}
    name={name}
  >
    <FildBinder item={components[type]} status={status || globalStatus} {...props} />
  </Field>
}