import React from 'react';
import { IntlProvider } from 'react-intl';
import { Language } from '../types.d';
import italianMessages from '../i18n/it.json';
import englishMessages from '../i18n/en.json';

interface Props {
  children: JSX.Element | JSX.Element[],
  language: Language,
}

const Translated = ({ children, language = Language.ITALIAN }: Props) => {
  const locale = language === 'en' ? 'en' : 'it';
  const messages = locale === 'en' ? englishMessages : italianMessages;
  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLocale="it"
      defaultRichTextElements={{
        strong: (chunks) => <strong>{ chunks }</strong>,
      }}
    >
      { children }
    </IntlProvider>
  );
};

export default Translated;
