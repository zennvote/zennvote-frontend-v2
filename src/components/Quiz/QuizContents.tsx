import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import RadioGroup from '../Radio/RadioGroup';

import '../../styles/routes.scss';
import './QuizOverview.scss';

require('dotenv').config();

type Props = { index: number };
type Quiz = { title: string, choices: string[] };

const QuizContents = ({ index }: Props) => {
  const domain = process.env.REACT_APP_SERVER_URL as string;
  const [quiz, setQuiz] = useState({ title: '', choices: [] });
  useEffect(() => {
    axios.get(`${domain}/api/quiz`)
      .then(({ data }) => {
        console.log(data[index]);
        setQuiz(data[index]);
      });
  }, []);

  return (
    <div className="ContentWrap">
      <div className="title">
        노래자랑 퀴즈
      </div>
      <hr className="contour" />
      <div className="quiz-title">
        {index + 1}. {quiz.title}
      </div>
      <div className="quiz-selection">
        <RadioGroup values={quiz.choices} onChanged={(value: string) => console.log(value)} />
      </div>
      <Link to={`/quiz?index=${index + 1}`} className="next">다음</Link>
    </div>
  );
};
export default QuizContents;
