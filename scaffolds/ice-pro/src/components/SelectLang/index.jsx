import React from 'react';
import { Select } from '@alifd/next';
import { getLocale, setLocale } from '@/utils/locale';

const Option = Select.Option;
const LANG_CONFIG = {
  'zh-CN': {
    text: '简体中文',
    icon: '🇨🇳',
  },
  'en-US': {
    text: 'English',
    icon: '🇬🇧',
  },
};

function changeLang(key) {
  setLocale(key);
}

export default function SelectLang() {
  const selectedLang = getLocale();
  return (
    <Select
      onChange={changeLang}
      value={selectedLang}
      size="small"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {Object.keys(LANG_CONFIG).map((lang) => {
        return (
          <Option value={lang} key={lang}>
            {LANG_CONFIG[lang].text}
          </Option>
        );
      })}
    </Select>
  );
}
