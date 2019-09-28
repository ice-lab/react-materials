import React from 'react';
import IceContainer from '@icedesign/container';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function EmojiMart() {
  return (
    <IceContainer>
      <Picker set="emojione" style={{ width: '100%' }} />
    </IceContainer>
  );
}
