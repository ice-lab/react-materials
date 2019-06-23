import classnames from 'classnames';
import { Form } from '@ice/form';

import Godzilla from './core/Godzilla';
import { EffectsInser, Effects } from './core/ConfigParser';

import ButtonsRender from './components/ButtonsRender';
import ItemRender from './components/ItemRender';

export default function DynamicForm(props) {
  const {
    config = [],
    value = {},
    status = 'edit',
    components = {},
    layout = {},
    effects = [],
    buttons = [],
    // events
    onChange = () => { },
    onSubmit,
    onBeforeChange, // ?
    onBeforeSubmit, // ?
    labelStyle = {},
    buttonsStyle = {},
  } = props;

  const Fields = new Godzilla(config, {
    components,
    status,
    effects,
    labelStyle
  }).pipe(EffectsInser)
    .pipe(Effects)
    .end(ItemRender);

  return (
    <Form
      layout={layout}
      initialValues={value}
      // onBeforeChange={onBeforeChange}
      // onBeforeSubmit={onBeforeSubmit}
      onChange={onChange}
      onSubmit={(...arg) => {
        onSubmit && onSubmit.apply(null,arg);
      }}
    >
      {
        formCore => {
          const Buttons = new Godzilla(buttons, {
            components,
            buttonsStyle,
            formCore
          }).end(ButtonsRender);

          return (<>
            {
              Fields
            }
            <div className={classnames('icedesign_form_buttons')}>
              {
                Buttons
              }
            </div>
          </>)
        }
      }
    </Form>
  );
}
