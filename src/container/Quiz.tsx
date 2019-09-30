import * as React from 'react';
import queryParser from 'query-string';

import QuizContent from '../components/Quiz/QuizContents';
import QuizOverview from '../components/Quiz/QuizOverview';

const getOverview = () => (
  <QuizOverview />
);

const getContent = (index: number) => (
  <QuizContent index={index} />
);

const Main = ({ location, match }: any) => {
  const query = queryParser.parse(location.search);
  const { index } = query;
  if (index === undefined) {
    return getOverview();
  }
  return getContent(Number(index));
};

export default Main;
