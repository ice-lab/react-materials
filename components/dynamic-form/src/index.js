import React from 'react';
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
    labelStyle = {},
    buttonsStyle = {},
  } = props;

  const Fields = new Godzilla(config, {
    components,
    status,
    effects,
    labelStyle,
  }).pipe(EffectsInser)
    .pipe(Effects)
    .end(ItemRender);

  return (
    <Form
      layout={layout}
      initialValues={value}
      onChange={onChange}
      onSubmit={(...arg) => {
        onSubmit && onSubmit(...arg);
      }}
    >
      {
        formCore => {
          const Buttons = new Godzilla(buttons, {
            components,
            buttonsStyle,
            formCore,
          }).end(ButtonsRender);

          return (
            <React.Fragment>
              {
              Fields
            }
              <div className={classnames('icedesign_form_buttons')}>
                {
                Buttons
              }
              </div>
            </React.Fragment>
          );
        }
      }
    </Form>
  );
}
