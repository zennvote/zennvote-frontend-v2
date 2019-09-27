import * as React from 'react';
import queryParser from 'query-string';

import QuizContent from '../components/Quiz/QuizContents';
import QuizOverview from '../components/Quiz/QuizOverview';
import RadioGroup from '../components/Radio/RadioGroup';

const getOverview = () => (
  <div className="Quiz">
    <QuizOverview />
  </div>
);

const getContent = (index: number) => (
  <div className="Quiz">
    <QuizContent index={index} />
  </div>
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
