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
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [answerList, setAnswerList] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${domain}/api/quiz`)
      .then(({ data }) => {
        console.log(data);
        setQuiz(data[index]);
      });
  }, []);

  const onChange = (e: string[]): void => {
    const oldAnswer: string[] = [answerList[index - 1]];
    console.log(oldAnswer !== e);
    if (oldAnswer !== e) {
      setAnswerList(answerList.splice(index - 1, 1));
      const newAnswer: string[] = answerList.concat(e);
      setAnswerList(newAnswer);
    }
  };
  useEffect(() => {
    console.log(`answerList : ${answerList}`);
  }, [answerList]);

  const postAnswerList = async () => {
    try {
      const postRequest = await axios.post(`${domain}/api/vote`, { answerList });
      console.log('bb');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ContentWrap">
      <div className="title">
        노래자랑 퀴즈
      </div>
      <hr className="contour" />
      <div className="quiz-title">
        {index}. {quiz[index - 1].title}
      </div>
      <RadioGroup
        values={quiz[index - 1].choices}
        onChanged={(quiz.length === (index)) ? postAnswerList : onChange}
      />
      <Link to={(quiz.length === (index)) ? '/vote/section' : `/quiz?index=${index + 1}`} className="next">{(quiz.length === (index)) ? '투표완료' : '다음'}</Link>
    </div>
  );
};
export default QuizContents;
