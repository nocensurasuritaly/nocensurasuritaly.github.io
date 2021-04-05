import React from 'react';
import Index from './index';
import Translated from '../components/Translated';
import { Language } from '../types';

export const getStaticProps = ({ params }) => {
  const { language } = params;
  return { props: { language } };
};

export const getStaticPaths = () => ({
  paths: [
    { params: { language: 'it' } },
    { params: { language: 'en' } },
  ],
  fallback: false,
});

interface Props {
  language: Language,
}

const TranslatedIndex = ({ language }: Props) => (
  <Translated language={language}>
    <Index />
  </Translated>
);

export default TranslatedIndex;
